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
