document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var profilePictureElement = document.getElementById("profilePicture");

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureUrl = '';

        // Check if a profile picture is uploaded
        if (profilePictureElement && profilePictureElement.files.length > 0) {
            var profilePictureFile = profilePictureElement.files[0];
            profilePictureUrl = URL.createObjectURL(profilePictureFile);
        }

        // Create resume output
        var resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;"><br>` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Education:</h3>
            <p>${education}</p>
            <h3>Experience:</h3>
            <p>${experience}</p>
            <h3>Skills:</h3>
            <p>${skills}</p>
        `;

        // Display the resume in the output div
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The resume output element is missing.");
        }
    } else {
        console.error("One or more input elements are missing.");
    }
});