const title = document.querySelector(".title");
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const navLinks = document.querySelectorAll(".nav-link");

btn.addEventListener("click", function(){
    // get random number between 0-3 ( colors array )
    const randomColor = getHslColor();
    
    navLinks.forEach((link) =>{
        link.style.color = randomColor;
    })
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor;
    title.style.color = randomColor;
    btn.style.backgroundColor = randomColor;
});

function getHslColor(){
    let h = Math.floor(Math.random() * 360)
    let s = Math.floor(Math.random() * 100)
    let l = Math.floor(Math.random() * 100);
    return `hsl(${h},${s}%,${l}%)`;
}