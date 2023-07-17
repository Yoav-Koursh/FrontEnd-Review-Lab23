function changebackgroundcolor(){
// if (document.body.style.backgroundColor== "blue"){
//  document.body.style.backgroundColor = "red"; }
//  else{  document.body.style.backgroundColor = "blue"; }
// }
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var randomColor= "#"+ randomColor
console.log (randomColor)
document.body.style.backgroundColor=randomColor;
}