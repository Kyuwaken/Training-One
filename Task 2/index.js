const dataSkills = ["JavaScript", "Angular", "Java", "Spring Boot"]

function clicked() {
    if (document.getElementsByTagName('li').length != dataSkills.length) {

        for (let i = 0; i < dataSkills.length; i++) {
            skills.appendChild(inputData(dataSkills[i]))
        }
    }
}
const skills = document.querySelector("#skill")
function inputData(param) {
    let li = document.createElement("li")
    li.textContent = param;
    return li;
}