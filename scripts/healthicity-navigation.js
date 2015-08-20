$('.content > header, nav.secondary').affix({
      offset: {
        top: 200
      }
    });
    var $nav = $('nav.primary');

    

    var toggleSecondaryNav = function(){
      var $secondaryNav = $('nav.secondary');
      var $icon = $('.toggle-secondary-menu button i');
      var downIcon = "icon-down";
      var menuIcon = "icon-menu-secondary";
      var upIcon = "icon-up"
      $icon.removeClass();
      if ($secondaryNav.hasClass('closed')) {
        $icon.addClass(upIcon);
      } else {
        $icon.addClass(downIcon);
      }
      $secondaryNav.toggleClass('closed');
    };

    var togglePrimaryNav = function() {
      $('body').toggleClass('nav-open');
      var $nav = $('nav.primary');
      $nav.toggleClass('closed'); 
    }

    $('.toggle-secondary-menu').click(function(event) {
      event.preventDefault();
      toggleSecondaryNav();
    });

    $('.menu-btn, .close-btn').click(function(event) {
      event.preventDefault();
      togglePrimaryNav(); 
    });

    $('nav.primary').hover(function() {
      if (window.innerWidth > 600) {
        togglePrimaryNav();
      }
    });

    $(document).ready(function() {
      if (window.innerWidth > 1280) {
        toggleSecondaryNav();
      } 
    });

    $('nav.secondary a').click(function(event) {
      console.log('clicked');
      event.preventDefault();
      toggleSecondaryNav();

    });