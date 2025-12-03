alert("Let's build that resume...but you probably can't go to college anyway.😁");

//consoles & vars

var nameBox = document.getElementById("nameInput");
var ageBox = document.getElementById("ageInput");
var numberBox = document.getElementById("phoneInput");
var genderBox = document.getElementById("genderInput");
var jobBox = document.getElementsByName("college");
var skillBox = document.getElementsByClassName("skill");
var butTon = document.getElementById("submitBtn");
var outPut = document.getElementById("output")

console.log(nameBox);
console.log(ageBox);
console.log(numberBox);
console.log(genderBox);
console.log(jobBox);
console.log(skillBox);
console.log(butTon);
console.log(outPut);


var checkBoxes = document.querySelectorAll('input[type="checkbox"]');
// console.log(checkBoxes);


butTon.addEventListener ('click', myFunction);
function myFunction() {
    const userName = nameInput.value;
    const ageUser = ageInput.value;
    const selectedValue = [];
    for(let i = 0; i < skillBox.length; i++ ) {
        if (skillBox[i].checked) {
            selectedValue.push(skillBox[1].value)
        }
        const checkedValues = [];
        checkBoxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedValues.push(checkbox.value);
            }
        });

        const genderUser = genderInput.options[genderInput.selectedIndex].text;
        outPut.innerHTML = ('Your Full Name:') + (' ') + (userName) + ('<br>') + ('Age:') + (' ') + (ageUser) + ('<br>') + ('Where did you attend college?') + (' ') + (selectedValue) + ('<br>') + ('Skills:') +  (checkedValues);
    }
}



