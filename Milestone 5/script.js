"use strict";
var _a;
(_a = document
    .getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const educationElement = document.getElementById("education");
    const experienceElement = document.getElementById("experience");
    const skillsElement = document.getElementById("skills");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        //  create Resume Output
        const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Name:</strong> ${email}</p>
<p><strong>Name:</strong> ${phone}</p>


<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>


`;
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.log("Error: Cannot find resumeOutput element");
        }
    }
    else {
        console.log("one or more output elements not found");
    }
});
