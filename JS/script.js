/*Header*/

const header = document.querySelector('.header');
const igm = document.querySelector('.logo-color');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 1) {
        header.classList.add('active');
        igm.classList.add('active');
    }else{
        header.classList.remove('active');
        igm.classList.remove('active');
    }
}

/*Hamburger*/

var navlink = document.querySelector('.nav-links');
var pagebody = document.body;
var hamburg = document.querySelector('.hamburger');

function showmenu() {
    navlink.classList.toggle('show');
    hamburg.classList.toggle('active');

    if(navlink.classList.contains('show')) {
        pagebody.style.height = "100%";
        pagebody.style.overflowY = "hidden";
    } else {
        pagebody.style.height = "auto";
        pagebody.style.overflowY = "visible";
    }
}

/*Slidere*/
if(window.innerWidth > 800) {
const slider = document.getElementById("image-slider");

const handleDown = e => slider.dataset.mouseDownAt = e.clientX;

const handleUp = () => {
    slider.dataset.mouseDownAt = "0";
    slider.dataset.prevProcent = slider.dataset.procent;
}

const handleMove = e => {
    if(slider.dataset.mouseDownAt === "0") return;

    const mouseNow = parseFloat(slider.dataset.mouseDownAt) - e.clientX,
    mouseEnd = window.innerWidth/2;

    const procent = (mouseNow/mouseEnd) * 100,
    nextProcentInfinit = parseFloat(slider.dataset.prevProcent) - procent;
    if(window.innerWidth < 1440) nextProcent = Math.max(Math.min(nextProcentInfinit,0),-150);
    else if(window.innerWidth < 2560 && window.innerWidth >= 1440) nextProcent = Math.max(Math.min(nextProcentInfinit,0),-80);
    else if(window.innerWidth >= 2560) nextProcent = Math.max(Math.min(nextProcentInfinit,0),0);

    slider.dataset.procent = nextProcent;

    slider.animate({
        transform: `translate(${nextProcent}%,-50%)`
    },{duration: 1200, fill: "forwards"});
}

const contain = document.getElementById("container");

contain.onmousedown = e => handleDown(e);
contain.onmouseup = e => handleUp(e);
contain.onmousemove = e => handleMove(e);
contain.ontouchstart = e =>handleDown(e.touches[0]);
contain.ontouchend = e =>handleUp(e.touches[0]);
contain.ontouchmove = e =>handleMove(e.touches[0]);

}
