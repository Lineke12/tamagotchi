input.onButtonPressed(Button.A, function () {
    knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    voeding += 5
})
let knuffel = 20
let voeding = 20
loops.everyInterval(1000, function () {
    knuffel += -1
})
loops.everyInterval(1000, function () {
    voeding += -1
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (knuffel < 10 || voeding < 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if ((voeding && knuffel) < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
