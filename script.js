const body = document.querySelector("body");
const button = document.querySelector("button");

const color = ['red','blue','green','violet','purple'];

body.style.backgroundColor = "violet";

button.addEventListener('click',color_change);

function color_change(){ 
const colorindex = parseInt(Math.random()*color.length);
body.style.backgroundColor = color[colorindex];

}



