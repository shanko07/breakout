function drawBall() {
    ctx.beginPath();
    ctx.arc(ballx,bally,ballRadius,0,Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = paddleColor;
    ctx.fill();
    ctx.closePath();
}

function drawBrick(x, y, fillstyle) {
    ctx.beginPath();
    ctx.rect(x, y, brickWidth, brickHeight);
    ctx.fillStyle = fillstyle;
    ctx.fill();
    ctx.closePath();
}
