define ->
  total: 0

  init: () ->
    @wrap = document.createElement 'div'
    @wrap.className = 'score'
    @wrap.innerHTML = 'Score:<br> <span>' + @total + '</span>'
    @element = @wrap.getElementsByTagName('span')[0]
    document.body.appendChild(@wrap)

  up: ->
    @total += 1
    @update()

  update: ->
    @element.innerHTML = @total

  reset: ->
    @total = 0
  