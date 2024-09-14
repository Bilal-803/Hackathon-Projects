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
        var profilePictureElement = document.getElementById("profilePicture");


        if (profilePictureElement && profilePictureElement.files.length > 0) {
            var profilePictureFile = profilePictureElement.files[0];
            profilePictureUrl = URL.createObjectURL(profilePictureFile);
        }


        // Create resume output
        var resumeOutput = `
            <h2>Resume</h2>
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
        }

        // Show the "Edit" button after generating the resume
        document.getElementById("editButton").style.display = "block";

        // Hide the form after generating the resume
        document.getElementById("resumeForm").style.display = "none";
    }
});

// Edit button functionality to pre-fill the form with current values
document.getElementById("editButton").addEventListener("click", function () {
    // Get the current resume values
    var resumeOutputElement = document.getElementById("resumeOutput");

    // Extract current values from the displayed resume
    var name = resumeOutputElement.querySelector("p:nth-of-type(1)").innerText.split(": ")[1];
    var email = resumeOutputElement.querySelector("p:nth-of-type(2)").innerText.split(": ")[1];
    var phone = resumeOutputElement.querySelector("p:nth-of-type(3)").innerText.split(": ")[1];
    var education = resumeOutputElement.querySelector("p:nth-of-type(4)").innerText;
    var experience = resumeOutputElement.querySelector("p:nth-of-type(5)").innerText;
    var skills = resumeOutputElement.querySelector("p:nth-of-type(6)").innerText;

    // Pre-fill the form with these values
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
    document.getElementById("education").value = education;
    document.getElementById("experience").value = experience;
    document.getElementById("skills").value = skills;

    // Show the form for editing
    document.getElementById("resumeForm").style.display = "block";

    // Hide the resume and "Edit" button while editing
    resumeOutputElement.innerHTML = "";
    document.getElementById("editButton").style.display = "none";
});