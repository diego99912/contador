input.onButtonPressed(Button.A, function () {
    Punto_A += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    Punto_B += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.showNumber(Punto_B)
})
let Punto_B = 0
let Punto_A = 0
Punto_B = 0
let Empate = 0
