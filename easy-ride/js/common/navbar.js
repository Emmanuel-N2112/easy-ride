// Generated by CoffeeScript 1.4.0

jQuery(function() {
  console.log('Script ran');
  $('.dropdown-toggle').dropdown();
  $('.dropdown input, .dropdown label').click(function(e) {
    return e.stopPropagation();
  });
});
