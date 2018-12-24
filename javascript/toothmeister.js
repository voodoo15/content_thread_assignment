$(document).ready(function() {
  $('#nav-toggle').on('click', function(e) {
    e.preventDefault();

    $(this).add(".nav-mobile-quick-links").toggleClass('is-open');
  })
});
