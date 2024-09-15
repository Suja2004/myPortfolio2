const menubar =document.getElementById("menu-icon");
const nav = document.getElementById("nav1");
menubar.addEventListener("click",function(){
nav.classList.toggle("show");
var iE=document.getElementById('IE');
if(iE.classList.contains('bx-menu')){
    iE.classList.remove('bx-menu');
    iE.classList.add('bx-x');
}else{
    iE.classList.remove('bx-x');
    iE.classList.add('bx-menu');
}
});
