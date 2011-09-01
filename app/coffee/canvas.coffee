define [
  'ship'
  'cave'
], (ship, cave) ->

  height: window.innerHeight
  width: window.innerWidth

  init: ->
    @canvas = document.createElement 'canvas'
    @context = @canvas.getContext '2d'
    @setAttrs()
    @invert = false

    document.body.appendChild @canvas
    ship.context = @context
    cave.context = @context

  setAttrs: ->
    @canvas.setAttribute 'width', @width
    @canvas.setAttribute 'height', @height

  step: (x) ->
    @context.save()
    @context.fillStyle = "rgba(10, 10, 10, 1)"
    @context.fillRect 0, 0, @width, @height
    ship.draw()
    cave.draw()
    @context.restore()
