function checkLogin(){
	if(!localStorage.getItem('isLoggedIn')){
		window.location.href = 'index.html';
	}
}
function setupLogout(){
	document.querySelectorAll('.logout-btn').forEach(btn =>{
		btn.addEventListener('click',() =>{
			localStorage.removeItem('isLoggedIn');
			window.location.href = 'index.html';
		});
	});
}
function initNavbar(){
	const currentPage = location.pathname.split('/').pop();
	document.querySelectorAll('.nav-links a').forEach(link =>{
		if(link.getAttribute('href')===currentPage){
			link.classList.add('active');
		}
	});
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function saveCart(){
	localStorage.setItem('cart',JSON.stringify(cart));
}
function addToCart(product){
	const existing = cart.find(item => item.id === product.id);
	if(existing){
		existing.quantity++;
	}
	else{
		cart.push({...product,quantity:1 });
	}
	saveCart();
}
function updateCartUI(){
	const count = cart.reduce((sum,item) => sum + item.quantity,0);
	document.querySelectorAll('.cart-count').forEach(el =>{
		el.textContent = count;
	});
}
document.addEventListener('DOMContentLoaded',() =>{
	if(location.pathname !== 'index.html'){
		checkLogin();
	}
	setupLogout();
	initNavbar();
	updateCartUI();
})