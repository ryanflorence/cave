define(['ship'], function(ship) {
  return {
    init: function() {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      this.setAttrs();
      this.invert = false;
      document.body.appendChild(this.canvas);
      return ship.context = this.context;
    },
    setAttrs: function() {
      this.canvas.setAttribute('width', 600);
      return this.canvas.setAttribute('height', 300);
    },
    step: function(x) {
      this.context.save();
      this.context.fillStyle = "rgba(255, 255, 255, 1)";
      this.context.fillRect(0, 0, 600, 300);
      ship.draw();
      return this.context.restore();
    }
  };
});