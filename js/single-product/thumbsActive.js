 export function thumbActiveFunc(){
  const thumbs =document.querySelectorAll(".product-thumb .glide__slide img")
  const singleImage =document.querySelector(".single-image-wrapper img")

    thumbs.forEach((thumb)=>{
        thumb.addEventListener("click", ()=>{
       
            thumbs.forEach((item)=>{
                item.classList.remove("active")
            })
            singleImage.src=thumb.src
            thumb.classList.add("active")
        })
    })
 }
 
