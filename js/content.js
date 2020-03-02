try {
    var video = document.querySelector('.jw-video');
    video.playbackRate=2;
} catch (err) {
    console.log("No JW player detected");
}