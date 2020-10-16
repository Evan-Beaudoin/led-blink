// Created by: Evan
// Created on: Oct. 2020
// 
// This program blinks an LED
// 
// 
// 
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
})
