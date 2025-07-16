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
  loadHTML("education-content", "education.html");
  loadHTML("experience-content", "experience.html");
};

function toggleCoursework(id) {
  const section = document.getElementById(id);
  section.classList.toggle('hidden');
}

function openModal() {
  document.getElementById("courseworkModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("courseworkModal").classList.add("hidden");
}

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById("courseworkModal");
  if (event.target === modal) {
    closeModal();
  }
}

