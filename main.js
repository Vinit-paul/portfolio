const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav .Menu a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href'); // Get the target section id
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('nav').offsetHeight, // Adjust for fixed navbar
                    behavior: 'smooth',
                });
            }
        });
    });
});

  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll('nav .Menu a');
  
    let currentSection = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - document.querySelector('nav').offsetHeight;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navbarLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
  