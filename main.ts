// listeningEvents:
document.getElementById("Resumeform")?.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    // Type Assertions:

    const nameElement = document.getElementById("Name") as HTMLInputElement ;
    const emailElement = document.getElementById("Email") as HTMLInputElement; 
    const phoneElement = document.getElementById("Phone") as HTMLInputElement;
    const educationElement = document.getElementById("Education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("Experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("Skills") as HTMLTextAreaElement;
    const profilePictureElement = document.getElementById("profilePicture") as HTMLInputElement; 

    // Checking if all elements exist:

    if ( profilePictureElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;



        // Profile Picture Element:

        const profilePictureFile = profilePictureElement.files?.[0];

        if (profilePictureFile && profilePictureFile.type.startsWith('image/')) {
            const profilePictureURL = URL.createObjectURL(profilePictureFile);
            
        } else {
            console.error("Please upload a valid image file.");
        }

        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Resume Output:


        const resumeOutput = `
        <h2>Resume Output</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
        `;



        // Resume Output:

        const resumeOutputElement = document.getElementById("ResumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            
        } else {
            console.error("RESUME OUTPUT ELEMENTS ARE MISSING!!");
        }
    } else {
        console.error("ONE OR MORE OUTPUT ELEMENTS ARE MISSING!!!");
    }
});
