var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");


function inputLength() {
    return input.value.length;
}

button.addEventListener("click", function () {
    if (inputLength() > 0) {
        var li = document.createElement("li");
        li.className = 'list-group-item';
        li.textContent = input.value;
        ol.appendChild(li);
        input.value = "";
    }

})


var button2 = document.getElementById("button-add2");
var input2 = document.getElementById("numberOfTeams");
var ul = document.querySelector("ul")


button2.addEventListener("click", function () {
    let li = document.createElement("li");
    li.className = "number-of-team";
    li.textContent = input2.value
    ul.appendChild(li)



})


//let assign = document.querySelectorAll('assign')

//function numberOfTeams() {
    //return ol.length;//

//}//

