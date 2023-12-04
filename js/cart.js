let cart = localStorage.getItem("cart") ? 
JSON.parse(localStorage.getItem("cart")) : []
 

 function displayCartProduct(){
    let cartContainer=document.querySelector(".cart-wrapper")
    let result="";
   
       cart.forEach((item)=>{
          console.log(item.img.singleImage);
            result+=` <tr class="cart-item">
                        <td></td>
                        <td class="cart-image">
                        <img src="${item.img.singleImage}" alt="unloading"/>
                        <i class="bi bi-x delete-cart " data-id=${item.id}></i>
                        </td>
                        <td>${item.name}</td>
                        <td>$${item.price.newPrice}</td>
                        <td class="product-quantity">${item.quantity}</td>
                        <td class="product-subtotal">$${item.quantity * item.price.newPrice}</td>
                  </tr>`
    })
    cartContainer.innerHTML=result
    removeProductCart()
   
 }

  function removeProductCart(){
    const btnDeleteCart=document.querySelectorAll  (".delete-cart");
    let cartCount=document.querySelector(".header-cart-count")
    btnDeleteCart.forEach((button)=>{
       button.addEventListener("click",(e)=>{
        const deleteId = Number(e.target.dataset.id)
        cart = cart.filter((item)=> item.id !== deleteId ) 
        displayCartProduct()
        localStorage.setItem("cart",JSON.stringify(cart))
        cartCount.innerHTML=cart.length
        sumTotal()
       })
    })

   
 }

 function sumTotal(){
    
    let subTotal=0;
    let subtotal=document.getElementById("subtotal")
    const cargoCheck=document.querySelector("#cargo input ")
    const total=document.getElementById("total")
    const cargoValue=15
     cart.length>0 && cart.map((item)=>subTotal+=item.price.newPrice * item.quantity )

        subtotal.innerHTML=`$${ subTotal}`
        total.innerHTML=`$${ subTotal}`
        
        cargoCheck.addEventListener("change",(e)=>{
            if(e.target.checked){
            total.innerHTML=`$${ subTotal + cargoValue}` 
            }
            else{
                total.innerHTML=`$${ subTotal}` 
            }
        })
         
 }
 displayCartProduct()
 removeProductCart()
 sumTotal()
 