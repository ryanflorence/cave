require ['canvas', 'ship', 'cave', 'collision'], (canvas, ship, cave, collision)->
  timer = null
  down = true

  canvas.init()
  canvas.step()
  ship.reverse()

  collision.callback = ->
    stop()
    cave.reset()
    ship.reset()
    detach()
    setTimeout attach, 1000

  keydown = (event) ->
    start() if timer is null
    return stop() if event.keyCode is 32
    return if down or event.keyCode isnt 38
    down = true
    ship.reverse()

  keyup = (event) ->
    return if event.keyCode isnt (38 or 32)
    down = false
    ship.reverse()

  attach = ->
    window.addEventListener 'keydown', keydown
    window.addEventListener 'keyup', keyup

  detach = ->
    window.removeEventListener 'keydown', keydown
    window.removeEventListener 'keyup', keyup

  start = ->
    timer = setInterval ->
      canvas.step()
      collision.check()
    , 1000 / 77

  stop = ->
    clearInterval timer
    down = false
    timer = null

  require.ready ->
    setTimeout attach, 500
