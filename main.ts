input.onButtonPressed(Button.A, function () {
    game.removeLife(1)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    if (true) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    game.removeLife(1)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    game.removeLife(1)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    let sprite: game.LedSprite = null
    basic.showNumber(randint(1, 6))
    if (sprite.isTouchingEdge()) {
        sprite.turn(Direction.Left, 90)
    } else {
        sprite.move(randint(1, 6))
    }
})
game.addLife(3)
basic.showIcon(IconNames.No)
basic.showLeds(`
    . # # . .
    . . . # .
    . . # . .
    . . . # .
    . # # . .
    `)
basic.showIcon(IconNames.Heart)
game.createSprite(0, 0).move(0)
