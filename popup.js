const worksInfo = [
  {
    projectId: 1,
    gridClass: 'w1',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon: './Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projectId: 2,
    gridClass: 'w2',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon: './Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projectId: 3,
    gridClass: 'w3',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon: './Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projectId: 4,
    gridClass: 'w4',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon: './Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projectId: 5,
    gridClass: 'w5',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon: './Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projectId: 6,
    gridClass: 'w6',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon: './Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },
];

const worksGrid = document.querySelector('.recent-work');

for (let i = 0; i < worksInfo.length; i += 1) {
  worksGrid.innerHTML += `
    <div class="work-1-container ${worksInfo[i].gridClass}">
    <img class="project-image" src="./Images/img-work.svg" alt="project picture">
    <div class="work-bottom-cont">
      <h2 class="project-title">Multi-Post Stories<br>Gain+Glory</h2>
      <ul class="Language-tags">
         <li class="lang-tag">Ruby on rails</li>
         <li class="lang-tag">css</li>
         <li class="lang-tag">JavScript</li>
         <li class="lang-tag">html</li>
      </ul>
      <div class="button">
         <button class="project-button" onclick="popupHTML(${i})">See Project</button>
    </div>
    </div>
    </div>
    `;
}

const popup = document.querySelector('.popup');
// eslint-disable-next-line no-unused-vars
function popupHTML(id) {
  popup.style.display = 'flex';
  popup.innerHTML = `
    <div class="popup-background">
    <div class="close-button-container">
    <img class="popup-close-button" src="./Images/Disabled.svg" alt="Popup close button">
    </div>
    <div class"container-popup">
    <img class="popup-image-dsk " src="${worksInfo[id].imageDesktop}" alt="Project Image">
    <img class="popup-image-mbl " src="${worksInfo[id].imageMobile}" alt="Project Image">
    <div id="title-btn">
    <div id="title-div">
    <h2 class="popup-title">${worksInfo[id].name}</h2>
    </div>
    <div class="popup-button-desktop">
    <button class="a1">See live<img class="button-icon" src="${worksInfo[id].liveIcon}"></button>
    <button class="a1" id="btn2">See Source<img class="button-icon" src="${worksInfo[id].githubIcon}"></button>
    </div>
    </div>
    <div class="tags">
    <ul class="tags-desktop" id="mytech">
        ${worksInfo[id].technologiesDesktop.map((ele) => `<li>${ele}</>`)}
        </ul>
        <ul class="tags-mobile" id="mobile-ul">
        ${worksInfo[id].technologiesMobile.map((ele) => `<li>${ele}</>`)}
    </ul>
    </div>
    <div class="desc">
    <p class="popup-description">${worksInfo[id].projectDescription}</p>
    </div>
    <div class="popup-button-mobile">
    <button class="a1">See live<img class="button-icon" src="${worksInfo[id].liveIcon}"></button>
    <button class="a1" id="btn2">See Source<img class="button-icon" src="${worksInfo[id].githubIcon}"></button>
    </div>
    </div>
    </div>
    `;
  const popupClose = document.querySelector('.popup-close-button');
  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}
