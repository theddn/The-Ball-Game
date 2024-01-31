'use strict'

var ballSize = 100
var ballStep = 50

function onBallClick() {
    var elBall = document.querySelector('.ball')
    elBall.innerText = ballSize + ballStep
    elBall.style.width = ballSize + ballStep + 'px'
    elBall.style.height = ballSize + ballStep +'px'
}