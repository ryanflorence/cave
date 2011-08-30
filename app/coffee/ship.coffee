# file:///Users/rpflo/Code/playground/cave/app/index.html
define [], () ->

  y: 150
  vy: 0.25
  a: 0.1

  draw: ->
    @y += @vy
    @vy += @a
    @context.fillStyle = "rgba(0, 0, 0, 1)"
    @context.fillRect 200, @y, 10, 10

  reverse: ->
    @a = -@a