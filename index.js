function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  
  }
  
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          break;
  
          case 39: // right
          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#carousel div').click(function() {
    moveToSelected($(this));
  });
  
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });
  
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
  
/* ---------------------------------- WAVES --------------------------------- */
  waves().mount()