define(function() {
  var ship;
  ship = {
    draw: function() {
      this.y += this.vy;
      this.vy += this.a;
      this.context.fillStyle = "rgba(255, 255, 255, 0.75)";
      this.coords = {
        x: this.x,
        y: this.y,
        h: 10,
        w: 10
      };
      return this.context.fillRect(this.x, this.y, 10, 10);
    },
    reverse: function() {
      return this.a = -this.a;
    },
    reset: function() {
      this.y = window.innerHeight / 2;
      this.vy = 0.1;
      this.a = 0.15;
      this.x = parseInt((window.innerWidth / 3).toFixed());
      return this;
    }
  };
  return ship.reset();
});