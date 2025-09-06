// Toggle menu on mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
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
