var c=document.getElementsByClassName('myproj');
if(c){
c[0].addEventListener('click' ,function(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=view;
 function view(){

  if(xhr.readyState === XMLHttpRequest.DONE){
       console.log('hi1');
   if(xhr.status===200){
        console.log('hi');
   history.pushState(null,null,"./test");
      history.replaceState(null,null,"portfolio.html");
   var can=document.getElementById('#canvas');
   can.innerHTML=xhr.responseText;
 }
 else {
   alert("rg");
 }
}
   }
// xhr.onload = function() {
//   console.log(this.responseXML.title);
// }
xhr.open("GET", "test.html");
xhr.responseType = "text";
xhr.send();
});
}

var c=document.getElementsByClassName('about');
if(c){
c[0].addEventListener('click' ,function(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=view;
 function view(){

  if(xhr.readyState === XMLHttpRequest.DONE){
       console.log('hi1');
   if(xhr.status===200){
        console.log('hi');
   history.pushState(null,null,"./about");
   history.replaceState(null,null,"portfolio.html");
   var can=document.getElementById('#canvas');
   can.innerHTML=xhr.responseText;
 }
 else {
   alert("rg");
 }
}
   }
// xhr.onload = function() {
//   console.log(this.responseXML.title);
// }
xhr.open("GET", "about.html");
xhr.responseType = "text";
xhr.send();
});
}


var c=document.getElementsByClassName('contact');
if(c){
c[0].addEventListener('click' ,function(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=view;
 function view(){

  if(xhr.readyState === XMLHttpRequest.DONE){
       console.log('hi1');
   if(xhr.status===200){
        console.log('hi');
   history.pushState(null,null,"./contact");
     history.replaceState(null,null,"portfolio.html");
   var can=document.getElementById('#canvas');
   can.innerHTML=xhr.responseText;
 }
 else {
   alert("rg");
 }
}
   }
// xhr.onload = function() {
//   console.log(this.responseXML.title);
// }
xhr.open("GET", "contact.html");
xhr.responseType = "text";
xhr.send();
});
}
