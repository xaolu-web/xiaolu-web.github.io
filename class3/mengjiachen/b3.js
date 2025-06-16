document.addEventListener('DOMContentLoaded', function() {
    // 购物车功能
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const overlay = document.querySelector('.overlay');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalPrice = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    // 购物车数据
    let cart = [];
    
    // 商品数据
    const products = [
        {
            id: 1,
            name: "时尚休闲衬衫",
            price: 129,
            image: "https://picsum.photos/300/300?random=1"
        },
        {
            id: 2,
            name: "经典牛仔裤",
            price: 199,
            image: "https://picsum.photos/300/300?random=2"
        },
        {
            id: 3,
            name: "运动休闲鞋",
            price: 299,
            image: "https://picsum.photos/300/300?random=3"
        },
        {
            id: 4,
            name: "时尚双肩包",
            price: 159,
            image: "https://picsum.photos/300/300?random=4"
        }
    ];
    
    // 打开购物车
    function openCart() {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    }
    
    // 关闭购物车
    function closeCartSidebar() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
    
    // 更新购物车显示
    function updateCartDisplay() {
        // 更新购物车数量
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        // 清空购物车内容
        cartItems.innerHTML = '';
        
        // 如果购物车为空
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart-message">购物车是空的</div>';
            return;
        }
        
        // 添加购物车项目
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">¥${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">移除</button>
                </div>
            `;
            cartItems.appendChild(cartItemElement);
        });
        
        // 添加事件监听器
        document.querySelectorAll('.decrease').forEach(btn => {
            btn.addEventListener('click', () => decreaseQuantity(parseInt(btn.dataset.id)));
        });
        
        document.querySelectorAll('.increase').forEach(btn => {
            btn.addEventListener('click', () => increaseQuantity(parseInt(btn.dataset.id)));
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => removeItem(parseInt(btn.dataset.id)));
        });
        
        // 更新总价
        updateTotalPrice();
    }
    
    // 更新总价
    function updateTotalPrice() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice.textContent = `¥${total}`;
    }
    
    // 添加商品到购物车
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        updateCartDisplay();
        
        // 显示添加成功的提示
        showNotification(`${product.name} 已添加到购物车`);
    }
    
    // 减少商品数量
    function decreaseQuantity(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex === -1) return;
        
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
        
        updateCartDisplay();
    }
    
    // 增加商品数量
    function increaseQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;
        
        item.quantity += 1;
        updateCartDisplay();
    }
    
    // 移除商品
    function removeItem(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
    }
    
    // 显示通知
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
    
    // 事件监听器
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    overlay.addEventListener('click', closeCartSidebar);
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.closest('.product-card').dataset.id);
            addToCart(productId);
        });
    });
    
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('购物车是空的');
            return;
        }
        
        showNotification('订单已提交，感谢您的购买！');
        cart = [];
        updateCartDisplay();
        closeCartSidebar();
    });
    
    // 添加通知样式
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1001;
            opacity: 0;
            transition: transform 0.3s, opacity 0.3s;
        }
        
        .notification.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    
    // 初始化购物车显示
    updateCartDisplay();
});
