const menubar = document.getElementById("menu-icon");
const nav = document.getElementById("nav1");
menubar.addEventListener("click", function () {
    nav.classList.toggle("show");
    var iE = document.getElementById('IE');
    if (iE.classList.contains('bx-menu')) {
        iE.classList.remove('bx-menu');
        iE.classList.add('bx-x');
    } else {
        iE.classList.remove('bx-x');
        iE.classList.add('bx-menu');
    }
});

const projects = document.querySelectorAll('.project-grid');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, { threshold: 0.1 });

projects.forEach((project) => {
    observer.observe(project);
});



const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 10px rgba(51, 204, 255, 0.7)';
        input.style.transition = 'box-shadow 0.3s ease';
    });

    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
    });
});

