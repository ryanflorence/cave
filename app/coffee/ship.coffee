define ->
  ship =
    draw: ->
      @y += @vy
      @vy += @a
      @context.fillStyle = "rgba(255, 255, 255, 0.75)"
      @coords = x: @x, y: @y, h: 10, w: 10
      @context.fillRect @x, @y, 10, 10

    reverse: ->
      @a = -@a

    reset: ->
      @y = window.innerHeight / 2
      @vy = 0.1
      @a = 0.15
      @x = parseInt (window.innerWidth / 3).toFixed()
      @

  ship.reset()