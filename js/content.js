'use strict';

function waiter() {
    var video = document.querySelector('.jw-video');
    video.playbackRate=speed;
}

function load() {
    let i = 0;
    var wait = setInterval(function() {
        if (document.querySelector('.jw-video') != undefined) {
            waiter();
            clearInterval(wait);
        } else {
            i++;
        }
        if (i > 100) {
            // if 20 seconds have passed, forget about it
            clearInterval(wait);
        }

    }, 200);
}

try {
    var speed;
    chrome.storage.local.get({'v_speed': "2"}, function(result) {
        speed = result.v_speed;
        load();
    });
} catch (err) {
    console.log("No JW player detected");
}
