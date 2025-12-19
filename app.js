

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
let mylist = document.querySelector(".myList")
let mylist1 = document.querySelector(".myList1")
let mylist2 = document.querySelector(".myList2")
let mylist3 = document.querySelector(".myList3")
let mylist4 = document.querySelector(".myList4")
let mylist5 = document.querySelector(".myList5")
let mylist6 = document.querySelector(".myList6")
let mylist7 = document.querySelector(".myList7")
let lastPara = document.querySelector(".lastPara")
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


mylist.style.color = "black"
mylist1.style.color = "black"
mylist2.style.color = "black"
mylist3.style.color = "black"
mylist4.style.color = "black"
mylist5.style.color = "black"
mylist6.style.color = "black"
mylist7.style.color = "black"

lastPara.style.color = "black"
}
else{
togglebtn.innerHTML= "dark mode"
image.src = "./assets/light mode.png"
document.body.style.backgroundColor = "white";


document.body.style.color = "black"
heading1.style.color = "black"
heading2.style.color = "black"
heading3.style.color = "black"
foot.style.backgroundColor = "black"
foot.style.color = "white"
para.style.color = "black"
togglebtn.style.backgroundColor = "black"
togglebtn.style.color = "white"
listItem1.style.color = "black"
listItem2.style.color = "black"
listItem3.style.color = "black"
listItem4.style.color = "black"

foot2.style.backgroundColor = "black"
foot2.style.color = "black"

mylist.style.color = "white"
mylist1.style.color = "white"
mylist2.style.color = "white"
mylist3.style.color = "white"
mylist4.style.color = "white"
mylist5.style.color = "white"
mylist6.style.color = "white"
mylist7.style.color = "white"

lastPara.style.color = "white"
}


}



