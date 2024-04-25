let btn=document.querySelector(".d")
let bttn=document.querySelector(".e")
let first=document.querySelector(".eat")
let second=document.querySelector(".drink")
btn.onclick=function(){
    first.style.display="none"
    second.style.display="block";
    btn.style.color="white"
    btn.style.background="grey"
    bttn.style.background="none"
    bttn.style.color="black"
}
bttn.onclick=function(){
    second.style.display="none"
    first.style.display="block"
    bttn.style.color="white"
    bttn.style.background="grey"
    btn.style.background="none"
    btn.style.color="black"
}
