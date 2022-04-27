
//document.body.onload = addElement;
// get a reference to the textbox where the name is to be entered
const regNumber = document.querySelector(".fReg");
//get a reference to the add button
const addBtn = document.querySelector(".AddBtn");
const resetBtn = document.querySelector(".ResetBtn");

//variables
var regNumbers = RegstrationNumbers();

if (localStorage['regNumbers']) {
    var theregNumbers = JSON.parse(localStorage.getItem('regNumbers'))
    for (var i = 0; i < theregNumbers.length; i++) {
        regNumbers.addRegistration(theregNumbers[i]);
    }
    var allRegNumbers = regNumbers.AllRegNumbers();
    for (var i = 0; i < allRegNumbers.length; i++) {
        createDivElment(allRegNumbers[i]);
    }
}
function createDivElment(regNumber) {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.classList.add("plate");
    // and give it some content
    const newContent = document.createTextNode(regNumber);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.querySelector(".plates");
    document.body.insertBefore(newDiv, currentDiv);
}

function addElement() {
    if (regNumber.value !== "") {
        regNumbers.addRegistration(regNumber.value);
        localStorage.setItem('regNumbers', JSON.stringify(regNumbers.AllRegNumbers()));
        createDivElment(regNumber.value);
        //regNumber.value = "";
    }
}
addBtn.addEventListener('click', addElement);

//get reference to the dropdown manue
var selectedBtn = document.querySelector(".townsname");
function selectedTown() {
    //remove all current plates
    const elementList = document.querySelectorAll(".plate")
    for (let i = 0; i < elementList.length; i++) {
        elementList[i].remove();
    }
    var regbyTown = regNumbers.filterByTown(selectedBtn.value);
    for (let i = 0; i < regbyTown.length; i++) {
        createDivElment(regbyTown[i]);
    }
}
selectedBtn.addEventListener('click', selectedTown);

function resetReg() {
    localStorage['regNumbers'] = "";
    //remove all current plates
    const elementList = document.querySelectorAll(".plate")
    for (let i = 0; i < elementList.length; i++) {
        elementList[i].remove();
    }
    regNumbers.resetReg;
}
resetBtn.addEventListener('click', resetReg);