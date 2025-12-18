

let togglebtn = document.querySelector(".togglebtn")
let heading1 = document.getElementById("heading1")
let heading2 = document.getElementById("heading2")
let heading3 = document.getElementById("heading3")
let image = document.getElementById("toggle")
let listItem1 = document.getElementById("listItem1")
let listItem2 = document.getElementById("listItem2")
let listItem3 = document.getElementById("listItem3")
let listItem4 = document.getElementById("listItem4")
let para = document.getElementById("para")
let foot = document.getElementById("foot")
let foot2 = document.getElementById("foot2")
function toggle(){

if(togglebtn.innerHTML== "dark mode"){
togglebtn.innerHTML= "Light mode"
image.src = "./assets/dark mode.png"
document.body.style.backgroundColor = "black";
document.body.style.color = "white"
heading1.style.color = "white"
heading2.style.color = "white"
heading3.style.color = "white"
foot.style.backgroundColor = "white"
foot.style.color = "black"
para.style.color = "white"
togglebtn.style.backgroundColor = "white"
togglebtn.style.color = "black"
listItem1.style.color = "white"
listItem2.style.color = "white"
listItem3.style.color = "white"
listItem4.style.color = "white"

foot2.style.backgroundColor = "white"
foot2.style.color = "white"
}
else{
togglebtn.innerHTML= "dark mode"
image.src = "./assets/light mode.png"
document.body.style.backgroundColor = "white";
}


}



