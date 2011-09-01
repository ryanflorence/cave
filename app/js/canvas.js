define(['ship', 'cave'], function(ship, cave) {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
    init: function() {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      this.setAttrs();
      this.invert = false;
      document.body.appendChild(this.canvas);
      ship.context = this.context;
      return cave.context = this.context;
    },
    setAttrs: function() {
      this.canvas.setAttribute('width', this.width);
      return this.canvas.setAttribute('height', this.height);
    },
    step: function(x) {
      this.context.save();
      this.context.fillStyle = "rgba(10, 10, 10, 1)";
      this.context.fillRect(0, 0, this.width, this.height);
      ship.draw();
      cave.draw();
      return this.context.restore();
    }
  };
});