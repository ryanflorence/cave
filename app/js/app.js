require(['score', 'canvas', 'ship', 'cave', 'collision'], function(score, canvas, ship, cave, collision) {
  var attach, detach, down, keydown, keyup, reset, start, stop, timer;
  timer = null;
  down = true;
  canvas.init();
  canvas.step();
  score.init();
  ship.reverse();
  reset = function() {
    stop();
    detach();
    cave.reset();
    ship.reset();
    return setTimeout(function() {
      score.reset();
      canvas.step();
      return attach();
    }, 1000);
  };
  collision.callback = reset;
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
      collision.check();
      return score.up();
    }, 1000 / 77);
  };
  stop = function() {
    clearInterval(timer);
    down = false;
    return timer = null;
  };
  return require.ready(function() {
    return setTimeout(function() {
      alert("Hold the UP arrow to control the ship.  Spacebar to pause.");
      return attach();
    }, 500);
  });
});