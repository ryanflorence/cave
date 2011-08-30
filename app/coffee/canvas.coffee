define ['ship'], (ship) ->
  init: ->
    @canvas = document.createElement 'canvas'
    @context = @canvas.getContext '2d'
    @setAttrs()
    @invert = false

    document.body.appendChild @canvas
    ship.context = @context

  setAttrs: ->
    @canvas.setAttribute 'width', 600
    @canvas.setAttribute 'height', 300

  step: (x) ->
    @context.save()
    @context.fillStyle = "rgba(255, 255, 255, 1)"
    @context.fillRect 0, 0, 600, 300
    ship.draw()
    @context.restore()
