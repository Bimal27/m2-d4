var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var teamQueue = document.querySelector("#team-queue");

let teamsNumber = document.querySelector("#teams-number");
let teamsRow = document.querySelector("#teams-row");
let assign = document.querySelector(".assign")



function inputLength() {
    return input.value.length;
}

button.addEventListener("click", function () {
    if (inputLength() > 0) {
        var li = document.createElement("li");
        li.className = 'list-group-item';
        li.textContent = input.value;
        teamQueue.appendChild(li);
        input.value = "";
    }

})
window.onload = function () {
    createTeams()
}

function createTeams() {
    for (let i = 0; i < teamsNumber.innerHTML; i++) {
        teamsRow.innerHTML +=
            `<div class="col-3 team">
            <h3>Teams ${i + 1}</h3>
            <ul class="list-group">

            </ul>
        </div>`
    }
}



function assignValue() {
    const member = teamQueue.children[0]

    if (!member) return
    const teams = document.querySelectorAll(".team")
    const rand = Math.floor(Math.random() * teams.length)
    teams[rand].appendChild(member)
}

assign.addEventListener("click", assignValue)



//let assign = document.querySelectorAll('assign')

//function numberOfTeams() {
    //return ol.length;//

//}//

