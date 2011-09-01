var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(function() {
  var cave, height, makePoint, makePoints, pointWidth, random, width;
  height = window.innerHeight;
  width = window.innerWidth;
  pointWidth = 5;
  makePoint = function(i) {
    return {
      top: 10,
      bottom: height - 20
    };
  };
  makePoints = function() {
    var i, _results;
    i = parseInt((width / pointWidth).toFixed(), 10);
    _results = [];
    while (--i) {
      _results.push(makePoint(i));
    }
    return _results;
  };
  random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  cave = {
    reset: function() {
      this.range = 10;
      this.diff = height - height / 10;
      this.smallest = 100;
      this.points = makePoints();
      this.pointWidth = pointWidth;
      return this;
    },
    addPoint: function() {
      var bottom, last, top;
      last = this.points[this.points.length - 1];
      top = this.getTop(last);
      bottom = this.getBottom(last, top);
      this.points.push({
        top: top,
        bottom: bottom
      });
      this.points.shift();
      if (this.diff > this.smallest) {
        return this.diff -= 0.1;
      }
    },
    getTop: function(last) {
      var max, min, top;
      min = last.top - this.range / 1.01;
      max = last.top + this.range;
      top = random(min, max);
      if (top < 0 || top > height) {
        return this.getTop(last);
      }
      return top;
    },
    getBottom: function(last, top) {
      return top + this.diff;
    },
    draw: function() {
      this.addPoint();
      this.context.fillStyle = "rgba(100, 100, 180, 1)";
      return this.points.forEach(__bind(function(point, index) {
        return this.drawPoint(point, index);
      }, this));
    },
    drawPoint: function(point, index) {
      this.context.fillRect(index * pointWidth, 0, pointWidth, point.top);
      return this.context.fillRect(index * pointWidth, point.bottom, pointWidth, height - point.bottom);
    }
  };
  return cave.reset();
});