document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.nav-dot');
    
    let currentIndex = 0;
    let slideInterval;
    const slideDuration = 3000; // 3秒自动切换
    
    // 初始化轮播
    function initSlider() {
      updateSlider();
      startAutoSlide();
    }
    
    // 更新轮播图位置
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // 更新导航点状态
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // 切换到下一张
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }
    
    // 切换到上一张
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }
    
    // 开始自动轮播
    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // 停止自动轮播
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }
    
    // 事件监听
    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
    
    // 点击导航点跳转
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        stopAutoSlide();
        startAutoSlide();
      });
    });
    
    // 鼠标悬停时暂停轮播
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // 初始化
    initSlider();
  });