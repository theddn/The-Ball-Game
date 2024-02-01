'use strict'

var ballSize = 100
var ballStep = 50

function onBallClick(elBall) {
    ballSize += ballStep
    if (ballSize > 400) ballSize = 100

    elBall.innerText = ballSize
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
}