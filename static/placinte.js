
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
    localStorage.clear;
    localStorage.setItem("cost", 0);
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

afiseazaCos(0);
setCos({});

function adaugaInCos(id){
    let cos = getCos(), cost = parseInt(localStorage.getItem("cost"));
    id = id.toString();
    if (produse[id])
        if (produse[id][1])
        {
            if (cos[id]){
                cos[id] += 1;
                setCos(cos);
            }
            else {
                cos[id] = 1;
                setCos(cos);
            }
            cost += produse[id][0];
            cost.stringify;
            localStorage.setItem("cost", cost);
            refreshCos(cost);
            // for (let i = 0; i <= 4; i += 1){
            //     let cant = cos[i];
            //     while (cant){
            //         cost += produse[i][0];
            //         cant -= 1;
            //     }
            // }
        }
}

function stergeDinCos(id){
    let cos = getCos(), cost = parseInt(localStorage.getItem("cost"));
    id = id.toString();
    if (cos[id] > 0){
        cos[id] -= 1;
        produse[id][1] += 1;
        setCos(cos);
        cost -= produse[id][0];
        cost.stringify;
        localStorage.setItem("cost", cost);
        refreshCos(cost);
    }
}

function reseteazaProdusele(id){
    let cos = getCos(), cost = parseInt(localStorage.getItem("cost"));
    id = id.toString();
    if (!cos[id])
        return;
    cost -= cos[id] * produse[id][0];
    produse[id][1] += cos[id];
    cos[id] = 0;
    setCos(cos);
    cost.stringify;
    localStorage.setItem("cost", cost);
    refreshCos(cost);
}