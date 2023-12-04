 function tabsFunc(){
    const btnTab=document.querySelectorAll(".tab-button")
    const tabPanels=document.querySelectorAll(".tab-panel")
    const tabWrapper= document.querySelector(".tab-list")
    tabWrapper.addEventListener("click",(e)=>{
        e.preventDefault()
        const id = e.target.dataset.id
        if(id){
            btnTab.forEach((button)=>button.classList.remove("active"))
            e.target.classList.add("active")
            tabPanels.forEach((panel)=>panel.classList.remove("active"))
            const element=document.getElementById(id)
            element.classList.add("active")
        }
    })
}
export default tabsFunc()
