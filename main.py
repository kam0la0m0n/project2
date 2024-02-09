a = 0

def on_forever():
    global a
    a = input.light_level()
    if a < 10 and a >= 1:
        basic.show_number(1)
    elif a < 100 and a >= 10:
        basic.show_number(2)
    else:
        basic.show_number(3)
basic.forever(on_forever)
