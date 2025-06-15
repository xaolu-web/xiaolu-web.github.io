let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.opacity = i === index ? 1 : 0;
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// 初始化显示第一张图片
showSlide(currentIndex);