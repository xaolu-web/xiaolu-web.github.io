const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const itemCount = carouselItems.length;
let autoplayInterval;

// 初始化轮播图
function initCarousel() {
    showItem(currentIndex);
    startAutoplay();
    setupEventListeners();
}

// 显示指定索引的图片
function showItem(index) {
    // 隐藏所有图片
    carouselItems.forEach(item => {
        item.classList.remove('active');
    });
    // 激活当前图片
    carouselItems[index].classList.add('active');
    
    // 更新指示点状态
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    currentIndex = index;
}

// 下一张图片
function nextItem() {
    currentIndex = (currentIndex + 1) % itemCount;
    showItem(currentIndex);
}

// 上一张图片
function prevItem() {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    showItem(currentIndex);
}

// 开始自动播放
function startAutoplay() {
    autoplayInterval = setInterval(nextItem, 3000); // 3秒切换一次
}

// 停止自动播放
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// 设置事件监听
function setupEventListeners() {
    // 下一张按钮点击事件
    nextBtn.addEventListener('click', () => {
        nextItem();
        startAutoplay(); // 点击后重新开始自动播放
    });
    
    // 上一张按钮点击事件
    prevBtn.addEventListener('click', () => {
        prevItem();
        startAutoplay();
    });
    
    // 指示点点击事件
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.dataset.index);
            showItem(index);
            startAutoplay();
        });
    });
    
    // 鼠标悬停时暂停自动播放
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);
}

// 启动轮播图
initCarousel();