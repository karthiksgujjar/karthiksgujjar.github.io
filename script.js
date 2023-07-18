const headerTag = document.getElementsByTagName('header')[0];
const introSection = document.getElementById('intro');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const navLinks = document.querySelectorAll('nav>a');

document.addEventListener('scroll', () => {
    if(introSection.getBoundingClientRect().y < 1)
    {
        bgColorNeutralizer();
        headerTag.lastElementChild.children[0].style.backgroundColor='#03ABFF';
    }
    if(aboutSection.getBoundingClientRect().y < 1) {
        bgColorNeutralizer();
        headerTag.lastElementChild.children[1].style.backgroundColor='#03ABFF';
    }
    if(projectsSection.getBoundingClientRect().y < 1){
        bgColorNeutralizer();
        headerTag.lastElementChild.children[2].style.backgroundColor='#03ABFF';
    }
    if(contactSection.getBoundingClientRect().y<600){
        bgColorNeutralizer();
        headerTag.lastElementChild.children[3].style.backgroundColor='#03ABFF';
    }
});

function bgColorNeutralizer(){
    headerTag.lastElementChild.children[0].style.backgroundColor='rgba(0,0,0,0)';
    headerTag.lastElementChild.children[1].style.backgroundColor='rgba(0,0,0,0)';
    headerTag.lastElementChild.children[2].style.backgroundColor='rgba(0,0,0,0)';
    headerTag.lastElementChild.children[3].style.backgroundColor='rgba(0,0,0,0)';
}
