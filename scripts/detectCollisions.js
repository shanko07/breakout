// this works at the "name space" for now to avoid any function name collision
// TODO: there has to be a better way to do this
var DetectCollisions = {};

DetectCollisions.helloWorld = function()
{
    return "hi, i'm detecting collisions";
};

// function to determine if ball and brick are colliding
DetectCollisions.detectCollision = function(object, objectWidth, objectHeight) {
    // the ball is substantially within the brick, definitely a collision
    if(ballx > object.x && ballx < (object.x + objectWidth) && bally > object.y && bally < (object.y + brickHeight)){
        return 5;
    }

    // TODO: we may need to handle multiple valid intersections.  what do we do if it has hit two sides?
    // I am thinking we need to find out if the center point of the circle is above or below the following line
    //    |      /
    //    |    /
    //    |  /
    //    |/
    //    ---------------------
    //   / 
    // / 
    //
    
    // we will need the above info as well as the info about what direction it was moving in when it collided as well.

    // y = bricky
    var y = object.y;
    var sols1 = findQuadraticSolutions(1, -2*ballx, Math.pow(ballx, 2.0) + Math.pow(y, 2.0) - 2*bally*y + Math.pow(bally, 2.0) - Math.pow(ballRadius, 2.0));
    var priVal1 = primaryValidation(sols1, object.x, object.x+objectWidth);

    if(priVal1[0] || priVal1[1])
    {
        return 1;
    }

    // y = bricky + brickHeight
    y = object.y + objectHeight;
    var sols2 = findQuadraticSolutions(1, -2*ballx, Math.pow(ballx, 2.0) + Math.pow(y, 2.0) - 2*bally*y + Math.pow(bally, 2.0) - Math.pow(ballRadius, 2.0));
    var priVal2 = primaryValidation(sols2, object.x, object.x+objectWidth);
    if(priVal2[0] || priVal2[1])
    {
        return 2;
    }

    // x = brickx
    var x = object.x;
    var sols3 = findQuadraticSolutions(1, -2*bally, Math.pow(bally, 2.0) + Math.pow(x, 2.0) - 2*ballx*x + Math.pow(ballx, 2.0) - Math.pow(ballRadius, 2.0));
    var priVal3 = primaryValidation(sols3, object.y, object.y+objectHeight);
    if(priVal3[0] || priVal3[1])
    {
        return 3;
    }

    // x = brickx + brickWidth
    x = object.x + objectWidth;
    var sols4 = findQuadraticSolutions(1, -2*bally, Math.pow(bally, 2.0) + Math.pow(x, 2.0) - 2*ballx*x + Math.pow(ballx, 2.0) - Math.pow(ballRadius, 2.0));
    var priVal4 = primaryValidation(sols4, object.y, object.y+objectHeight);
    if(priVal4[0] || priVal4[1])
    {
        return 4;
    }

    // if there are no collisions, return false
    return 0;
};

function handleBallRedirectAndBrickKill(detectionResult) {
    switch(detectionResult) {
        case 0:
            // do nothing
        break;
        case 1:
            bricks[c][r].dead = true;
            // change ball direction
            ydir = -1;
            drawBrick(bricks[c][r].x, bricks[c][r].y, deadBrickColor);
            drawBall();
        break;
        case 2:
            bricks[c][r].dead = true;
            // change ball direction
            ydir = 1;
            drawBrick(bricks[c][r].x, bricks[c][r].y, deadBrickColor);
            drawBall();
        break;
        case 3:
            bricks[c][r].dead = true;
            // change ball direction
            xdir = -1;
            drawBrick(bricks[c][r].x, bricks[c][r].y, deadBrickColor);
            drawBall();
        break;
        case 4:
            bricks[c][r].dead = true;
            // change ball direction
            xdir = 1;
            drawBrick(bricks[c][r].x, bricks[c][r].y, deadBrickColor);
            drawBall();
        break;
        case 5:
            bricks[c][r].dead = true;
            // skip changing ball direction because we don't know what to do with that
            drawBrick(bricks[c][r].x, bricks[c][r].y, deadBrickColor);
            drawBall();
        break;
        default:
            // do nothing
        break;
    }
}
