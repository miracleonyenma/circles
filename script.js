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

