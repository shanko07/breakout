window.addEventListener("load", setupMouseListeners);

function setupMouseListeners() {
    document.addEventListener("mousemove", mouseMoveHandler, false);
  
    document.getElementById("myCanvas").addEventListener("mouseenter", mouseEnterHandler, false);
    document.getElementById("myCanvas").addEventListener("mouseleave", mouseLeaveHandler, false);
}

function mouseMoveHandler(e) {
    var offset = $("#myCanvas").offset();
    if(mouseInCanvas) {
        paddleX = e.pageX - offset.left - paddleWidth/2;
    }
}

function mouseEnterHandler(e) {
    mouseInCanvas = true;
}

function mouseLeaveHandler(e) {
    mouseInCanvas = false;
}
