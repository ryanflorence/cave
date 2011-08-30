require ['canvas', 'ship'], (canvas, ship)->
  timer = null
  down = true

  canvas.init()
  canvas.step()
  ship.reverse()

  attach = ->
    window.addEventListener 'keydown', (event) ->
      return start() if timer is null
      if event.keyCode is 40 then clearInterval timer
      return if down
      down = true
      ship.reverse()

    window.addEventListener 'keyup', ->
      down = false
      ship.reverse()

  start = ->
    console.log 'start'
    timer = setInterval ->
      canvas.step()
    , 1000 / 77

  require.ready ->
    setTimeout attach, 1000
