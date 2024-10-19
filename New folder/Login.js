const normalFace = document.querySelector(".normal")
const closeFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
const clickFace = document.querySelector(".click");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".loginBtn")
const wrapper = document.querySelector(".wrapper");



window.addEventListener("load",() => {
    normalFace.classList.add("active");
})


emailInput.addEventListener("click", () => {
    openFace.classList.add("active");
    normalFace.classList.remove("active");
    closeFace.classList.remove("active");
    clickFace.classList.remove("active");
});


passwordInput.addEventListener("click", () => {
    closeFace.classList.add("active");
    normalFace.classList.remove("active");
    openFace.classList.remove("active");
    clickFace.classList.remove("active");


});


 function buttonHover(){
    clickFace.classList.add("active");
    normalFace.classList.remove("active");
    openFace.classList.remove("active");
    closeFace.classList.remove("active");
}



