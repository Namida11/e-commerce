import { thumbActiveFunc } from "./single-product/thumbsActive.js";
 thumbActiveFunc()
 import { singleProduct } from "./glide.js";
 import zoomProduct from './single-product/zoom.js';
import {colorFunc} from './single-product/colors.js';
import {sizes} from './single-product/sizes.js';
import tabsFunc from "./single-product/tabs.js";
import comments from './single-product/review.js';



const productId= localStorage.getItem("productId")
? JSON.parse(localStorage.getItem("productId")) :localStorage.setItem("prodyctId", JSON.stringify(1));

const products= localStorage.getItem("products") 
? JSON.parse(localStorage.getItem("products")) 
: []

const cart= localStorage.getItem("cart")
?JSON.parse(localStorage.getItem("cart"))
:[]

const findProduct= products.find((item)=>{ return item.id == Number(productId) })
console.log(findProduct.name);
    //singleImage start


    const productImage= document.querySelector(".single-image-wrapper img")
    productImage.src=findProduct.img.singleImage
    //singleImage end
    
    //product title start
    const product_Title= document.querySelector(".product-title")
    product_Title.innerHTML= findProduct.name
    //product title end

    //price start

    const newPrice= document.querySelector("#new-price")
    newPrice.innerHTML= `$ ${ findProduct.price.newPrice}`

    const oldPrice= document.querySelector("#old-price")
    oldPrice.innerHTML=`$ ${ findProduct.price.oldPrice}`
    //price end

    //gallery thumbs start

    const singleThumbs = document.querySelector(".gallery-thumbs")
    let result="";
    findProduct.img.thumbs.forEach((item)=>{
   
      
      result+=`<li class="glide__slide">
                          <img
                            src="${item}"
                            class="image-fluid"
                            alt=""
                          />
                        </li>`            
    })
    singleThumbs.innerHTML=result
    const allThumbs = document.querySelectorAll(".product-thumb .glide__slide img")
    allThumbs[0].classList.add("active")

    //gallery thumbs end

    //color start

    const colorWrapper = document.querySelector(".colors-wrapper")
    let resultColor=""
    findProduct.colors.forEach((color)=>{
      resultColor+=` <div class="color-wrapper">
                          <label for="" class="${color}-color">
                            <input type="radio" name="product-color" />
                          </label>
                        </div>`
    })
    colorWrapper.innerHTML=resultColor   
     
     singleProduct()
     thumbActiveFunc()
     colorFunc()
    //colors end

    //ad to cart start
    const adToCartBtn=document.querySelector(".cart-button button")
    const quantityDOM=document.querySelector(".cart-button input")
    let cartCount=document.querySelector(".header-cart-count")
    const findCart= cart.find((item)=>item.id=== Number(findProduct.id))
    if(findCart){
      adToCartBtn.setAttribute("disabled","disabled")
    } 
    else {
      adToCartBtn.addEventListener("click",()=>{
       cart.push({...findProduct, quantity: Number(quantityDOM.value)})
       localStorage.setItem("cart", JSON.stringify(cart))
       adToCartBtn.setAttribute("disabled","disabled")
       cartCount.innerHTML=cart.length
      })
    }






