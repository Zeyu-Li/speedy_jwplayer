'use strict';

// inits if empty
if (localStorage.speed === undefined) {
    localStorage.speed = 2;
}

// speed options
let options = ["0.25", "0.5", "0.75", "1", "1.25", "1.5", "1.75", "2"];

// inits
let html_options = "";
let i = 0;
let breaker;
var checked;
let current_speed = localStorage.speed;

// for all options, create radio option
for (var speed of options) {
    breaker = "";
    checked = "";
    if (i === 0 && current_speed === "0.25") {
        checked = "checked";
    } else if (i === 1 && current_speed === "0.5") {
        checked = "checked";
    } else if (i === 2 && current_speed === "0.75") {
        checked = "checked";
    } else if (i === 3 && current_speed === "1") {
        checked = "checked";
    } else if (i === 4 && current_speed === "1.25") {
        checked = "checked";
    } else if (i === 5 && current_speed === "1.5") {
        checked = "checked";
    } else if (i === 6 && current_speed === "1.75") {
        checked = "checked";
    } else if (i === 7 && current_speed === "2") {
        checked = "checked";
    } else {
        console.log("!");
    }

    // line break after normal speed and the name is Normal, not 1
    if (i === 3) {
        speed = "Normal";
        breaker = "<br><br>";
    }
    // append all options
    html_options = `<label class="radio-inline"><input type="radio" name="optradio" value="`+i+`" `+checked+`>`+ speed +`</label> `+breaker+` `;
    document.getElementsByClassName('form-check')[0].innerHTML += html_options;
    i++;
}

// for radio button change
var radios = document.querySelectorAll('input[type=radio][name="optradio"]');

function changeHandler(event) {
    let new_speed = options[this.value];
    localStorage.speed = new_speed;

    console.log(new_speed);
}

Array.prototype.forEach.call(radios, function(radio) {
    radio.addEventListener('change', changeHandler);
});
