const worksInfo = [ 
 {
    projectId : 1,
    gridClass : "w1",
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon:'./Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails','CSS','JavaScript'],
    technologiesDesktop: ['Codekit','Github','JavaScript','Bootstrap','Terminal','Codepen'],
    sourceLink: '#',
    liveLink: '#',
},

{
    projectId : 2,
    gridClass : "w2",
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon:'./Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails','CSS','JavaScript'],
    technologiesDesktop: ['Codekit','Github','JavaScript','Bootstrap','Terminal','Codepen'],
    sourceLink: '#',
    liveLink: '#',
},

{
    projectId: 3,
    gridClass : "w3",
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon:'./Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails','CSS','JavaScript'],
    technologiesDesktop: ['Codekit','Github','JavaScript','Bootstrap','Terminal','Codepen'],
    sourceLink: '#',
    liveLink: '#',
},

{
    projectId: 4,
    gridClass : "w4",
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon:'./Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails','CSS','JavaScript'],
    technologiesDesktop: ['Codekit','Github','JavaScript','Bootstrap','Terminal','Codepen'],
    sourceLink: '#',
    liveLink: '#',
},

{
    projectId: 5,
    gridClass : "w5",
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon:'./Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails','CSS','JavaScript'],
    technologiesDesktop: ['Codekit','Github','JavaScript','Bootstrap','Terminal','Codepen'],
    sourceLink: '#',
    liveLink: '#',
},

{
    projectId: 6,
    gridClass : "w6",
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './Images/Snapshoot-Portfolio.svg',
    imageMobile: './Images/mobile-snapshoot.svg',
    githubIcon:'./Images/gitHubIcon.png',
    liveIcon: './Images/liveIcon.svg',
    technologiesMobile: ['Ruby on Rails','CSS','JavaScript'],
    technologiesDesktop: ['Codekit','Github','JavaScript','Bootstrap','Terminal','Codepen'],
    sourceLink: '#',
    liveLink: '#',
},
];
  
  const worksGrid = document.querySelector('.recent-work');
  
  for (let i = 0; i < worksInfo.length; i++) {
    
    worksGrid.innerHTML+= `
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
  
  const popup= document.querySelector('.popup');
  function popupHTML(id)
  {
    popup.style.display= 'flex';
    popup.innerHTML=`
    <img class="popup-image-dsk" src="${worksInfo[id].imageDesktop}" alt="Project Image">
    <img class="popup-image-mbl" src="${worksInfo[id].imageMobile}" alt="Project Image">
    <h2 class="popup-title">${worksInfo[id].name}</h2>
    <ul class="popup-tags"></ul>
    <p class="popup-description">${worksInfo[id].projectDescription}</p>
    <button>See live<img class="button-icon" src="${worksInfo[id].liveIcon}"></button>
    <button>See Source<img class="button-icon" src="${worksInfo[id].githubIcon}"></button>
    
    `;
  }
  