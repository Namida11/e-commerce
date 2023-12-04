function productRoute(){
 const searchItem = document.querySelectorAll('.search-results .results .result-item')
searchItem.forEach((item)=>{
    item.addEventListener(('click'), (e)=>{
        e.preventDefault()
        const id = item.dataset.id;
      if(id){
         localStorage.setItem("productId", JSON.stringify(id));
        window.location.href = "single-product.html";
      }
    })
})

}

function searchFunct(product){
    const searchResultDOM = document.querySelector('.search-results .results')
    let result=''
    product.forEach((item)=>{
         result += `
     <a href="" class="result-item" data-id=${item.id}>
              <img
                src="${item.img.singleImage}"
                class="search-thumb"
                alt=""
              />
              <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
              </div>
     </a>
    `
    })
   
    searchResultDOM.innerHTML=result
    console.log("hello")
    productRoute()

    const searchInputDOM = document.querySelector(".search-form input")
    const searchBTN = document.querySelector(".search-form input")
    let value = ''
    let filtered = []
    searchInputDOM.addEventListener("input",(e)=>{
        value= e.target.value;
        value = value.trim().toLowerCase()
      filtered=  product.filter((item)=>{
           return item.name.trim().toLowerCase().includes(value)
        })
        let result=""
        if(filtered.length > 1){
            searchResultDOM.style.gridTemplateColumns = "1fr 1fr";
               filtered.forEach((item)=>{
                    result += `
                            <a href="" class="result-item" data-id=${item.id}>
                                    <img
                                        src="${item.img.singleImage}"
                                        class="search-thumb"
                                        alt=""
                                    />
                                    <div class="search-info">
                                        <h4>${item.name}</h4>
                                        <span class="search-sku">SKU: PD0016</span>
                                        <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                                    </div>
                            </a>
                            `
            })
                searchResultDOM.innerHTML=result
        }
        else if(filtered.length<2){
            searchResultDOM.style.gridTemplateColumns = "1fr";
            if(filtered.length ==0){
                searchResultDOM.innerHTML= `
                 <a href="" class="result-item" style="justify-content: center">
                        😔Aradığınız Ürün Bulunamadı😔             
                </a>
                 `
            }
            else{
                filtered.forEach((item)=>{
                    result += `
                            <a href="" class="result-item" data-id=${item.id}>
                                    <img
                                        src="${item.img.singleImage}"
                                        class="search-thumb"
                                        alt=""
                                    />
                                    <div class="search-info">
                                        <h4>${item.name}</h4>
                                        <span class="search-sku">SKU: PD0016</span>
                                        <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                                    </div>
                            </a>
                            `
            })

            }
        }
         searchResultDOM.innerHTML=result
        productRoute()
    })
    
}

//  function searchProduct(data){
//     const searchInputDOM = document.querySelector(".search-form input")
//       const searchBTN = document.querySelector(".search-form input")
//     let searchInputValue= ''
//    searchInputDOM.addEventListener("input",(e)=>{
//     searchInputValue = e.target.value
//     let sonRes= data.filter((item)=>{
//        item.name.split("").forEach((elem)=>{
//         console.log(elem == searchInputValue)
//         return elem == searchInputValue
//        })
       
//     })
//     console.log(sonRes)
       

//    })
   
// }

export default searchFunct
