import Header from "./header.js";
import product from "./products.js";
import searchFunct from "./search.js";

//!Products localstore start

(async function () {
    const photos = await fetch("../js/data.json");
    const data = await photos.json()

    data ? localStorage.setItem("products", JSON.stringify(data)) : [] //stringe ceviriir

    product()
    searchFunct(data)
})()

//!Products localstore end

//!cart localstore start


const products =localStorage.getItem("products")

  const cartCount=document.querySelector(".header-cart-count")

  cartCount.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0"
//!Products localstore end












