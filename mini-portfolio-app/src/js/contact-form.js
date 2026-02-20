// This file manages the contact form functionality, including comprehensive input validation and form submission handling.

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const agreeTermsCheckbox = document.getElementById("agree-terms");
    const submitButton = contactForm.querySelector(".btn-submit");
    const formStatus = document.getElementById("form-status");
    const charCount = document.getElementById("char-count");

    // Character counter for message field
    messageInput.addEventListener("input", function() {
        const count = countCharacters(this.value);
        charCount.textContent = count;
        
        // Visual feedback for character count
        if (count > 1000) {
            charCount.style.color = '#e74c3c';
        } else if (count > 900) {
            charCount.style.color = '#ff9800';
        } else {
            charCount.style.color = '#999';
        }
    });

    // Auto-format phone number as user types
    phoneInput.addEventListener("input", debounce(function() {
        const formatted = formatPhoneNumber(this.value);
        this.value = formatted;
    }, 100));

    // Form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            submitForm();
        } else {
            showFormError("Please correct the errors above before submitting.");
        }
    });

    // Real-time validation on blur
    nameInput.addEventListener("blur", () => validateName());
    emailInput.addEventListener("blur", () => validateEmail());
    phoneInput.addEventListener("blur", () => validatePhone());
    subjectInput.addEventListener("blur", () => validateSubject());
    messageInput.addEventListener("blur", () => validateMessage());
    agreeTermsCheckbox.addEventListener("change", () => validateCheckbox());

    // Real-time validation on input (for immediate feedback)
    nameInput.addEventListener("input", debounce(() => {
        if (nameInput.value.length > 0) {
            validateName();
        }
    }, 500));

    emailInput.addEventListener("input", debounce(() => {
        if (emailInput.value.length > 0) {
            validateEmail();
        }
    }, 500));

    /**
     * Validate entire form
     * @returns {boolean} - True if all fields are valid
     */
    function validateForm() {
        let isValid = true;
        
        clearAllErrors();
        
        if (!validateName()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validatePhone()) isValid = false;
        if (!validateSubject()) isValid = false;
        if (!validateMessage()) isValid = false;
        if (!validateCheckbox()) isValid = false;
        
        return isValid;
    }

    /**
     * Validate name field
     * @returns {boolean} - True if valid
     */
    function validateName() {
        const value = nameInput.value.trim();
        const formGroup = nameInput.closest(".form-group");
        
        if (value === "") {
            showFieldError(formGroup, "Name is required");
            return false;
        }
        
        if (!isValidLength(value, 2, 50)) {
            showFieldError(formGroup, "Name must be between 2 and 50 characters");
            return false;
        }
        
        if (!isValidName(value)) {
            showFieldError(formGroup, "Name can only contain letters, spaces, hyphens, and apostrophes");
            return false;
        }
        
        showFieldSuccess(formGroup);
        return true;
    }

    /**
     * Validate email field
     * @returns {boolean} - True if valid
     */
    function validateEmail() {
        const value = emailInput.value.trim();
        const formGroup = emailInput.closest(".form-group");
        
        if (value === "") {
            showFieldError(formGroup, "Email is required");
            return false;
        }
        
        if (!isValidEmail(value)) {
            showFieldError(formGroup, "Please enter a valid email address");
            return false;
        }
        
        // Check for common typos and suggest correction
        const suggestion = suggestEmailCorrection(value);
        if (suggestion) {
            showFieldError(formGroup, `Did you mean: ${suggestion}?`);
            return false;
        }
        
        showFieldSuccess(formGroup);
        return true;
    }

    /**
     * Validate phone field (optional)
     * @returns {boolean} - True if valid or empty
     */
    function validatePhone() {
        const value = phoneInput.value.trim();
        const formGroup = phoneInput.closest(".form-group");
        
        // Phone is optional, so empty is valid
        if (value === "") {
            clearFieldError(formGroup);
            return true;
        }
        
        if (!isValidPhone(value)) {
            showFieldError(formGroup, "Please enter a valid 10-digit phone number");
            return false;
        }
        
        showFieldSuccess(formGroup);
        return true;
    }

    /**
     * Validate subject field
     * @returns {boolean} - True if valid
     */
    function validateSubject() {
        const value = subjectInput.value.trim();
        const formGroup = subjectInput.closest(".form-group");
        
        if (value === "") {
            showFieldError(formGroup, "Subject is required");
            return false;
        }
        
        if (!isValidLength(value, 3, 100)) {
            showFieldError(formGroup, "Subject must be between 3 and 100 characters");
            return false;
        }
        
        showFieldSuccess(formGroup);
        return true;
    }

    /**
     * Validate message field
     * @returns {boolean} - True if valid
     */
    function validateMessage() {
        const value = messageInput.value.trim();
        const formGroup = messageInput.closest(".form-group");
        
        if (value === "") {
            showFieldError(formGroup, "Message is required");
            return false;
        }
        
        if (!isValidLength(value, 10, 1000)) {
            showFieldError(formGroup, "Message must be between 10 and 1000 characters");
            return false;
        }
        
        if (!hasValidContent(value)) {
            showFieldError(formGroup, "Please enter a meaningful message");
            return false;
        }
        
        showFieldSuccess(formGroup);
        return true;
    }

    /**
     * Validate checkbox
     * @returns {boolean} - True if checked
     */
    function validateCheckbox() {
        const formGroup = agreeTermsCheckbox.closest(".form-group");
        
        if (!agreeTermsCheckbox.checked) {
            showFieldError(formGroup, "You must agree to the terms and conditions");
            return false;
        }
        
        clearFieldError(formGroup);
        return true;
    }

    /**
     * Show error for a specific field
     * @param {HTMLElement} formGroup - Form group element
     * @param {string} message - Error message
     */
    function showFieldError(formGroup, message) {
        formGroup.classList.remove("success");
        formGroup.classList.add("error");
        const errorElement = formGroup.querySelector(".error-message");
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    /**
     * Show success state for a field
     * @param {HTMLElement} formGroup - Form group element
     */
    function showFieldSuccess(formGroup) {
        formGroup.classList.remove("error");
        formGroup.classList.add("success");
        const errorElement = formGroup.querySelector(".error-message");
        if (errorElement) {
            errorElement.textContent = "";
        }
    }

    /**
     * Clear error for a specific field
     * @param {HTMLElement} formGroup - Form group element
     */
    function clearFieldError(formGroup) {
        formGroup.classList.remove("error", "success");
        const errorElement = formGroup.querySelector(".error-message");
        if (errorElement) {
            errorElement.textContent = "";
        }
    }

    /**
     * Clear all field errors
     */
    function clearAllErrors() {
        const formGroups = contactForm.querySelectorAll(".form-group");
        formGroups.forEach(group => {
            clearFieldError(group);
        });
        hideFormStatus();
    }

    /**
     * Show form-level error message
     * @param {string} message - Error message
     */
    function showFormError(message) {
        formStatus.className = "form-status error";
        formStatus.textContent = message;
        formStatus.style.display = "block";
    }

    /**
     * Show form-level success message
     * @param {string} message - Success message
     */
    function showFormSuccess(message) {
        formStatus.className = "form-status success";
        formStatus.textContent = message;
        formStatus.style.display = "block";
    }

    /**
     * Hide form status message
     */
    function hideFormStatus() {
        formStatus.style.display = "none";
    }

    /**
     * Submit the form
     */
    function submitForm() {
        const formData = {
            name: sanitizeInput(nameInput.value),
            email: sanitizeInput(emailInput.value),
            phone: phoneInput.value ? sanitizeInput(phoneInput.value) : null,
            subject: sanitizeInput(subjectInput.value),
            message: sanitizeInput(messageInput.value),
            agreeTerms: agreeTermsCheckbox.checked,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };

        // Disable submit button during submission
        submitButton.disabled = true;
        submitButton.querySelector(".btn-text").textContent = "Sending...";

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            console.log("Form submitted successfully:", formData);
            
            // Show success message
            showFormSuccess("✓ Thank you for your message! We'll get back to you within 24 hours.");
            
            // Reset form
            contactForm.reset();
            charCount.textContent = "0";
            
            // Clear all validation states
            const formGroups = contactForm.querySelectorAll(".form-group");
            formGroups.forEach(group => {
                group.classList.remove("success", "error");
            });
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.querySelector(".btn-text").textContent = "Send Message";

            // Hide success message after 8 seconds
            setTimeout(() => {
                hideFormStatus();
            }, 8000);
        }, 1500);

        // In a real application, you would send the data to a server:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            showFormSuccess("Message sent successfully!");
            contactForm.reset();
        })
        .catch(error => {
            showFormError("Failed to send message. Please try again.");
            console.error('Error:', error);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.querySelector(".btn-text").textContent = "Send Message";
        });
        */
    }
});