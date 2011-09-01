define ->

  height = window.innerHeight
  width = window.innerWidth
  pointWidth = 5

  makePoint = (i) ->
    top: 10, bottom: height - 20

  makePoints = ->
    i = parseInt (width / pointWidth).toFixed(), 10
    makePoint i while --i

  random = (min, max) ->
    Math.floor Math.random() * (max - min + 1) + min

  cave = 
    reset: ->
      @range = 10
      @diff = height - height / 10
      @smallest = 100
      @points = makePoints()
      @pointWidth = pointWidth
      @

    addPoint: ->
      last = @points[@points.length - 1]
      top = @getTop last
      bottom = @getBottom last, top
      @points.push
        top: top
        bottom: bottom
      @points.shift()
      @diff -= 0.1 if @diff > @smallest

    getTop: (last) ->
      min = last.top - @range / 1.01
      max = last.top + @range
      top = random min, max
      return @getTop last if (top < 0 or top > height)
      top

    getBottom: (last, top) ->
      top + @diff
      #random last.bottom + @range / 2, last.bottom - @range

    draw: ->
      @addPoint()
      @context.fillStyle = "rgba(100, 100, 180, 1)"
      @points.forEach (point, index) =>
        @drawPoint point, index

    drawPoint: (point, index) ->
      @context.fillRect index * pointWidth, 0, pointWidth, point.top
      @context.fillRect index * pointWidth, point.bottom, pointWidth, height - point.bottom

  cave.reset()