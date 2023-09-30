const cursorDot = document.querySelector("[data-cursor-dot]");
// const cursorOutline = document.querySelector("[data-cursor-outline]");
const hoverables = document.querySelectorAll("#hoverable");
var timeout;

window.addEventListener("mousemove", (e) => {
   const posX = e.clientX;
   const posY = e.clientY;

   cursorDot.style.left = `${posX}px`;
   cursorDot.style.top = `${posY}px`;

   // cursorOutline.animate({
   //     left: `${posX}px`,
   //     top: `${posY}px`
   // }, {duration: 1000, fill: "forwards"})

   // function mouseStopped(){
   //    cursorDot.style.transform = 'scale(0.8)';
   // }

   // clearTimeout(timeout);
   // timeout = setTimeout(mouseStopped, 1000);

});

for (let i = 0; i < hoverables.length; i++){
   hoverables[i].addEventListener('mouseenter', onMouseEnter);
   hoverables[i].addEventListener('mouseleave', onMouseLeave);
}

function onMouseEnter(){
   cursorDot.classList.add("grow");
}

function onMouseLeave(){
   cursorDot.classList.remove("grow");
}