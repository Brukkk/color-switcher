const title = document.querySelector(".title");
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0-3 ( colors array )
    const randomColor = getRandomColor();
    
    console.log(randomColor);

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor;
    title.style.color = randomColor;
    btn.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let num = parseInt(Math.random() * 3);
    
    
    // if arrNumber == 0, its an rgba ccolor
    // else is HEX
    if (num === 0){
        return getRgb();
    } else if(num === 1) {
        return getHexColor();
    } else {
        return getHslColor();
    }
}

function getRgb(){
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    
}

function getHexColor(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

function getHslColor(){
    let h = Math.floor(Math.random() * 360)
    let s = Math.floor(Math.random() * 100)
    let l = Math.floor(Math.random() * 100);
    return `hsl(${h},${s}%,${l}%)`;
}
