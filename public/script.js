/*  TODO: Talked to Kevin about the design, he thought about having one form and 
    having a 'reason for contacting' drop down that will change the other fields 
    on the form based on what the user selectes.

    Basic format: 

    Name:
    Reason for Contacting (dropdown) 
    New inputs based on what is selected above

    e.g. if student is selected, create year, major, insterested teams, tell 
    us about yourself fields.

    Basically need to start over this file.
*/

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

function populateStudentForm() {
    let form = `
    <div class="input-label">Major:</div>
    <input class="input-text" type="text">
    <div class="input-label">Year:</div>
    <input class="input-text" type="text">
    <div class="input-label">Team(s) Interested In:</div>
    <input class="input-text" type="text">
    <div class="input-label">Tell Us About Yourself:</div>
    <textarea class="input-textarea"></textarea>
    <div class="button">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateSponsorForm() {
    let form = `
    <div class="input-label">Company Name:</div>
    <input class="input-text" type="text">
    <div class="input-label">Additional Information:</div>
    <textarea class="input-textarea"></textarea>
    <div class="button">Submit</div>
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}
function populateMediaForm() {
    let form = `
    <div class="input-label">Organization Name:</div>
    <input class="input-text" type="text">
    <div class="input-label">
    <div class="button">Submit</div>
    `;

}
function populateOtherForm() {
    let form = `
    <div class="input-label">Message:</div>
    <textarea class="input-textarea-large" type="text">
    `;
    document.querySelector(".dynamic-form-container").innerHTML = form;
}