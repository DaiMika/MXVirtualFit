// main.js

// Function to display a welcome message
function displayWelcomeMessage() {
    alert("Welcome to MXVirtualFit!");
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    console.log("Form submitted:", formObject);
}

// Event listener for the welcome button
document.getElementById("welcomeBtn").addEventListener("click", displayWelcomeMessage);

// Event listener for the form submission
document.getElementById("contactForm").addEventListener("submit", handleFormSubmit);

