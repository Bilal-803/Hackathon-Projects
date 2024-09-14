document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertions
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output in HTML
        const resumeOutput = `
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

            <button id="editButton">Edit</button>
            <a id="downloadLink" download="resume.txt" href="#">Download Resume</a>
        `;

        // Insert resume output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing.');
        }

        // Create the content for the downloadable text file
        const resumeTextContent = `
Name: ${name}
Email: ${email}
Phone Number: ${phone}

Education:
${education}

Experience:
${experience}

Skills:
${skills}
        `;

        // Create a Blob object with the text content
        const blob = new Blob([resumeTextContent], { type: 'text/plain' });
        const downloadLink = document.getElementById('downloadLink') as HTMLAnchorElement;

        // Create a downloadable URL and set it to the link
        const downloadUrl = URL.createObjectURL(blob);
        if (downloadLink) {
            downloadLink.href = downloadUrl;
        }

        // Hide the form after generating the resume
        const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
        if (resumeForm) {
            resumeForm.style.display = 'none';
        }

        // Add functionality to the "Edit" button
        document.getElementById('editButton')?.addEventListener('click', function () {
            // Pre-fill the form with current resume values
            nameElement.value = name;
            emailElement.value = email;
            phoneElement.value = phone;
            educationElement.value = education;
            experienceElement.value = experience;
            skillsElement.value = skills;

            // Show the form for editing
            if (resumeForm) {
                resumeForm.style.display = 'block';
            }

            // Hide the resume output
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = '';
            }
        });
    } else {
        console.error('One or more input elements are missing.');
    }
});
