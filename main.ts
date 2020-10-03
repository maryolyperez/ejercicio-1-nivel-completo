basic.forever(function () {
    basic.showNumber(0)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(2)
    } else if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.showNumber(1)
        basic.clearScreen()
    }
})
