const title = document.querySelector(".title");
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const navLinks = document.querySelectorAll(".nav-link");

btn.addEventListener("click", function(){
    // get random number between 0-3 ( colors array )
    const randomColor = getHexColor();
    
    navLinks.forEach((link) =>{
        link.style.color = randomColor;
    })
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor;
    title.style.color = randomColor;
    btn.style.backgroundColor = randomColor;
});

function getHexColor(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}