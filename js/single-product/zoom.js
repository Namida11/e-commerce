function zoomProduct(){
const singleImgWrapper=document.querySelector(".single-image-wrapper")
const singleImg=document.querySelector("#single-img")


singleImgWrapper.addEventListener("mousemove",(e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    singleImg.style.transformOrigin = `${x}px ${y}px`;
    singleImg.style.transform="scale(3)"
    
})
singleImgWrapper.addEventListener("mouseleave",()=>{
   singleImg.style.transformOrigin=`center`
   singleImg.style.transform="scale(1)"
    
})

}

export default zoomProduct()