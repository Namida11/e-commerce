import {product1} from "./glide.js";
import {product2} from "./glide.js";
let  products = localStorage.getItem("products") 
? JSON.parse(localStorage.getItem("products")) :[]

let cart = localStorage.getItem("cart") ? 
JSON.parse(localStorage.getItem("cart")) : []



function addToCart(){
  const buttons=[...document.getElementsByClassName("add-to-cart")] ;
  const cartCount=document.querySelector(".header-cart-count")

  buttons.forEach((button)=>{
    const inCart=cart.find((item)=> item.id === Number(button.dataset.id))
  
    if(inCart){
      button.setAttribute("disabled","disabled")
    }
    else{
      button.addEventListener("click",(e)=>{
        e.preventDefault()
        let id=Number(e.target.dataset.id)
        let findProduct=products.find((product)=>product.id===id);
        cart.push({...findProduct, quantity:1})
          
        localStorage.setItem("cart",JSON.stringify(cart))
        button.setAttribute("disabled","disabled")
        cartCount.innerHTML=cart.length //eden kimi olmasin isteyirikse o zaman burda da en axirda bu kodu yazmaliyiq eks teqdirde sehifeni yenileyende button disable olacaq.

      })
    }
  
  })
 
}


 function productFunc(){

  const products_list1=document.querySelector("#product-list1");
  const products_list2=document.querySelector("#product-list2");

  let result=''
  products.forEach((item)=>{
    result+=`<li class="product-item glide__slide">
                <a href="">
                  <div class="first-image">
                    <span class="sale">-${item.discount}%</span>
                    <a href=""
                      ><img src="${item.img.singleImage}" alt=""
                    /></a>
                  </div>
                  <div class="new-image">
                    <span class="sale">-${item.discount}%</span>
                    <div class="product-links">
                      <button class="add-to-cart" data-id="${item.id}">
                        <i class="bi bi-bag"></i>
                      </button>

                      <button>
                        <i class="bi bi-heart-fill"></i>
                      </button>

                      <a href="#" class="goProduct" data-id="${item.id}">
                        <i class="bi bi-eye"></i>
                      </a>

                      <a href="">
                        <i class="bi bi-share"></i>
                      </a>
                    </div>
                    <a href=""
                      ><img src="${item.img.thumbs[1]}" alt=""
                    /></a>
                  </div>
                  <div class="product-item-content">
                    <a href="" class="product-item-title"
                      >${item.name}</a
                    >
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <div class="prices">
                      <span class="current-price">$${item.price.newPrice.toFixed(2)}</span>
                      <span class="sales-price">$${item.price.oldPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </a>
              </li>`

            products_list2 ?  products_list1.innerHTML=result  : "" 
            products_list2 ?  products_list2.innerHTML=result  : ""
            addToCart()
            

  })
  product1()
  product2()
  productRoute()

}

function productRoute(){
  const product_link= document.querySelectorAll(".goProduct")
    product_link.forEach((button)=>{
      button.addEventListener("click",(e)=>{
        e.preventDefault()
        const id =e.target.dataset.id
       localStorage.setItem("productId",JSON.stringify(id))
       window.location.href="single-product.html"
      })
    })
}




export default productFunc;