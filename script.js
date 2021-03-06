const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan =
document.querySelector(".cursor");

const textArray = ["2020","digitalMedia","masterProject", "exhibition", "tor40", "güterbahnhofBremen", "26.11 → 2.12"];
const typingDelay = 120;
const erasingDelay = 40;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


    // // DRAGGABLE
    // dragElement(document.getElementById("mydiv"));
    
    // function dragElement(elmnt) {
    //   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    //   if (document.getElementById(elmnt.id + "header")) {
    //     // if present, the header is where you move the DIV from:
    //     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    //   } else {
    //     // otherwise, move the DIV from anywhere inside the DIV:
    //     elmnt.onmousedown = dragMouseDown;
    //   }
    
    //   function dragMouseDown(e) {
    //     e = e || window.event;
    //     e.preventDefault();
    //     // get the mouse cursor position at startup:
    //     pos3 = e.clientX;
    //     pos4 = e.clientY;
    //     document.onmouseup = closeDragElement;
    //     // call a function whenever the cursor moves:
    //     document.onmousemove = elementDrag;
    //   }
    
    //   function elementDrag(e) {
    //     e = e || window.event;
    //     e.preventDefault();
    //     // calculate the new cursor position:
    //     pos1 = pos3 - e.clientX;
    //     pos2 = pos4 - e.clientY;
    //     pos3 = e.clientX;
    //     pos4 = e.clientY;
    //     // set the element's new position:
    //     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    //     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    //   }
    
    //   function closeDragElement() {
    //     // stop moving when mouse button is released:
    //     document.onmouseup = null;
    //     document.onmousemove = null;
    //   }
    // }

/* 
MAP-BOX OPEN-CLOSE
*/

var mapBox = document.getElementById("map-box");
var mapBoxHandle = document.getElementById("map-box-handle");


var boxState = false;
mapBoxHandle.onclick = function() {showbox()};

function showbox() {
  if (boxState == true) {
    addClass(mapBox, "hidden-box");
    removeClass(mapBox, "showing-box");
    document.getElementById("map-close").innerHTML = "show<br>(map)";
    boxState = false;
    return;
  }
  if (boxState == false) {
    removeClass(mapBox, "hidden-box");
    addClass(mapBox, "showing-box");
    document.getElementById("map-close").innerHTML = "hide<br>(map)";
    boxState = true;
    return;
  }
}

/* RANDOM COLOR */

var accordions = document.getElementsByClassName("project-description");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

/* class functions */

function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
  if (!hasClass(elem, className)) {
      elem.className += ' ' + className;
  }
}

function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}