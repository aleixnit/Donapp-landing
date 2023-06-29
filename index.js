/* ------------------------------- NAVBAR MENU ------------------------------ */
  (function ($) {
    "use strict";
    //Navigation
    var app = (function () {
      var body = undefined;
      var menu = undefined;
      var menuItems = undefined;
      var init = function init() {
        body = document.querySelector("body");
        menu = document.querySelector(".menu-icon");
        menuItems = document.querySelectorAll(".nav__list-item");
        applyListeners();
      };
      var applyListeners = function applyListeners() {
        menu.addEventListener("click", function () {
          return toggleClass(body, "nav-active");
        });
        // Agregar evento de clic a cada elemento de enlace dentro del menú
      menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
          body.classList.remove("nav-active");
        });
      });
      };
      var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass))
          element.classList.remove(stringClass);
        else element.classList.add(stringClass);
      };
      init();
    })();
  })(jQuery);
  
/* ---------------------------------- WAVES FOOTER --------------------------------- */
  waves().mount()