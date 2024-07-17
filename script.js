document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    for (const link of smoothScrollLinks) {
        link.addEventListener('click', smoothScrollHandler);
    }

    function smoothScrollHandler(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop - 70; // Adjusts for header height
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    // Ensure the page always loads at the top
    window.scrollTo(0, 0);
});

function showProjectDetails(projectId) {
    let title, description;
    switch (projectId) {
        case 'project1':
            title = "Project 1";
            description = "Detailed description of Project 1.";
            break;
        case 'project2':
            title = "Project 2";
            description = "Detailed description of Project 2.";
            break;
        case 'project3':
            title = "Project 3";
            description = "Detailed description of Project 3.";
            break;
        default:
            title = "Unknown Project";
            description = "No details available.";
    }
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('projectModal').style.display = "block";
}

function closeProjectDetails() {
    document.getElementById('projectModal').style.display = "none";
}

function showExperienceDetails(experienceId) {
    let title, description;
    switch (experienceId) {
        case 'experience1':
            title = "Job Title 1";
            description = "Detailed description of Job Title 1.";
            break;
        case 'experience2':
            title = "Job Title 2";
            description = "Detailed description of Job Title 2.";
            break;
        default:
            title = "Unknown Experience";
            description = "No details available.";
    }
    document.getElementById('experienceTitle').innerText = title;
    document.getElementById('experienceDescription').innerText = description;
    document.getElementById('experienceModal').style.display = "block";
}

function closeExperienceDetails() {
    document.getElementById('experienceModal').style.display = "none";
}
