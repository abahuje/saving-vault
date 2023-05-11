let word=document.getElementById("word")
const showWord=()=>{
    // alert(word.value)
    document.getElementById("demo").innerHTML +=`<br/>Goal: ${word.value}`;
    word.value="";
}

let dashboard=document.querySelector(".dashboard")
let dash=document.querySelector(".dash")
let button=document.querySelector("button")
let span1=document.querySelector(".span1")
let span2=document.querySelector(".span2")
let span3=document.querySelector(".span3")
let span4=document.querySelector(".span4")
let span5=document.querySelector(".span5")
function menu(){
dashboard.style.width="100px";
dash.style.fontSize="20px";
button.style.display="none";
span1.style.fontSize="15px";
span2.style.fontSize="15px";
span3.style.fontSize="15px";
span4.style.fontSize="15px";
span5.style.fontSize="15px";
span1.style.paddingLeft="20px";
span2.style.paddingLeft="20px";
span3.style.paddingLeft="20px";
span4.style.paddingLeft="20px";
span5.style.paddingLeft="20px";
}