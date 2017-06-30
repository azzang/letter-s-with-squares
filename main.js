(function() {
  var animationHappened = false;
  var stack = [];

  function unwindStack() {
    animationHappened = true;

    for (var i = 1; i <= 10; i++) {

      setTimeout(function() {
        $(stack.pop()).removeClass('blue');
      }, i * 300);

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

      if (stack.length === 9) { // if all large squares are blue
        unwindStack();
      }
    }
  });
})();
