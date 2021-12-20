//Insert Copyright Text in Footer
const today = new Date("November 2, 2021 12:30:00");
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = "Richard William Gabrielli " + thisYear;
footer.appendChild(copyright);

//Create a List of Skills
var skills = [
    "Java",
    "C",
    "Python",
    "JavaScript",
    "HTML",
];
var skillsSection = document.getElementById('skills');
var skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
