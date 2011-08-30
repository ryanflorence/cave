define([], function() {
  return {
    y: 150,
    vy: 0.25,
    a: 0.1,
    draw: function() {
      this.y += this.vy;
      this.vy += this.a;
      this.context.fillStyle = "rgba(0, 0, 0, 1)";
      return this.context.fillRect(200, this.y, 10, 10);
    },
    reverse: function() {
      return this.a = -this.a;
    }
  };
});