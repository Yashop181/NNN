// Toggle menu on mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked (mobile)
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // lower = faster

  const startCounting = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target; // Ensure it ends exactly
      }
    };
    updateCount();
  };

  // Trigger only when section is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".counter").forEach(startCounting);
        observer.unobserve(entry.target); // Run only once
      }
    });
  }, { threshold: 0.5 });

  const highlightsSection = document.getElementById("highlights");
  observer.observe(highlightsSection);
});




const slide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const size = items[0].clientWidth;

// Move to next slide
function nextSlide() {
  index++;
  if (index >= items.length) index = 0;
  updateCarousel();
}

// Move to previous slide
function prevSlide() {
  index--;
  if (index < 0) index = items.length - 1;
  updateCarousel();
}

// Update slide position
function updateCarousel() {
  slide.style.transform = `translateX(${-index * 100}%)`;
}

// Button click events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 4s
setInterval(nextSlide, 4000);


// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
const closeBtn = document.querySelector(".lightbox .close");

// Open video in lightbox
document.querySelectorAll(".video-item video").forEach(video => {
  video.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxVideo.src = video.src;
    lightboxVideo.play();
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.pause();
  lightboxVideo.src = "";
});
