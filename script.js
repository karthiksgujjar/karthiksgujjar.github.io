const headerTag = document.getElementsByTagName('header')[0];
const introSection = document.getElementById('intro');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const navLinksSelctOptions = document.getElementById('navLinksSelectOption');

document.addEventListener('scroll', () => {
    if(introSection.getBoundingClientRect().y < 1)
    {
        headerTag.style.backgroundColor='black';
        headerTag.lastElementChild.children[0].style.color='white';
        headerTag.lastElementChild.children[1].style.color='white';
        headerTag.lastElementChild.children[2].style.color='white';
        headerTag.lastElementChild.children[3].style.color='white';

        propertiesNeutralizer();
        headerTag.lastElementChild.children[0].style.backgroundColor='white';
        headerTag.lastElementChild.children[0].style.color='black';

        navLinksSelctOptions[0].selected = 'true';
    }
    else if(introSection.getBoundingClientRect().y > 1){
    textColorAndHeaderBGColorNeutralizer();
    
    }

    if(aboutSection.getBoundingClientRect().y < 1) {
        propertiesNeutralizer();
        headerTag.lastElementChild.children[1].style.backgroundColor='white';
        headerTag.lastElementChild.children[1].style.color='black';

        navLinksSelctOptions[1].selected = 'true';
    }

    if(projectsSection.getBoundingClientRect().y < 1){
        propertiesNeutralizer();
        headerTag.lastElementChild.children[2].style.backgroundColor='white';
        headerTag.lastElementChild.children[2].style.color='black';

        navLinksSelctOptions[2].selected = 'true';
    }
    
    if(contactSection.getBoundingClientRect().y<600){
        propertiesNeutralizer();
        headerTag.lastElementChild.children[3].style.backgroundColor='white';
        headerTag.lastElementChild.children[3].style.color='black';

        navLinksSelctOptions[3].selected = 'true';
    }
});

function propertiesNeutralizer(){
    headerTag.lastElementChild.children[0].style.backgroundColor='transparent';
    headerTag.lastElementChild.children[0].style.color='white';

    headerTag.lastElementChild.children[1].style.backgroundColor='transparent';
    headerTag.lastElementChild.children[1].style.color='white';

    headerTag.lastElementChild.children[2].style.backgroundColor='transparent';
    headerTag.lastElementChild.children[2].style.color='white';

    headerTag.lastElementChild.children[3].style.backgroundColor='transparent';
    headerTag.lastElementChild.children[3].style.color='white';
}

function textColorAndHeaderBGColorNeutralizer(){
    headerTag.style.backgroundColor='transparent';

    headerTag.lastElementChild.children[0].style.color='black';
    headerTag.lastElementChild.children[1].style.color='black';
    headerTag.lastElementChild.children[2].style.color='black';
    headerTag.lastElementChild.children[3].style.color='black';
}