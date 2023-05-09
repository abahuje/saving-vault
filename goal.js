let word=document.getElementById("word")
const showWord=()=>{
    // alert(word.value)
    document.getElementById("demo").innerHTML +=`<br/>Goal: ${word.value}`;
    word.value="";
}