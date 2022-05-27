
let x = 0;
function AfiseazaJoc() {
    x += 1;
    if (x > 1)
        return;
    const ve = document.getElementById("id1");
    const burduf = window.getComputedStyle(ve, null);
    ve.style.top = burduf.getPropertyValue("top") ;
    ve.style.left = burduf.getPropertyValue("left");

    function W(e) {
        key = e.key;
        if (key == "w")
            ve.style.top = parseInt(ve.style.top.slice(0, -2)) - 5 + "px";
        console.log(parseInt(ve.style.top))
        let t = parseInt(ve.style.top), l = parseInt(ve.style.left);
        if (t > 400 && t < 600 && l > 460  && l < 600)
            SchimbaRandom();
    }
    function S(e) {
        key = e.key;
    
        if (key == "s")
            ve.style.top = parseInt(ve.style.top.slice(0, -2)) + 5 + "px";
        let t = parseInt(ve.style.top), l = parseInt(ve.style.left);
        if (t > 400 && t < 600 && l > 460  && l < 600)
            SchimbaRandom();
    }
    function A(e) {
        key = e.key;
    
        if (key == "a")
            ve.style.left = parseInt(ve.style.left.slice(0, -2)) - 5 + "px";
        let t = parseInt(ve.style.top), l = parseInt(ve.style.left);
        if (t > 400 && t < 600 && l > 460  && l < 600)           
            SchimbaRandom();
    }
    function D(e) {
        key = e.key;
    
        if (key == "d")
            ve.style.left = parseInt(ve.style.left.slice(0, -2)) + 5 + "px";
        let t = parseInt(ve.style.top), l = parseInt(ve.style.left);
        if (t > 400 && t < 600 && l > 460  && l < 600)            
            SchimbaRandom();
    }
    
    document.addEventListener("keydown", W);
    document.addEventListener("keydown", A);
    document.addEventListener("keydown", S);
    document.addEventListener("keydown", D);
    
}

function SchimbaRandom(){
    let red = Math.random() * 255,
    green = Math.random() * 255,
    blue = Math.random() * 255;
    document.getElementsByTagName("body")[0].style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}

function Felicitari(){
    let f = document.createElement("div");
    f.textContent = "Felicitari! Ati donat o telemea si ati deblocat si un joc special\n Foloseste tastele WASD pentru a misca burduful in seif!!";
    document.getElementById("felicitari").append(f);
    let s = document.getElementById("sub");
    let a = document.getElementById("asteapta"), tx = "Asteapta 10 secunde pentru a face o donatie noua";
    a.innerHTML = tx;s.style.display = "none";
    setTimeout(function(){s.style.display = "inline-block";a.innerHTML = ""}, 10000);
    myInterval = setInterval(function(){f.textContent = ""}, 20000);
}
function ValidareFormular(){
    let xm = document.getElementById("em").value;
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(xm)){
        if (ValidareBani()){
            Felicitari();
            AfiseazaJoc();
            return (true)
        }else {
            alert("Selectati donatia!")
        }
    }else{
        alert("Adresa de email nu exista!")
    }
        return (false)
    
}

function ValidareBani(){
    console.log(document.getElementById("altiBani").value);
    if (document.getElementsByClassName("l3")[0].checked ||
    document.getElementsByClassName("l4")[0].checked ||
     document.getElementsByClassName("l5")[0].checked || 
     document.getElementsByClassName("l6")[0].checked || 
     document.getElementsByClassName("l7")[0].checked || 
     /\d+$/.test(document.getElementById("altiBani").value))
        return 1;
    return 0;
}
console.log(ValidareBani());
let culoare = 1;
function DarkMode(){
    culoare += 1;
    if (culoare % 2 == 0)
        document.getElementsByTagName("body")[0].style.backgroundColor = "gray"
    else 
        document.getElementsByTagName("body")[0].style.backgroundColor = "antiquewhite"

}