const container = document.getElementById("container");

function getProducts(){
    fetch("http://127.0.0.1:3000/products")
    .then((response) => response.json)
    .then(function(products){
        console.log(products)
    })
}