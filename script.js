// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  // Add mobile menu button
  const nav = document.querySelector(".navbar");
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.className = "mobile-menu-btn";
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  nav.insertBefore(mobileMenuBtn, nav.firstChild);

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    const navLeft = document.querySelector(".nav-left");
    const navRight = document.querySelector(".nav-right");
    navLeft.classList.toggle("show");
    navRight.classList.toggle("show");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Video play button functionality
  // Video Player Functionality
  const videoContainer = document.querySelector(".video-container");
  const video = document.querySelector("#featureVideo");
  const playBtn = document.querySelector(".play-btn");

  videoContainer.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      videoContainer.classList.add("playing");
    } else {
      video.pause();
      videoContainer.classList.remove("playing");
    }
  });

  // Testimonials Slider
const testimonials = [
  {
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
    author: "John Doe",
    role: "UI designer",
  },
  {
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "The best calendar app for managing your team's schedule and tasks efficiently.",
    author: "Jane Smith",
    role: "Product Manager",
  },
  {
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "A revolutionary way to organize your daily tasks and meetings.",
    author: "Mike Johnson",
    role: "Developer",
  },
];

let currentSlide = 0;
const testimonialContent = document.querySelector(".testimonial-content");
const dotsContainer = document.querySelector(".testimonial-dots");

// Create dots dynamically
testimonials.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateTestimonial();
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

// Function to update content
function updateTestimonial() {
  const t = testimonials[currentSlide];
  testimonialContent.innerHTML = `
    <img src="${t.image}" alt="${t.author}" class="testimonial-image">
    <p class="testimonial-text">${t.text}</p>
    <div class="testimonial-author">
      <h3>${t.author}</h3>
      <p>${t.role}</p>
    </div>
  `;

  // Update dots
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Auto slide logic
function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonials.length;
  updateTestimonial();
}

// Auto-slide every 4 seconds
let slideInterval = setInterval(nextSlide, 4000);

// Reset interval on dot click
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}

  // Contact Form Modal
  const contactForm = document.querySelector(".contact-form form");
  const body = document.body;

  // Create modal HTML
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <p>Your query sent successfully</p>
        </div>
    `;
  body.appendChild(modal);

  // Form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "block";
    body.style.overflow = "hidden";
  });

  // Close modal
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "auto";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }
  });
});