input.onButtonPressed(Button.A, function () {
    x += -1
})
input.onButtonPressed(Button.AB, function () {
    y += 1
})
input.onButtonPressed(Button.B, function () {
    x += 1
})
input.onGesture(Gesture.Shake, function () {
    led.unplot(x, y)
    basic.pause(100)
    led.plot(x, y)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    y += -1
})
let y = 0
let x = 0
x = 2
y = 2
basic.forever(function () {
	
})
