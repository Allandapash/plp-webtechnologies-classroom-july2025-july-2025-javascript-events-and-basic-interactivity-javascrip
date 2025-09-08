// Part 1: Event Handling

// Counter game
let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increment-btn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

// Theme toggle
const body = document.body;
document.getElementById("theme-toggle").addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

  // Part 2: Interactive Elements

// Collapsible FAQ
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// Part 3: Form Validation

const form = document.getElementById("signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("name-error").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  // Email validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("password-error").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("form-success").classList.remove("hidden");
    form.reset();
  }
});