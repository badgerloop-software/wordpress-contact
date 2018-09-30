/*  Detects which reason for contactin was selected by the user 
    And calls the appropriate function based on that */
function dynamicForm() {
    let selected = document.querySelector(".input-select").value.toLowerCase();
    switch(selected) {
        case "student application":
            populateStudentForm();
            break;
        case "sponsorship inquiry":
            populateSponsorForm();
            break;
        case "media inquiry":
            populateMediaForm();
            break;
        case "other":
            populateOtherForm();
            break;
    }
}
/* START UI editing based on contact reason selection */
function populateStudentForm() {
    let form = `
    <div class="input-label">Major:</div>
    <input class="input input-text" type="text">
    <div class="input-label">Year:</div>
    <input class="input input-text" type="text">
    <div class="input-label">Team(s) Interested In:</div>
    <input class="input input-text" type="text">
    <div class="input-label">Tell Us About Yourself:</div>
    <textarea class="input input input-textarea"></textarea>
    <div class="button" onclick="exampleClick()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateSponsorForm() {
    let form = `
    <div class="input-label">Company Name:</div>
    <input class="input input-text" type="text">
    <div class="input-label">Additional Information:</div>
    <textarea class="input input-textarea"></textarea>
    <div class="button" onclick="exampleClick()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateMediaForm() {
    let form = `
    <div class="input-label">Organization Name:</div>
    <input class="input input-text" type="text">
    <div class="input-label">Additional Information:</div>
    <textarea class="input input-textarea"></textarea>
    <div class="button" onclick="exampleClick()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateOtherForm() {
    let form = `
    <div class="input-label">Message:</div>
    <textarea class="input input-textarea" type="text"></textarea>
    <div class="button" onclick="exampleClick()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
/* END UI editing */

function exampleClick() {
    let string = `Information Entered: \n`;
    let list = document.querySelectorAll(".input");
    for (x of list) {
        string += ` ${x.value} \n`;
    }
    alert(string);
}

function exampleAPI() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log(xhttp.responseText);
        } else if (xhttp.readyState === 4 && xhttp.status !== 200) {
            console.log(`ERROR: ${xhttp.responseText}`);
        }
    }

    xhttp.open("GET", 'https://liammahoney.me/api/example1');
    xhttp.send(null);
}

//Posts to website channel for now
function slackExample() {
    let xhttp = new XMLHttpRequest();

    let message = {
        text: "Hello, World"
    }
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log(xhttp.responseText);
        } else if (xhttp.readyState === 4 && xhttp.status !== 200) {
            console.log(`ERROR: ${xhttp.responseText}`);
        }
    }

    xhttp.open("POST", 'https://hooks.slack.com/services/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');
    xhttp.send(JSON.stringify(message));
}


