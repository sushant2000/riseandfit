showSlides();
var value = "0"

function showSlides() {
    let slider__inner = document.getElementById("headerslider__inner");
    if(value == "0"){
        value = "-100%";
    }

    else if(value == "-100%"){
        value = "-200%";
    }

    else if(value == "-200%"){
        value = "0";
    }
    slider__inner.style.left = value;
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}