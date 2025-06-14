function togglePassword() {
  const pwdInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');
  
  // 切换密码输入类型及图标状态
  pwdInput.type = pwdInput.type === 'password' ? 'text' : 'password';
  eyeIcon.src = pwdInput.type === 'text' ? 'images/eye-open.png' : 'images/eye-closed.png';
  eyeIcon.alt = pwdInput.type === 'text' ? '隐藏密码' : '显示密码';
}

// -------------------------
// 登录校验 + 状态管理
// -------------------------
function checkLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  
  // 输入框非空校验
  if (!username) {
    alert('账号不能为空，请输入账号！');
    document.getElementById('username').focus();
    return;
  }
  if (!password) {
    alert('密码不能为空，请输入密码！');
    document.getElementById('password').focus();
    return;
  }

  // 密码强度简易校验（要求至少6位，包含数字和字母）
  if (!/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/.test(password)) {
    alert('密码需至少6位，包含数字和字母！');
    document.getElementById('password').focus();
    return;
  }

  // 校验账号密码（固定值，实际需替换为后端接口）
  if (username === 'admin' && password === 'a123456') {
    // 存储登录状态及登录时间（用于时效控制）
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loginTime', Date.now());
    alert('登录成功！欢迎进入系统～');
    
    // 跳转至首页
    window.location.href = 'resume.html';
  } else {
    alert('账号或密码错误，请检查后重试！');
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
  }
}

// -------------------------
// 全局导航栏控制 + 登录状态校验
// -------------------------
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const loginTime = localStorage.getItem('loginTime');
  const globalNavbar = document.getElementById('globalNavbar');

  // 校验登录状态 + 时效（如30分钟过期，可选）
  if (isLoggedIn) {
    const now = Date.now();
    // 登录超过30分钟自动退出（1800000ms=30分钟）
    if (loginTime && now - loginTime > 1800000) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginTime');
      alert('登录已过期，请重新登录！');
      window.location.href = 'index.html';
      return;
    }
    // 显示导航栏
    if (globalNavbar) globalNavbar.style.display = 'block';
  } else {
    if (globalNavbar) globalNavbar.style.display = 'none';
  }
}

// -------------------------
// 退出登录功能
// -------------------------
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('loginTime');
  alert('已退出登录！');
  window.location.href = 'index.html';
}

// -------------------------
// 工具函数：防抖（避免按钮快速点击）
// -------------------------
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// 给导航栏按钮添加防抖（避免快速点击多次跳转）
document.addEventListener('DOMContentLoaded', () => {
  checkLoginStatus(); // 校验登录状态
  
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', debounce(() => {
      // 跳转前校验登录状态（防止本地存储被篡改，可选）
      if (!localStorage.getItem('isLoggedIn')) {
        alert('请先登录！');
        return;
      }
    }, 300));
  });
});