const images = document.querySelectorAll(".gallery img");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
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