const aboutSection = document.getElementById('about');
const headerTag = document.getElementsByTagName('header')[0];
const navLinks = document.querySelectorAll('nav>a');

console.log(navLinks)

document.addEventListener('scroll', () => {
    if(aboutSection.getBoundingClientRect().y < 0) {
        headerTag.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        navLinks.forEach((link) => {
            link.style.color= 'white';
        })
    }
    else{
        headerTag.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        navLinks.forEach((link) => {
            link.style.color= 'black';
        })
    }
});