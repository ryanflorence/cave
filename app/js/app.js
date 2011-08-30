require(['canvas', 'ship'], function(canvas, ship) {
  var attach, down, start, timer;
  timer = null;
  down = true;
  canvas.init();
  canvas.step();
  ship.reverse();
  attach = function() {
    window.addEventListener('keydown', function(event) {
      if (timer === null) {
        return start();
      }
      if (event.keyCode === 40) {
        clearInterval(timer);
      }
      if (down) {
        return;
      }
      down = true;
      return ship.reverse();
    });
    return window.addEventListener('keyup', function() {
      down = false;
      return ship.reverse();
    });
  };
  start = function() {
    console.log('start');
    return timer = setInterval(function() {
      return canvas.step();
    }, 1000 / 77);
  };
  return require.ready(function() {
    return setTimeout(attach, 1000);
  });
});