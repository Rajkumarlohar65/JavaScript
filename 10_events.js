// function clicked(){
//     console.log('The button was clicked. ');
// }

// window.onload = function(){
//     console.log("The window was loaded");
// }

// Events in Javascript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log("clicked on container");
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse on container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse outof container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    // console.log("mouse up when clicked on container");
// })

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    // console.log("mouse down when clicked on container");
})