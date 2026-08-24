document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project[data-repo]");

  projects.forEach((project) => {
    const repoUrl = project.dataset.repo;

    project.setAttribute("role", "link");
    project.setAttribute("tabindex", "0");
    project.setAttribute("aria-label", "Ver repositorio en GitHub");

    project.addEventListener("click", () => {
      window.open(repoUrl, "_blank", "noopener");
    });

    project.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.open(repoUrl, "_blank", "noopener");
      }
    });
  });

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});