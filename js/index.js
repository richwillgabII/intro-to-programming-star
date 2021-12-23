//Insert Copyright Text in Footer
// const today = new Date("November 2, 2021 12:30:00");
// const thisYear = today.getFullYear();
// const footer = document.querySelector('footer');
// const linkedIn = document.getElementById('linkedI');
// const gitHub = document.getElementById('GitHub');
// let copyright = document.createElement('p');
// copyright.innerHTML = "Richard William Gabrielli " + thisYear;
// footer.appendChild(copyright);

//Create a List of Skills
var skills = [
    "Java",
    "C",
    "Python",
    "JavaScript",
    "HTML",
    "Microsoft Access",
    "Archive Space",
];
var skillsSection = document.getElementById('my_skills');
var skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.className = 'tag';
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

/* Lesson 4-3 */ //Updated work for my 4.3 branch in git
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

/* Lesson-4-4 and Lesson-4-5 work */
    //Look in index.css folder

// /* Lesson-6-1 work */

// //Fetch GitHub Repositories
// var githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/richwillgabII/repos");
// githubRequest.send();

// //Handle Response from Server
// githubRequest.addEventListener('load', function(){
//     var repositories = JSON.parse(githubRequest.responseText);
//     console.log(repositories);
//     var projectSection = document.getElementById('projects');
//     var projectList = projectSection.querySelector('ul');
//     for(let i = 0; i < repositories.length; i++){
//         let project = document.createElement('li');
//         project.innerText = repositories[i].name;
//         projectList.appendChild(project);
//     }
// });

/* Lesson-6-2 work */
fetch('https://api.github.com/users/richwillgabII/repos')
    .then((response) => response.json())
    .then((repositories) => {
        console.log(repositories);
        var projectSection = document.getElementById('projects');
        var projectList = projectSection.querySelector('ul');
        for(let i = 0; i < repositories.length; i++){
            let project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
    }
    });