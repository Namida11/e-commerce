function sidebarFunc (){
    //!home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#sidebar-close");


const open_mobile_menu = () => {
    sidebar.style.top = "0"
    sidebar.style.zIndex = "1"
}
const close_mobile_menu = () => {
    sidebar.style.top = "-100%"
}
btnOpenSidebar.addEventListener("click", open_mobile_menu)
btnCloseSidebar.addEventListener("click", close_mobile_menu)


//clcik outside start

document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(sidebar) && !e.composedPath().includes(btnOpenSidebar)) {
        close_mobile_menu()
    }

})

//clcik outside end
//!home sidebar end
}

function modalSearcFunc (){
    //!Modal Search start
const openSearchBtn = document.querySelector("#modal-search-btn");
const modalSearch = document.querySelector(".modal-search");
const closeSearchBtn = document.querySelector(".modal-wrapper .close");
const modalWrapper = document.querySelector(".modal-wrapper");

const openModalSearch = () => {
    modalSearch.style.visibility = "visible"
    modalSearch.style.opacity = "1"

}
const closeModalSearch = () => {
    modalSearch.style.visibility = "hidden"
    modalSearch.style.opacity = "0"
}
openSearchBtn.addEventListener("click", openModalSearch)
closeSearchBtn.addEventListener("click", closeModalSearch)

/*click outside start */
document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(modalWrapper) && !e.composedPath().includes(openSearchBtn)) {
        closeModalSearch()
    }
})
/*click outside end */
//!Modal Search end
}

 function headerFunc (){
    sidebarFunc()
    modalSearcFunc()
}
export default headerFunc();