
try {
    let i = 0;
    var wait = setInterval(function() {
        if (document.querySelector('.jw-video') !== null) {
            var video = document.querySelector('.jw-video');
            video.playbackRate=2;
            clearInterval(checkExist);
        } else {
            i++;
        }
        if (i > 100) {
            // if 20 seconds have passed, forget about it
            clearInterval(checkExist);
        }

    }, 200);
} catch (err) {
    console.log("No JW player detected");
}
