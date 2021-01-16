radio.onReceivedNumber(function (receivedNumber) {
    Started = 1
    Disalarm = 0
    Timer = 5
    while (true) {
        music.playTone(659, music.beat(BeatFraction.Quarter))
        basic.showNumber(Timer)
        if (Timer == 0) {
            music.stopMelody(MelodyStopOptions.All)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
            basic.showIcon(IconNames.Skull)
            break;
        }
        if (Disalarm == 1) {
            music.stopMelody(MelodyStopOptions.All)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
            basic.showIcon(IconNames.Happy)
            break;
        }
        basic.pause(800)
        Timer += -1
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
