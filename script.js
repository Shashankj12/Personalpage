function loadHTML(targetId, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

window.onload = () => {
  loadHTML("aboutme-content", "aboutme.html");
  loadHTML("experience-content", "experience.html");
  loadHTML("projects-content", "projects.html");
  loadHTML("education-content", "education.html");
  loadHTML("publications-content", "publications.html");
};

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


