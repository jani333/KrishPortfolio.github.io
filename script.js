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
            title = "Markham Fine Foods";
            description = "Delivered exceptional customer service and support in a high-traffic convenience store, consistently exceeding customer expectations. Managed inquiries, resolved issues, and maintained a welcoming atmosphere, contributing to a positive shopping experience for all patrons.";
            break;
        case 'experience2':
            title = "Seneca College";
            description = "As a dedicated computer science student at Seneca College, I have acquired a strong foundation in programming, data structures, and software development. My coursework and hands-on projects have equipped me with the skills necessary to solve complex technical problems and develop innovative solutions. I have consistently demonstrated a commitment to learning and a passion for advancing my knowledge in the dynamic field of computer science.";
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
