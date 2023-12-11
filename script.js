document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('mobile-menu');
    var sideMenu = document.querySelector('.side-menu');
    var closeMenuToggle = document.getElementById('close-menu')

    function closeSideMenu() {
        sideMenu.style.left = '-350px';
    }
  
    menuToggle.addEventListener('click', function () {
      // Toggle the side menu by adjusting its left position
      sideMenu.style.left = (sideMenu.style.left === '0px') ? '-350px' : '0px';
    });

    closeMenuToggle.addEventListener('click', function () {
        // Toggle the side menu by adjusting its left position
        closeSideMenu()
    });

    sideMenu.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
          closeSideMenu();
        }
    });

    
  });
  