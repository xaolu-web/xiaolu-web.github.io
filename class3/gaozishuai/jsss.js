document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // 重置错误信息
    errorMessage.textContent = '';
    
    // 验证账号密码
    if (username === 'admin' && password === 'a123456') {
        // 登录成功，跳转到欢迎页面
        window.location.href = 'welcome.html';
    } else {
        // 登录失败，显示错误信息
        errorMessage.textContent = '用户名或密码错误';
    }
});