

//!Slider start
let slideIndex = 1;

showSlides(slideIndex)

setInterval(() => {
    showSlides(slideIndex += 1)
}, 4000)

function controlSlide(n) {
    showSlides(slideIndex += n);

}
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(a) {
    let slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");

    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex = slides.length
    }


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex"

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }

    dots[slideIndex - 1].classList.add("active")

}


//!Slider end

