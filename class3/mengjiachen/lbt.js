document.addEventListener('DOMContentLoaded', function() {
    // 导航栏响应式处理
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        
        // 汉堡按钮动画
        burger.classList.toggle('toggle');
    });
    
    // 轮播图功能
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let autoSlideInterval;
    
    // 初始化轮播图
    function initCarousel() {
        showSlide(currentIndex);
        startAutoSlide();
    }
    
    // 显示指定索引的幻灯片
    function showSlide(index) {
        // 处理索引边界
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        
        // 更新幻灯片显示状态
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i].classList.remove('active');
        });
        
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    // 下一张幻灯片
    function nextSlide() {
        showSlide(currentIndex + 1);
    }
    
    // 上一张幻灯片
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
    
    // 开始自动播放
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 2000); // 每2秒切换一次
    }
    
    // 停止自动播放
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }
    
    // 事件监听
    nextBtn.addEventListener('click', function() {
        nextSlide();
        startAutoSlide(); // 用户操作后重新开始计时
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        startAutoSlide(); // 用户操作后重新开始计时
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            startAutoSlide(); // 用户操作后重新开始计时
        });
    });
    
    // 鼠标悬停时暂停自动播放
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
    
    // 初始化轮播图
    initCarousel();
});
