let a = 0
basic.forever(function () {
    a = input.lightLevel()
    if (a < 10 && a >= 1) {
        basic.showNumber(1)
    } else if (a < 100 && a >= 10) {
        basic.showNumber(2)
    } else {
        basic.showNumber(3)
    }
})
