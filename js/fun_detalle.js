function galeria(){    
let images = document.querySelectorAll(".gallery  img");
let overlay = document.querySelector(".overlay");
let overlayImg = document.querySelector(".overlay-img");
let closeBtn = document.querySelector(".close-btn");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        overlay.style.display = "block";
        currentIndex = index;
        showImage();
    });
});

function showImage() {
    overlayImg.src = images[currentIndex].src;
}

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage();
    }
});
}

galeria();