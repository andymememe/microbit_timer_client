radio.onReceivedNumber(function (receivedNumber) {
    Started = 1
    Disalarm = 0
    Timer = 0
    while (true) {
        basic.showNumber(Timer)
        if (Timer == 5) {
            basic.showIcon(IconNames.Skull)
            break;
        }
        if (Disalarm == 1) {
            basic.showIcon(IconNames.Happy)
            break;
        }
        basic.pause(1000)
        Timer += 1
    }
    Started = 0
})
input.onGesture(Gesture.Shake, function () {
    if (Started == 1) {
        Disalarm = 1
    }
})
let Timer = 0
let Disalarm = 0
let Started = 0
radio.setGroup(1)
basic.forever(function () {
	
})
