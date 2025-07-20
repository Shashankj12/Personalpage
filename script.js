function loadHTML(targetId, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetId).innerHTML = data;

      // ✅ Ensure all modals inside that section are hidden after insert
      const target = document.getElementById(targetId);
      target.querySelectorAll('.modal').forEach(m => {
        m.classList.add('hidden');
      });
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

window.addEventListener('load', () => {
  loadHTML("home-content", "aboutme.html");
  loadHTML("aboutme-content", "aboutme.html");
  loadHTML("experience-content", "experience.html");
  loadHTML("projects-content", "projects.html");
  loadHTML("education-content", "education.html");
  loadHTML("publications-content", "publications.html");
  loadHTML("publications-content", "certifications.html");

  // Set dark mode
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) document.body.classList.add('dark');
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

  // ✅ Fix scroll jump
  const scrollY = window.scrollY;
  requestAnimationFrame(() => window.scrollTo({ top: scrollY }));
}


window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash?.substring(1);
  if (hash) {
    showTab(hash); // Just use your existing tab-switching function
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}
