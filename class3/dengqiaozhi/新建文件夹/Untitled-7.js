
function checkLogin(username, password) {
  const validUser = "admin"; 
  const validPwd = "a123456"; 
  return username === validUser && password === validPwd;
}

const loginForm = document.querySelector('#loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if (checkLogin(username, password)) {
      localStorage.setItem('isLoggedIn', 'true'); 
      window.location.href = 'resume.html'; 
    } else {
      alert('账号或密码错误！再仔细看看题目要求的账号密码呀~');
    }
  });
}


window.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn && window.location.pathname !== '/index.html') { 
    alert('请先登录才能访问哦~');
    window.location.href = 'index.html';
  }
});

function addToCart(productName, price) {
  alert(`${productName} 已加入购物车，价格 ¥${price} ~`);
}