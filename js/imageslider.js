var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}


function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("imageSlider");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


const imageSlider = document.getElementById("imageSliderContainer");

const arrowButtons = [
    document.getElementById("arrowButtonOne"),
    document.getElementById("arrowButtonTwo")
];

const makeVisible = (htmlElement) => {
    for (let i = 0; i < 2; i++) {
        htmlElement[i].classList.add("visible");
    }
}

const makeInvisible = (htmlElement) => {
    for (let i = 0; i < 2; i++) {
        htmlElement[i].classList.remove("visible");
    }
}

imageSlider.onmouseover = function () { makeVisible(arrowButtons) }
imageSlider.onmouseout = function () { makeInvisible(arrowButtons) }