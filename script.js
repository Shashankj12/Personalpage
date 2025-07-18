function loadHTML(targetId, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetId).innerHTML = data;

      // After inserting HTML, hide all modals in that section
      const target = document.getElementById(targetId);
      target.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
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
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

  // 💡 Prevent jump on tab switch
  const currentScroll = window.scrollY;
  window.scrollTo({ top: currentScroll });
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

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// On load, set mode from localStorage
window.addEventListener('load', () => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) document.body.classList.add('dark');
});


