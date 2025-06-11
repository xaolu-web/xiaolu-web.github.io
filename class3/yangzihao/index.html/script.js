// 1. 控制登录弹窗显示
function functionClick() {
  const wrapper = document.getElementById('wrapper');
  wrapper.style.display = 'block'; // 显示弹窗（需配合 CSS 初始隐藏）
}

// 2. 控制登录弹窗关闭
function functionClose() {
  const wrapper = document.getElementById('wrapper');
  wrapper.style.display = 'none'; // 隐藏弹窗
}

// 3. 登录校验逻辑（绑定到提交按钮）
const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
  // 获取输入框内容
  const username = document.getElementById('userName').value;
  const password = document.getElementById('passwordVal').value;

  // 简单校验（示例：账号密码均为 123456 时跳转百度）
  if (username === 'admin' && password === 'a123456') {
    window.location.href = '22.html'; // 跳转
  } else {
    alert('用户名或密码错误，请重试！'); // 提示错误
  }
});