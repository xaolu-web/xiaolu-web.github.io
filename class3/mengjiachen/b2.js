document.addEventListener('DOMContentLoaded', function() {
    // 页面加载完成后，让技能条动画显示
    setTimeout(function() {
        animateSkills();
    }, 500);
    
    // 滚动监听，使元素出现时有动画效果
    window.addEventListener('scroll', function() {
        revealOnScroll();
    });
    
    // 初始检查一次元素可见性
    revealOnScroll();
});

// 技能条动画
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const percent = item.getAttribute('data-percent');
        const progressBar = item.querySelector('.skill-progress');
        
        // 重置进度条宽度后再动画展示
        progressBar.style.width = '0';
        
        setTimeout(() => {
            progressBar.style.width = percent + '%';
        }, 100);
    });
}

// 元素出现时的动画效果
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// 为所有部分添加初始样式
(function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
})();
