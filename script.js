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

