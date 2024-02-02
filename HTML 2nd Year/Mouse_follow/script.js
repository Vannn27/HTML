const coords = {x: 0, y: 0}; //initialize the x and y coordinates of the mouse
const circles = document.querySelectorAll(".circle");
circles.forEach(function (circle){
    circle.x = 0;
    circle.y = 0; //initialize the x and y coordinates of the circles
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY; //get the x and y coordinates of the mouse

    animateCircles();
});

function animateCircles(){

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index){
        circle.style.left = coords.x - 12 + "px";
        circle.style.top = coords.y - 12 + "px"; //move the circle to the x and y coordinates of the mouse
        circle.x = x;
        circle.y = y; //update the x and y coordinates of the circles

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3; //move the circles to the next circle
    });
}