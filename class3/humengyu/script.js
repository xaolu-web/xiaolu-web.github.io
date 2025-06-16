/*登录页面js*/ 
const validUser={
    username:"admin",
    password:"a123456"
};

function checkLogin(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const errorMsg=document.getElementById("errorMsg");

    if(username===validUser.username&&password===validUser.password){
        localStorage.setItem("isLoggedIn","true");
        window.location.href="resume.html";
    } else{
        errorMsg.textContent="账号或密码错误请重新输入"
    }
}

window.onload=function(){
    const isLoggedIn=localStorage.getItem("isLoggedIn");
    if(window.location.pathname!=="/index.html"&&!isLoggedIn){
        alert("请先登录!");
        window.location.href="index.html";
    }
}

/*加入购物车*/ 
let cart=JSON.parse(localStorage.getItem('cart'))||[];
function addToCart(name,price){
    cart.push({name,price});
    localStorage.setItem('cart',JSON.stringify(cart));
    alert('已加入购物车!');
}
