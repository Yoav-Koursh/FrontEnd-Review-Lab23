var i=100
function changebackgroundcolor(){
// if (document.body.style.backgroundColor== "blue"){
//  document.body.style.backgroundColor = "red"; }
//  else{  document.body.style.backgroundColor = "blue"; }
// }
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var randomColor= "#"+ randomColor
document.body.style.backgroundColor=randomColor;
}

function waitback(){
setTimeout(()=>{
waitback()
changebackgroundcolor()
},"1000")
}

function transparent(){

document.getElementById('img').style.opacity=i/100;
i=i-5
}

function waittrans(){
setTimeout(()=>{
if (i>50)
{waittrans()
transparent()}
},"10")
}
function nontransparent(){

document.getElementById('img').style.opacity=i/100;
i=i+5
}

function waitnottrans(){
setTimeout(()=>{
if (i<105)
{waitnottrans()
nontransparent()}
},"10")
}



// function jump_up_and_down() {
// var hight= document.getElementById("img").style.top;
// console.log (hight);
//  document.getElementById("img").top = "100px"; 
// 	}
// couldnt figure it out :(
