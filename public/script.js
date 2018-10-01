function chooseOption(value) {
    document.getElementById("input-select").innerHTML = value;
    optionExpand();
}
/* START UI editing based on contact reason selection */
function optionExpand() {
    document.getElementById("input-select").classList.toggle("option-active");
    document.querySelector(".input-select-expand").classList.toggle("hidden");
    document.getElementById("input-select").classList.toggle("no-margin-radius-bottom");
}
function populateStudentForm() {
    chooseOption("Student Application");
    let form = `
    <div class="input-label">Major:</div>
    <input class="input input-text" type="text" title="Major">
    <div class="input-label">Year:</div>
    <input class="input input-text" type="text" title="Year">
    <div class="input-label">Team(s) Interested In:</div>
    <input class="input input-text" type="text" title="Teams Interested In">
    <div class="input-label">Tell Us About Yourself:</div>
    <textarea class="input input input-textarea" title="Additional Info"></textarea>
    <div class="button" onclick="sendSlackMessage()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateSponsorForm() {
    chooseOption("Sponsor Inquiry");
    let form = `
    <div class="input-label">Company Name:</div>
    <input class="input input-text" type="text" title="Company">
    <div class="input-label">Additional Information:</div>
    <textarea class="input input-textarea" title="Additional Info"></textarea>
    <div class="button" onclick="sendSlackMessage()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateMediaForm() {
    chooseOption("Media Inquiry");
    let form = `
    <div class="input-label">Organization Name:</div>
    <input class="input input-text" type="text" title="Organization">
    <div class="input-label">Additional Information:</div>
    <textarea class="input input-textarea" title="Additional Info"></textarea>
    <div class="button" onclick="sendSlackMessage()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateOtherForm() {
    chooseOption("Other");
    let form = `
    <div class="input-label">Message:</div>
    <textarea class="input input-textarea" type="text" title="Message"></textarea>
    <div class="button" onclick="sendSlackMessage()">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
/* END UI editing */


// Posts to our API on our server. Sends all of the form data submitted
// by the user and formats it properly for the Slack message.
function sendSlackMessage() {
    let xhttp = new XMLHttpRequest();

    let slackMessage = "";

    let userInput = document.querySelectorAll(".input");

    for (x of userInput) {
        slackMessage += `*${x.title}:* ${x.value} \n`;
    }
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log(xhttp.responseText);
        } else if (xhttp.readyState === 4 && xhttp.status !== 200) {
            //TODO: catch errors from Slack and from our API
            console.log(`ERROR: ${xhttp.responseText}`);
        }
    }

    xhttp.open("POST", '../contact') //TODO: need full link to server API when implemented.
    xhttp.send(slackMessage);
}


