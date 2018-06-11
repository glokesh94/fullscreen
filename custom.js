/*Start code for Full Screen Mode*/
function allowFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {  
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

/*end code for Full Screen Mode*/

/* Get into full screen */
function GoInFullscreen(element) {
    if(element.requestFullscreen)
        element.requestFullscreen();
    else if(element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if(element.msRequestFullscreen)
        element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
    if(document.exitFullscreen)
        document.exitFullscreen();
    else if(document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if(document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if(document.msExitFullscreen)
        document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
    
    // If no element is in full-screen
    if(full_screen_element === null)
        return false;
    else
        return true;
}
function updateFullScreen() {
    if(IsFullScreenCurrently())
        GoOutFullscreen();
    else
        GoInFullscreen($("#element").get(0));
} 

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
    if(IsFullScreenCurrently()) {
        $("#element span").text('Full Screen Mode Enabled');
        $("#go-button").text('Disable Full Screen');
    }
    else {
        $("#element span").text('Full Screen Mode Disabled');
        $("#go-button").text('Enable Full Screen');
    }
});