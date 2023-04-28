const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    centeredSlides: false,
    slidesPerView: 5,
    grabCursor: true,
    freeMode: false,
    loop: false,
    mousewheel: false,
    keyboard: {
        enabled: true
    },

    // Enabled autoplay mode


    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    //     dynamicBullets: false,
    //     clickable: true
    // },

    // If we need navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        loop: true
    },

    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25
        }
    }
});