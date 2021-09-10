let btn=document.getElementById("btn");
let output=document.getElementById("output");

btn.addEventlistener('click', function(){
    let str=document.getElementById("word").value
    output.innerHTML=str.length;
})