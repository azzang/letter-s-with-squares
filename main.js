(function() {
  var animationHappened = false;
  var stack = [];

  function unwindStack() {
    animationHappened = true;

    for (var i = 1; i <= 10; i++) {

      (function(delayMultiple) {
        setTimeout(function() {
          $(stack.pop()).removeClass('blue');
        }, delayMultiple * 300);
      })(i);

    }
  }

  $('.large-square').on('click', function() {
    if (!animationHappened) {
      $(this).toggleClass('blue');

      if ($(this).hasClass('blue')) {
        stack.push(this);
      } else {
        stack.splice(stack.indexOf(this), 1);
      }

      if ($('.blue').length === 9) { // if all large squares are blue
        unwindStack();
      }
    }
  });
})();
