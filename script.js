var container = document.querySelector(".main"),
big = document.querySelector(".big"), 
small = document.querySelector(".small"),

revolveBox  = container.getBoundingClientRect(),
centerPoint = window.getComputedStyle(container).transformOrigin,
centers = centerPoint.split(" "),
centerY = revolveBox.top + parseInt(centers[1]) - window.pageYOffset,
centerX = revolveBox.left + parseInt(centers[0]) - window.pageXOffset;          
//If the mathematical and visual center of the element were the same, you could use the following:
// centerX = revolveBox.left + revolveBox.width/2 - window.pageXOffset,
// centerY = revolveBox.top + revolveBox.height/2 - window.pageYOffset;

//add event listener for the mouse
window.addEventListener("mousemove", function(e){

    //Inside this function, we do some trigonometry to determine the angle of the mouse, relative to the origin-center of the element:
    var radians = Math.atan2(e.clientX - centerX, e.clientY - centerY);
    // this.console.log(radians);
    var degree = (radians * (180 / Math.PI) * -1) + 180;
    this.console.log(degree);
    container.style.transform = "rotate(" + degree + "deg)";
});