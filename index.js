const containerEL = document.querySelector(".container");

const btnEL = document.querySelector(".btn");

const popupEl = document.querySelector(".popupCont");

const iconEl = document.querySelector(".closeIcon");

btnEL.addEventListener("click",()=>{
    containerEL.classList.add("active");
    popupEl.classList.remove("active");
});
iconEl.addEventListener("click",()=>{
    containerEL.classList.remove("active");
    popupEl.classList.add("active");
    
}); 