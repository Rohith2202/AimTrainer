let scores = 0;



function move() {
    scores++;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let moveleft = Math.floor(Math.random() * width);
    let moveup = Math.floor(Math.random() * height);
    document.querySelector("#Score").innerHTML = scores;
    document.querySelector("button").style.left = parseInt(moveleft) + "px";
    document.querySelector("button").style.top = parseInt(moveup) + "px";
    red = Math.floor(Math.random() * 254)
    green = Math.floor(Math.random() * 254)
    blue = Math.floor(Math.random() * 254)
    document.querySelector("button").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.querySelector("button").style.borderColor = "rgb(" + red + "," + green + "," + blue + ")";
}


function reset() {
    scores = 0;
    document.querySelector("#Score").innerHTML = scores;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let moveleft = Math.floor(Math.random() * width);
    let moveup = Math.floor(Math.random() * height);
    document.querySelector("button").style.left = parseInt(moveleft) + "px";
    document.querySelector("button").style.top = parseInt(moveup) + "px";

}
