 
document.addEventListener('DOMContentLoaded', function () {
    // 隆兴寺滚动图片相关逻辑
    const longxingsiScrollContainer = document.getElementById('longxingsi-scrollContainer');
    const longxingsiImageList = longxingsiScrollContainer.querySelector('.image-list');
    let longxingsiScrollInterval;
    const scrollSpeed = 2;

    const startLongxingsiScrolling = function () {
        longxingsiScrollInterval = setInterval(function () {
            const currentTop = parseInt(window.getComputedStyle(longxingsiImageList).top, 10);
            if (Math.abs(currentTop) >= longxingsiImageList.scrollHeight - longxingsiScrollContainer.clientHeight) {
                longxingsiImageList.style.top = `0px`;
            } else {
                longxingsiImageList.style.top = `${currentTop - scrollSpeed}px`;
            }
        }, 30);
    };

    const stopLongxingsiScrolling = function () {
        clearInterval(longxingsiScrollInterval);
    };
    longxingsiScrollContainer.addEventListener('mouseover', stopLongxingsiScrolling);
    longxingsiScrollContainer.addEventListener('mouseout', startLongxingsiScrolling);
    startLongxingsiScrolling();

    // 赵云庙滚动图片相关逻辑
    const zhaoyunmiaoScrollContainer = document.getElementById('zhaoyunmiao-scrollContainer');
    const zhaoyunmiaoImageList = zhaoyunmiaoScrollContainer.querySelector('.image-list');
    let zhaoyunmiaoScrollInterval;

    const startZhaoyunmiaoScrolling = function () {
        zhaoyunmiaoScrollInterval = setInterval(function () {
            const currentTop = parseInt(window.getComputedStyle(zhaoyunmiaoImageList).top, 10);
            if (Math.abs(currentTop) >= zhaoyunmiaoImageList.scrollHeight - zhaoyunmiaoScrollContainer.clientHeight) {
                zhaoyunmiaoImageList.style.top = `0px`;
            } else {
                zhaoyunmiaoImageList.style.top = `${currentTop - scrollSpeed}px`;
            }
        }, 30);
    };

    const stopZhaoyunmiaoScrolling = function () {
        clearInterval(zhaoyunmiaoScrollInterval);
    };
    zhaoyunmiaoScrollContainer.addEventListener('mouseover', stopZhaoyunmiaoScrolling);
    zhaoyunmiaoScrollContainer.addEventListener('mouseout', startZhaoyunmiaoScrolling);
    startZhaoyunmiaoScrolling();

    // 荣国府滚动图片相关逻辑
    const rongguofuScrollContainer = document.getElementById('rongguofu-scrollContainer');
    const rongguofuImageList = rongguofuScrollContainer.querySelector('.image-list');
    let rongguofuScrollInterval;

    const startRongguofuScrolling = function () {
        rongguofuScrollInterval = setInterval(function () {
            const currentTop = parseInt(window.getComputedStyle(rongguofuImageList).top, 10);
            if (Math.abs(currentTop) >= rongguofuImageList.scrollHeight - rongguofuScrollContainer.clientHeight) {
                rongguofuImageList.style.top = `0px`;
            } else {
                rongguofuImageList.style.top = `${currentTop - scrollSpeed}px`;
            }
        }, 30);
    };

    const stopRongguofuScrolling = function () {
        clearInterval(rongguofuScrollInterval);
    };
    rongguofuScrollContainer.addEventListener('mouseover', stopRongguofuScrolling);
    rongguofuScrollContainer.addEventListener('mouseout', startRongguofuScrolling);
    startRongguofuScrolling();
});
 