$(document).ready(function() {

  //ON NAV TOGGLE CLICK, DISPLAY HIDDEN NAV MENU (ON MOBILE)
  $('#nav-toggle').on('click', function(e) {
    e.preventDefault();

    $(this).add(".nav-mobile-quick-links").toggleClass('is-open');
  });

  //ON PROFILE CLICK, DISPLAY HIDDEN PROFILE MENU
  $('.nav-profile-name').on('click', function(e) {
    e.preventDefault();

    $('.nav-profile-menu').toggleClass('is-open');
    $('.nav-profile-name i').toggleClass('fa-caret-up').toggleClass('fa-caret-down');
  });

});
