function loadHTML(targetId, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

window.addEventListener('load', () => {
  loadHTML("aboutme-content", "aboutme.html");
  loadHTML("experience-content", "experience.html");
  loadHTML("projects-content", "projects.html");
  loadHTML("education-content", "education.html");
  loadHTML("publications-content", "publications.html");

  handleScroll();  // sync scroll state on load
});


function toggleCoursework(id) {
  const section = document.getElementById(id);
  section.classList.toggle('hidden');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // optional
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto"; // optional
  }
}

// Optional: Close modal if user clicks outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = "auto";
    }
  });
}

function showTab(tabId) {
  const allSections = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  allSections.forEach(section => section.classList.remove('active'));
  allButtons.forEach(button => button.classList.remove('active'));

  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Set active button by matching tabId to its button
  const matchingButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
  if (matchingButton) {
    matchingButton.classList.add('active');
  }

  // Update URL hash
  history.replaceState(null, null, `#${tabId}`);
}


window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash?.substring(1);
  if (hash) {
    showTab(hash); // Just use your existing tab-switching function
  }
});


function handleScroll() {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}


window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);  // Make sure state is synced on load

