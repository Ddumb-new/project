document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 0;
    const visibleImagesCount = 3; // Number of images visible at a time
    const imageWidth = carouselSlide.offsetWidth / visibleImagesCount; // Width of one image
    const slideWidth = imageWidth * visibleImagesCount; // Width of the visible slide area

    // Set the width of each image
    images.forEach(img => {
        img.style.width = `${imageWidth}px`;
    });

    function moveToSlide() {
        carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - visibleImagesCount) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter += visibleImagesCount;
        moveToSlide();
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter -= visibleImagesCount;
        moveToSlide();
    });
});

