def on_button_pressed_a():
    game.remove_life(1)
    basic.show_icon(IconNames.NO)
    basic.show_leds("""
        . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
    """)
    if True:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    game.remove_life(1)
    basic.show_icon(IconNames.NO)
    basic.show_leds("""
        . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
    """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    game.remove_life(1)
    basic.show_icon(IconNames.NO)
    basic.show_leds("""
        . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_number(randint(1, 6))
    game.create_sprite(0, 0).move(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

game.add_life(3)
basic.show_icon(IconNames.NO)
basic.show_leds("""
    . # # . .
        . . . # .
        . . # . .
        . . . # .
        . # # . .
""")
basic.show_icon(IconNames.HEART)