window.addEventListener("load", setupKeyboardListeners);

function setupKeyboardListeners() {
    // listen for keys
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
}

function keyDownHandler(e) {
    setDirectionIndicator(e, true);
    if(e.keyCode == 80 /* 'p' */) {
        state === GAMESTATES.PLAY ? dealWithPause() : dealWithRestartClick();
    }
    else if(e.keyCode == 73 /* 'i' */) {
        handleDebug();
    }
    else if(e.keyCode == 49 /* 1 */) {
        ballSpeedMultiplier = 1;
        $("#easybutton").prop("checked", true);
    }
    else if(e.keyCode == 50 /* 2 */) {
        ballSpeedMultiplier = 2;
        $("#mediumbutton").prop("checked", true);
    }
    else if(e.keyCode == 51 /* 3 */) {
        ballSpeedMultiplier = 3;
        $("#hardbutton").prop("checked", true);
    }
}

function keyUpHandler(e) {
    setDirectionIndicator(e, false);
}

function setDirectionIndicator(e, value) {
    if(e.keyCode == 65 /* 'a' */ || e.keyCode == 37 /* left arrow */) {
        leftDirectionPressed = value;
    }
    else if(e.keyCode == 68 /* 'd' */ || e.keyCode == 39 /* right arrow */) {
        rightDirectionPressed = value;
    }

    if(leftDirectionPressed || rightDirectionPressed) {
        $("#myCanvas").addClass("usingArrowKeysOnCanvas");
    }
}