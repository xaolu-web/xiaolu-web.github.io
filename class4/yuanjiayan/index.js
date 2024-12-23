 
    document.addEventListener('DOMContentLoaded', (event) => {
      const scrollContainer = document.getElementById('scrollContainer');
      const imageList = scrollContainer.querySelector('.image-list');
      let scrollInterval;
      const scrollSpeed = 2;

      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          const currentTop = parseInt(window.getComputedStyle(imageList).top, 10);
          if (Math.abs(currentTop) >= imageList.scrollHeight - scrollContainer.clientHeight) {
            imageList.style.top = `0px`;
          } else {
            imageList.style.top = `${currentTop - scrollSpeed}px`;
          }
        }, 30);
      };

      const stopScrolling = () => {
        clearInterval(scrollInterval);
      };

      scrollContainer.addEventListener('mouseover', stopScrolling);
      scrollContainer.addEventListener('mouseout', startScrolling);
      startScrolling();
    });
 