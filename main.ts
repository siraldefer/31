let puntua: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    puntua.change(LedSpriteProperty.Direction, 1)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    	
    }
    if (input.buttonIsPressed(Button.A)) {
        null.change(LedSpriteProperty.X, 1)
        puntua = 0
    }
    if (input.buttonIsPressed(Button.AB)) {
        puntua.change(LedSpriteProperty.X, 1)
    }
})
