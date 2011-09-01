require(['canvas', 'ship', 'cave', 'collision'], function(canvas, ship, cave, collision) {
  var attach, detach, down, keydown, keyup, start, stop, timer;
  timer = null;
  down = true;
  canvas.init();
  canvas.step();
  ship.reverse();
  collision.callback = function() {
    stop();
    cave.reset();
    ship.reset();
    detach();
    return setTimeout(attach, 1000);
  };
  keydown = function(event) {
    if (timer === null) {
      start();
    }
    if (event.keyCode === 32) {
      return stop();
    }
    if (down || event.keyCode !== 38) {
      return;
    }
    down = true;
    return ship.reverse();
  };
  keyup = function(event) {
    if (event.keyCode !== (38 || 32)) {
      return;
    }
    down = false;
    return ship.reverse();
  };
  attach = function() {
    window.addEventListener('keydown', keydown);
    return window.addEventListener('keyup', keyup);
  };
  detach = function() {
    window.removeEventListener('keydown', keydown);
    return window.removeEventListener('keyup', keyup);
  };
  start = function() {
    return timer = setInterval(function() {
      canvas.step();
      return collision.check();
    }, 1000 / 77);
  };
  stop = function() {
    clearInterval(timer);
    down = false;
    return timer = null;
  };
  return require.ready(function() {
    return setTimeout(attach, 500);
  });
});