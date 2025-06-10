// 实现轮播图的切换
var img=document.querySelector(".imgs");
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var slide=document.querySelector(".slide");
var rimg=document.querySelector(".r-img");
var text=document.getElementById("text");
// 为所有的li绑定事件
var lis=document.querySelectorAll(".banner-btn li");
// 用一个数组保存这些图片
var imgArr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
var count=0;
// 定义函数，用来切换图片的路径
function cutImg(){
    img.src='../js/images/'+imgArr[count];
    for(let i=0;i<lis.length;i++){
        lis[i].className='';
    }
    lis[count].className='active';
}
// 设置定时器每隔3秒切换图片
var timer=setInterval(function(){
    count++;
    if(count>imgArr.length-1){
        count=0;
    }
    cutImg();
},2000);
// 点击下一张
next.onclick=function(){
    count++;
    if(count>imgArr.length-1){
        count=0;
    }
    cutImg();
}
// 点击上一张
prev.onclick=function(){
    count--;
    if(count<0){
        count=imgArr.length-1;
    }
    cutImg();
}
// 鼠标悬浮(划入)时，定时器不切换
slide.onmouseover=function(){
    clearInterval(timer);
}
// 鼠标划出时，定时器继续跑
slide.onmouseout=function(){
    timer=setInterval(function(){
    count++;
    if(count>imgArr.length-1){
        count=0;
    }
    cutImg();
},2500);
}
// 为每个li绑定点击事件
//若不用这种的话，直接用i，可能点击事件触发时，i的值已经变成了循环结束后的值，导致count=i复制错误
for(var i=0;i<lis.length;i++){
    (function(index){
        lis[index].onclick=function(){
        count=index;
        cutImg(); 
    }
    })(i);   
}

// 分时显示

//2.得到当前的小时数
        var date=new Date();
        var hour=date.getHours();                       //[0~23]
        //3.判断小时数改变图片和文字信息
        if(hour<12){
            rimg.src="../js/images/z.gif";
            text.innerHTML="上午好!欢迎访问购物网站";
        }else if(hour<18){
            rimg.src="../js/images/x.gif";
            text.innerHTML="下午好!欢迎访问购物网站";
        }else{
            rimg.src="../js/images/w.gif";
            text.innerHTML="晚上好!欢迎访问购物网站";
        }

