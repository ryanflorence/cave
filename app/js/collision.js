define(['ship', 'cave'], function(ship, cave) {
  var bottom, index, top;
  index = parseInt((ship.x / cave.pointWidth).toFixed());
  console.log(index);
  top = function() {
    return ship.coords.y < cave.points[index].top;
  };
  bottom = function() {
    return ship.coords.y > cave.points[index].bottom;
  };
  return {
    callback: function() {},
    check: function(ship, cave) {
      if (top() || bottom()) {
        return this.callback();
      }
    }
  };
});