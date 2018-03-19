function primaryValidation(solutions, primary1, primary2) {
    var returnable = [false, false];

    // if the solution set is non-real, then the solutions definitely are not valid
    if(solutions === "non-real") {
        return returnable;
    }

    // store off the solutions
    var sol1 = solutions[0];
    var sol2 = solutions[1];

    // if either solution fits within the primary bounds, it passes primary validatio
    if(sol1 >= primary1 && sol1 <= primary2) {
        returnable[0] = true;
    }
    if(sol2 >= primary1 && sol2 <= primary2) {
        returnable[1] = true;
    }

    return returnable;
}
    
function findQuadraticSolutions(a, b, c) {
    //-b +- sqrt(b^2 - 4ac) / 2a

    // will these values result in non-real solutions?
    var innerTerm = Math.pow(b, 2.0) - 4*a*c;
    if(innerTerm < 0)
    {
        return "non-real";
    }

    var sol1 = (-1*b + Math.sqrt(innerTerm))/(2*a);
    var sol2 = (-1*b - Math.sqrt(innerTerm))/(2*a);

// here you learned what a map is and what an array is?.  more like "object" in javascript land
//    return {sol1, sol2};
    return [sol1, sol2];
}

function determineNewSlope(ballxhere, paddlexhere, paddlewidthhere, xdirection)
{
    //return new slope, only changes when you hit the paddle
    var relativePos = ballxhere - paddlexhere;
    var aroundcenter = relativePos - (paddlewidthhere/2.0);
    // lets say ballx = 20, paddlex = 18, paddlewidth = 5, xdirection = whatever
    // relative would be 2
    // [_ b _ _ _]
    // around center would be 2-2.5 or -.5
    // now we want to normalize things
    // -2.5 ... 2.5   should equate to 1 .. infinity .. -1
    var normed = -1.0 * aroundcenter / (paddlewidthhere/2.0);

    var out;

    // approx for cotinverse(9)
    if(Math.abs(normed) < .11065)
    {
        out = 9;
    }
    else
    {
        out = -1.0 * Math.tan(Math.abs(normed) - (Math.PI/2)) + 0;
    }

    return out;
}
