document
  .getElementById("resumeform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
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
      } else {
        console.log("Error: Cannot find resumeOutput element");
      }
    } else {
      console.log("one or more output elements not found");
    }
  });
