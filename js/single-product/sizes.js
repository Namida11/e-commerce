export function sizes(){
    const valuesList=document.querySelector(".values-list")
    const sizeValues=document.querySelectorAll(".values-list span")
    sizeValues.forEach((size)=>{
       
        size.addEventListener("click",()=>{
            sizeValues.forEach((size)=>{
                size.classList.remove("active")
            })
            size.classList.add("active")
        })
    })
}
sizes()