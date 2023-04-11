// program no : 1

let number = 25;
function print (def) {
    return function (ghi) { 
        console.log(def + ghi)
    }
}
let innerFunction = print(25);
innerFunction(25)

// program no : 3

let value = document.getElementById("h1");
value.innerText="Welcome"

// program no : 4

function addItem() {
    let myList = document.getElementById('myList'); 
    let newItemText = prompt("Enter item text:");
    let newItem = document.createElement('li');
    newItem.textContent = newItemText;
    myList.appendChild(newItem); 
}

// program no : 6

function providestudent() {
    let studentArr = [];
    let std = {
        Name:prompt("Enter your name"),
        Class:prompt("Enter your class")
    };
    studentArr.push(std);
    console.log(studentArr);
    let stringify = JSON.stringify(studentArr)
    localStorage.setItem("student",stringify)
}

// program no : 7

function getObjectFromLocalStorage(studentArr) {
    return JSON.parse(localStorage.getItem(studentArr));
}

// program no : 8

   let previousdata = localStorage.getItem("studentArr");
   let studentArr = previousdata ? JSON.parse(previousdata) : [];
function providestudentfulldata() {
    let std = {
        Name:prompt("Enter your name"),
        Class:prompt("Enter your class name"),
        Fathername:prompt("Enter your father name"),
        Phone:+prompt("Enter your phone number"),
        CNIC:+prompt("Enter your CNIC"),
        collage:prompt("Enter your collage name")
    };
    studentArr.push(std);
    console.log(studentArr);
    let stringify = JSON.stringify(studentArr);
    localStorage.setItem("student",stringify);
}