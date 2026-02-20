// This file handles fetching and displaying project entries from the JSON file in the Project Gallery section.

document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("project-container");
    
    // Show loading state
    projectContainer.innerHTML = '<div class="loading-text">Loading projects...</div>';
    
    fetch("data/projects.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            projectContainer.innerHTML = ''; // Clear loading text
            displayProjects(data.projects);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            projectContainer.innerHTML = '<div class="no-projects">Failed to load projects. Please try again later.</div>';
        });

    function displayProjects(projects) {
        if (!projects || projects.length === 0) {
            projectContainer.innerHTML = '<div class="no-projects">No projects to display yet.</div>';
            return;
        }

        projects.forEach((project, index) => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project");
            
            // Add animation delay for staggered appearance
            projectElement.style.animationDelay = `${index * 0.1}s`;

            const projectImage = document.createElement("img");
            projectImage.src = project.image;
            projectImage.alt = project.title;
            projectImage.onerror = function() {
                // Use a placeholder if image fails to load
                this.src = `https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(project.title)}`;
            };

            const projectTitle = document.createElement("h3");
            projectTitle.textContent = project.title;

            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;

            const projectLink = document.createElement("a");
            projectLink.href = project.link;
            projectLink.textContent = "View Project →";
            projectLink.target = "_blank";
            projectLink.rel = "noopener noreferrer";

            projectElement.appendChild(projectImage);
            projectElement.appendChild(projectTitle);
            projectElement.appendChild(projectDescription);
            projectElement.appendChild(projectLink);
            
            projectContainer.appendChild(projectElement);
        });
    }
});