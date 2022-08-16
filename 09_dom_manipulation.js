// DOM manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elem2 = document.getElementsByClassName('container');
// console.log(elem2);
// elem2[0].style.background = "yellow";
elem2[0].classList.add("bg-primary");
elem2[0].classList.add("text_success");
elem2[0].classList.remove("text_success");

// console.log(elem2[0].innerHTML);
// console.log(elem2[0].innerText);

tn = document.getElementsByTagName('div');
// console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "This is created paragraph";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is created paragraph";
tn[0].replaceChild(createdElement2, createdElement);

// Selecting using query
// sel = document.querySelector(".container");
sel = document.querySelectorAll(".container");
// console.log(sel);

