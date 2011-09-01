define ['ship', 'cave'], (ship, cave) ->
  index = parseInt (ship.x / cave.pointWidth).toFixed()
  console.log index

  top = ->
    ship.coords.y < cave.points[index].top

  bottom = ->
    ship.coords.y > cave.points[index].bottom

  callback: ->
  check: (ship, cave) ->
    @callback() if top() or bottom()
  