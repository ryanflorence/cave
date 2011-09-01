define(function() {
  return {
    total: 0,
    init: function() {
      this.wrap = document.createElement('div');
      this.wrap.className = 'score';
      this.wrap.innerHTML = 'Score:<br> <span>' + this.total + '</span>';
      this.element = this.wrap.getElementsByTagName('span')[0];
      return document.body.appendChild(this.wrap);
    },
    up: function() {
      this.total += 1;
      return this.update();
    },
    update: function() {
      return this.element.innerHTML = this.total;
    },
    reset: function() {
      return this.total = 0;
    }
  };
});