document.addEventListener("DOMContentLoaded", () => {
    // Select the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop default form submission

        // Get and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation status and messages
        let isValid = true;
        let messages = [];

        // ✅ Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // ✅ Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // ✅ Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // ✅ Feedback Display Logic
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Light red
        }
    });
});

