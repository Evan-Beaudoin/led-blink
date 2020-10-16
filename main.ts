basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
})
