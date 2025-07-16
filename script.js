function loadHTML(targetId, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

window.onload = () => {
  loadHTML("education-content", "education.html");
  loadHTML("experience-content", "experience.html");
  loadHTML("aboutme-content", "aboutme.html");
};

