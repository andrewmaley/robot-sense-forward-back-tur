function stop () {
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function for_left_turn () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P16, 512)
}
function backwards_left () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.analogWritePin(AnalogPin.P15, 512)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
function backwards_right () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.analogWritePin(AnalogPin.P16, 512)
}
function backwards () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
function forward () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
function for_right_turn () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.analogWritePin(AnalogPin.P15, 512)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P10) < 10) {
        basic.showIcon(IconNames.Sword)
        backwards()
        basic.pause(500)
        backwards_right()
        basic.pause(200)
    } else {
        forward()
        basic.showIcon(IconNames.House)
    }
})
