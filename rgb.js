const title = document.querySelector(".title");
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const navLinks = document.querySelectorAll(".nav-link");

btn.addEventListener("click", function(){
    // get random number between 0-3 ( colors array )
    const randomColor = getRgb();
    
    navLinks.forEach((link) =>{
        link.style.color = randomColor;
    })
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor;
    title.style.color = randomColor;
    btn.style.backgroundColor = randomColor;
});


function getRgb(){
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}