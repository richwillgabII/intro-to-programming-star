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

/* Lesson 4-3 */
const messageForm = document.querySelector('[name = "leave_message"]');
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log(name, email, message);
    const messageSection = document.getElementById('messages');
    var messageList = messageSection.querySelector('ul');
    var newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href = "mailto:${email}">${name}</a> <span>  wrote: ${message} </span>`;
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", (e) => {
        let entry = e.target.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

