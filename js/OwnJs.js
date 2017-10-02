var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = $(".carousel-item");
    var carouselExampleIndicators = $("#carouselExampleIndicators");
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    $.each(slides,function (index, value ) {
        value.css("display","none");
    });
    // for (i = 0; i < carouselExampleIndicators.length; i++) {
    //     carouselExampleIndicators[i].className = carouselExampleIndicators[i].className.replace("active", "");
    // }
    $.each(carouselExampleIndicators, function (index,value) {
       value.removeClass("active");
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].css("display","block");
    carouselExampleIndicators[slideIndex-1].addClass("active");
    setTimeout(showSlides, 200); // Change image every 2 seconds
}