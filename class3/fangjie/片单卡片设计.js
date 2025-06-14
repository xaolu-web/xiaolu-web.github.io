//swiper js库，轮播图
const subSwiper = new Swiper(".sub-swiper", {
    allowTouchMove: false, // 禁止触摸滑动
    loop: true,
    effect: "fade",//切换动画
    fadeEffect: {
        crossFade: true // 开启交叉淡入淡出
    },
});

const mainSwiper = new Swiper(".main-swiper", {
    effect: "cards",//卡片效果
    grabCursor: true,//鼠标滑动显示小手
    initialSlide: 0,//初始化时显示第几张图片，0是第一张
    loop: true,//无限循环
    mousewheel: { //鼠标滑动切换
        invert: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    //自动轮播
    autoplay: {
        delay: 5000,       // 间隔3秒
        disableOnInteraction: false, //操作后停止自动播放
    },

    thumbs: {
        swiper: subSwiper,
    },
});


//通过类名获取所有元素
const coloritems = document.querySelectorAll('.tag');
//定义颜色组
const colors = ["#f35a5a","#f89e37","#3a77fa","#27c263"];
//按组循环赋予颜色
coloritems.forEach((element,index)=>{
    const colorindex = index % colors.length;
    element.style.backgroundColor = colors[colorindex];
});
