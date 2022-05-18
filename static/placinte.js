let produse;

window.onload = function () {
    

    produse = {
        "1" : [22, 15], // pretul si cantitatea din stoc
        "2" : [15, 100],
        "3" : [25, 10],
        "4" : [50, 7],
        "nume" : {
            "1" : "placinta cu branza si verdeata",
            "2" : "placinta fornetti cu telemea si mac",
            "3" : "placinta cu branza dulce si stafide",
            "4" : "placinta cu ciuperci, carne si ceapa"
        }
    }
    for (let i = 1; i <= 4; i+=1){
    document.getElementById(i+"1").addEventListener("click", function () {adaugaInCos(i)});
    document.getElementById(i+"2").addEventListener("click",function () {stergeDinCos(i)});
    document.getElementById(i+"3").addEventListener("click",function () {reseteazaProdusele(i)});
    }
}

function afiseazaCos(cost) {
    let nav = document.getElementById("navbar");
    const cos = document.createElement("li");
    cos.className = "pag2";
    cos.id = "cos";
    cos.style.textAlign = "center";
    cos.innerText = "Cost: " + cost + " lei";
    cos.style.width = "80px";
    nav.append(cos);
}
function refreshCos(cost) {
    const cos = document.getElementById("cos");
    cos.innerText = "Cost: " + cost + " lei";
}

function deleteCos() {
    const cos = document.getElementById("cos");
    cos.remove;
}

function getCos(){
    return JSON.parse(localStorage.getItem("cos") || {});
}
function setCos(cos){
    localStorage.setItem("cos", JSON.stringify(cos));
}

setCos({"1": 5, "2": 3});

function adaugaInCos(id){
    let cos = getCos();
    id = id.toString();
    console.log(produse)
    if (produse[id])
        if (produse[id][1])
        {
            
        }
}

function stergeDinCos(id){

}

function reseteazaProdusele(id){

}