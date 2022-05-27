const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use("/static", express.static("./static/"));


const path = require("path")
const hostname = '127.0.0.1';
const port = 3000;

let products = ["mere", "pere", "piersici"];

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"views/Placinte.html"))
});

app.get("/about",(req,res) => {
    res.sendFile(path.join(__dirname,"views/Donatii.html"))
});

app.get("*", (req,res) => {
    res.sendFile(__dirname + "/views/404.html")
})
// app.get("/products",(req,res) => {
//     res.send(products);
// });

// app.get("/product/:productId",(req,res) => {
//     const productId = req.params.productId
//     res.send(products[productId]);
// });

// app.get("/product/:adaugaProdus",(req,res) => {
//     const adaugaProdus = req.params.adaugaProdus
//     res.send(adaugaProdus)
// })


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

