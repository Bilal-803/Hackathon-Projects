var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertions
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skills_1 = skillsElement.value;
        // Create resume output in HTML
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email_1, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone_1, "</p>\n\n            <h3>Education:</h3>\n            <p>").concat(education_1, "</p>\n\n            <h3>Experience:</h3>\n            <p>").concat(experience_1, "</p>\n\n            <h3>Skills:</h3>\n            <p>").concat(skills_1, "</p>\n\n            <button id=\"editButton\">Edit</button>\n            <a id=\"downloadLink\" download=\"resume.txt\" href=\"#\">Download Resume</a>\n        ");
        // Insert resume output
        var resumeOutputElement_1 = document.getElementById('resumeOutput');
        if (resumeOutputElement_1) {
            resumeOutputElement_1.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing.');
        }
        // Create the content for the downloadable text file
        var resumeTextContent = "\nName: ".concat(name_1, "\nEmail: ").concat(email_1, "\nPhone Number: ").concat(phone_1, "\n\nEducation:\n").concat(education_1, "\n\nExperience:\n").concat(experience_1, "\n\nSkills:\n").concat(skills_1, "\n        ");
        // Create a Blob object with the text content
        var blob = new Blob([resumeTextContent], { type: 'text/plain' });
        var downloadLink = document.getElementById('downloadLink');
        // Create a downloadable URL and set it to the link
        var downloadUrl = URL.createObjectURL(blob);
        if (downloadLink) {
            downloadLink.href = downloadUrl;
        }
        // Hide the form after generating the resume
        var resumeForm_1 = document.getElementById('resumeForm');
        if (resumeForm_1) {
            resumeForm_1.style.display = 'none';
        }
        // Add functionality to the "Edit" button
        (_a = document.getElementById('editButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            // Pre-fill the form with current resume values
            nameElement.value = name_1;
            emailElement.value = email_1;
            phoneElement.value = phone_1;
            educationElement.value = education_1;
            experienceElement.value = experience_1;
            skillsElement.value = skills_1;
            // Show the form for editing
            if (resumeForm_1) {
                resumeForm_1.style.display = 'block';
            }
            // Hide the resume output
            if (resumeOutputElement_1) {
                resumeOutputElement_1.innerHTML = '';
            }
        });
    }
    else {
        console.error('One or more input elements are missing.');
    }
});
