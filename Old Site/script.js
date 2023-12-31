const headerTag = document.getElementsByTagName("header")[0];
const introSection = document.getElementById("intro");
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
const navLinksSelctOptions = document.getElementById("navLinksSelectOption");
const navList = document.getElementById("navLinks");
let otherProjectModal = null;
let individualOtherProjectCollection = null;

document.addEventListener("scroll", () => {
  if (introSection.getBoundingClientRect().y < 1) {
    headerTag.style.backgroundColor = "black";

    propertiesNeutralizer();

    headerTag.lastElementChild.children[0].style.backgroundColor = "white";
    headerTag.lastElementChild.children[0].style.color = "black";
    // Way 1 of styling specific element

    navLinksSelctOptions.innerHTML = "Home <span>&Or;</span>";
    navList.classList.remove("active");
  } else {
    propertiesNeutralizer();
    textColorAndHeaderBGColorNeutralizer();
  }

  if (aboutSection.getBoundingClientRect().y < 1) {
    propertiesNeutralizer();

    const element = headerTag.lastElementChild.children[1].style;
    element.backgroundColor = "white";
    element.color = "black";
    // Way 2 of styling specific element

    navLinksSelctOptions.innerHTML = "About <span>&Or;</span>";
    navList.classList.remove("active");
  }

  if (projectsSection.getBoundingClientRect().y < 1) {
    propertiesNeutralizer();

    navList.children[2].style.backgroundColor = "white";
    navList.children[2].style.color = "black";
    // Way 3 of styling a specific element

    navLinksSelctOptions.innerHTML = "Projects <span>&Or;</span>";
    navList.classList.remove("active");
  }

  if (contactSection.getBoundingClientRect().y < 600) {
    propertiesNeutralizer();

    const element = navList.children[3];
    element.style.backgroundColor = "white";
    element.style.color = "black";
    // Way 4 of styling a specific element

    navLinksSelctOptions.innerHTML = "Contact <span>&Or;</span>";
    navList.classList.remove("active");
  }
});

function propertiesNeutralizer() {

  Array.from([...navList.children]).forEach((element) => {
    element.style.color = "white";
    element.style.backgroundColor = "transparent";
  });
}

function textColorAndHeaderBGColorNeutralizer() {
  headerTag.style.backgroundColor = "transparent";

  Array.from([...navList.children]).forEach((element) => {
    element.style.color = "black";
  });
}

function navLinksDisplay() {
  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    navLinksSelctOptions.firstElementChild.innerHTML = "&And;";
  } else {
    navLinksSelctOptions.firstElementChild.innerHTML = "&Or;";
  }

  if (introSection.getBoundingClientRect().y > 1) {
    navLinksWhiteColorSetter();
  }
}

function navLinksWhiteColorSetter() {
  Array.from([...navList.children]).forEach((element) => {
    element.style.color = "white";
  });
}

function displayOtherProjects(){
  const otherProjectsCollectionTiles = document.getElementById('other-projects-collection-tiles');
  otherProjectsCollectionTiles.classList.toggle('active');

  const otherProjects = document.getElementById('other-projects');
  if(otherProjectsCollectionTiles.classList.contains('active')){
    otherProjects.firstElementChild.firstElementChild.firstElementChild.innerHTML = "&And;";
  }else{
    otherProjects.firstElementChild.firstElementChild.firstElementChild.innerHTML = "&Or;";
  }
}

function displayOtherProjectModal(otherProjectNumber){
otherProjectModal = document.getElementsByClassName('individual-other-project')[otherProjectNumber];

otherProjectModal.clientTop = headerTag.offsetTop;

otherProjectModal.style.top = headerTag.offsetTop + 100 + "px";
otherProjectModal.classList.toggle('active');

individualOtherProjectCollection = document.getElementById('individual-other-projects-collection');
individualOtherProjectCollection.style.zIndex = "2";
individualOtherProjectCollection.classList.toggle('active');
}

window.onclick = function (event) {
  console.log(event.target)
  if(event.target == individualOtherProjectCollection){
    otherProjectModal.classList.toggle('active');
    individualOtherProjectCollection.classList.toggle('active');
  }
}