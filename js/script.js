let bgPattern = document.querySelector('#bg');
window.addEventListener("scroll", ()=>{
    bgPattern.style.backgroundPosition = +window.pageYOffset+"px";
})