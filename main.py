def on_pin_pressed_p0():
    pass
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def stop():
    pins.analog_write_pin(AnalogPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P16, 0)
def for_left_turn():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.analog_write_pin(AnalogPin.P15, 1023)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.analog_write_pin(AnalogPin.P16, 512)
def backwards_left():
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.analog_write_pin(AnalogPin.P15, 512)
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.analog_write_pin(AnalogPin.P16, 1023)
def backwards_right():
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.analog_write_pin(AnalogPin.P15, 1023)
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.analog_write_pin(AnalogPin.P16, 512)
def backwards():
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.analog_write_pin(AnalogPin.P15, 1023)
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.analog_write_pin(AnalogPin.P16, 1023)
def forward():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.analog_write_pin(AnalogPin.P15, 1023)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.analog_write_pin(AnalogPin.P16, 1023)
def for_right_turn():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.analog_write_pin(AnalogPin.P15, 512)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.analog_write_pin(AnalogPin.P16, 1023)

def on_forever():
    if True:
        basic.show_icon(IconNames.SWORD)
    else:
        basic.show_icon(IconNames.HOUSE)
basic.forever(on_forever)
