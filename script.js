document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Real-time validation listeners
    document.getElementById('username').addEventListener('input', validateUsername);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('password').addEventListener('input', validatePassword);

    // Clear feedback when user starts typing
    form.addEventListener('input', function() {
        feedbackDiv.style.display = 'none';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validation variables
        let isValid = true;
        const messages = [];
        
        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            isValid = false;
            messages.push('Username can only contain letters, numbers, and underscores');
        }
        
        // Email validation (more robust)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address');
        }
        
        // Password validation (more complex)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }
        if (!/[A-Z]/.test(password)) {
            isValid = false;
            messages.push('Password must contain at least one uppercase letter');
        }
        if (!/[0-9]/.test(password)) {
            isValid = false;
            messages.push('Password must contain at least one number');
        }
        
        // Display feedback
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.className = 'success';
            
            // Clear form
            form.reset();
            
            // Hide feedback after 3 seconds
            setTimeout(() => {
                feedbackDiv.style.display = 'none';
            }, 3000);
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.className = '';
        }
    });

    // Individual validation functions for real-time feedback
    function validateUsername() {
        const username = this.value.trim();
        const feedback = document.getElementById('username-feedback');
        
        if (username.length > 0 && username.length < 3) {
            feedback.textContent = 'Username too short (min 3 chars)';
            feedback.style.display = 'block';
        } else if (!/^[a-zA-Z0-9_]*$/.test(username)) {
            feedback.textContent = 'Only letters, numbers, and underscores allowed';
            feedback.style.display = 'block';
        } else {
            feedback.style.display = 'none';
        }
    }

    function validateEmail() {
        const email = this.value.trim();
        const feedback = document.getElementById('email-feedback');
        
        if (email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            feedback.textContent = 'Please enter a valid email';
            feedback.style.display = 'block';
        } else {
            feedback.style.display = 'none';
        }
    }

    function validatePassword() {
        const password = this.value;
        const feedback = document.getElementById('password-feedback');
        const messages = [];
        
        if (password.length > 0 && password.length < 8) {
            messages.push('At least 8 characters');
        }
        if (!/[A-Z]/.test(password)) {
            messages.push('At least one uppercase letter');
        }
        if (!/[0-9]/.test(password)) {
            messages.push('At least one number');
        }
        
        if (messages.length > 0) {
            feedback.innerHTML = 'Requirements:<br>' + messages.join('<br>');
            feedback.style.display = 'block';
        } else {
            feedback.style.display = 'none';
        }
    }
});
