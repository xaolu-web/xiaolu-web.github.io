const addToCartButtons = document.querySelectorAll('.add - to - cart');
const cartList = document.querySelector('.cart - list');
const totalPriceSpan = document.getElementById('total - price');

let cart = [];
let totalPrice = 0;

// 加入购物车函数
function addToCart(product) {
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.dataset.price);
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    updateCart();
}

// 更新购物车显示
function updateCart() {
    cartList.innerHTML = '';
    totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - 数量:${item.quantity} - 单价:${item.price} 元`;
        const removeButton = document.createElement('button');
        removeButton.textContent = '移除';
        removeButton.addEventListener('click', () => removeFromCart(item));
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });
    totalPriceSpan.textContent = totalPrice;
}

// 从购物车移除商品函数
function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    }
}

// 为加入购物车按钮添加点击事件
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        addToCart(product);
    });
});