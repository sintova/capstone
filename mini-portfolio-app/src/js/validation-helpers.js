// Validation Helper Functions
// This file contains reusable validation and formatting functions

/**
 * Email Validation
 * Validates email format using RFC 5322 compliant regex
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // More strict regex option:
    // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email.trim());
}

/**
 * Phone Number Validation
 * Validates US phone number in various formats
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
function isValidPhone(phone) {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Valid if 10 or 11 digits (with country code)
    if (digitsOnly.length === 10 || (digitsOnly.length === 11 && digitsOnly[0] === '1')) {
        return true;
    }
    
    return false;
}

/**
 * Format Phone Number
 * Formats phone number to (XXX) XXX-XXXX format
 * @param {string} phone - Phone number to format
 * @returns {string} - Formatted phone number
 */
function formatPhoneNumber(phone) {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Extract parts based on length
    let formatted = '';
    
    if (digitsOnly.length === 0) {
        return '';
    }
    
    if (digitsOnly.length <= 3) {
        formatted = `(${digitsOnly}`;
    } else if (digitsOnly.length <= 6) {
        formatted = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
    } else if (digitsOnly.length <= 10) {
        formatted = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
    } else {
        // Handle 11 digits (with country code)
        formatted = `(${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 11)}`;
    }
    
    return formatted;
}

/**
 * Name Validation
 * Validates name contains only letters, spaces, hyphens, and apostrophes
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid name format
 */
function isValidName(name) {
    const regex = /^[a-zA-Z\s'-]+$/;
    const trimmedName = name.trim();
    
    // Check format and minimum length
    return regex.test(trimmedName) && trimmedName.length >= 2;
}

/**
 * Sanitize Input
 * Removes potentially harmful characters from user input
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
function sanitizeInput(input) {
    // Remove HTML tags and scripts
    return input
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/[<>]/g, '') // Remove angle brackets
        .trim();
}

/**
 * Validate Text Length
 * Checks if text is within min and max length
 * @param {string} text - Text to validate
 * @param {number} min - Minimum length
 * @param {number} max - Maximum length
 * @returns {boolean} - True if within range
 */
function isValidLength(text, min, max) {
    const length = text.trim().length;
    return length >= min && length <= max;
}

/**
 * Contains Only Letters and Spaces
 * Validates string contains only alphabetic characters and spaces
 * @param {string} text - Text to validate
 * @returns {boolean} - True if only letters and spaces
 */
function isAlphaWithSpaces(text) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(text);
}

/**
 * URL Validation
 * Validates URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid URL
 */
function isValidURL(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
        return false;
    }
}

/**
 * Password Strength Checker
 * Checks password strength (min 8 chars, uppercase, lowercase, number, special char)
 * @param {string} password - Password to check
 * @returns {object} - Object with isValid and strength properties
 */
function checkPasswordStrength(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strength = [minLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    
    let level = 'weak';
    if (strength >= 5) level = 'strong';
    else if (strength >= 3) level = 'medium';
    
    return {
        isValid: strength >= 3,
        strength: level,
        details: {
            minLength,
            hasUpper,
            hasLower,
            hasNumber,
            hasSpecial
        }
    };
}

/**
 * Validate Checkbox
 * Validates that checkbox is checked
 * @param {boolean} checked - Checkbox state
 * @returns {boolean} - True if checked
 */
function isChecked(checked) {
    return checked === true;
}

/**
 * Trim and Normalize Whitespace
 * Removes extra whitespace from string
 * @param {string} text - Text to normalize
 * @returns {string} - Normalized text
 */
function normalizeWhitespace(text) {
    return text.trim().replace(/\s+/g, ' ');
}

/**
 * Format Date
 * Formats date to readable string
 * @param {Date} date - Date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Validate Message Content
 * Checks if message contains actual content (not just special characters)
 * @param {string} message - Message to validate
 * @returns {boolean} - True if contains meaningful content
 */
function hasValidContent(message) {
    // Remove special characters and check if remaining text is substantial
    const contentOnly = message.replace(/[^a-zA-Z0-9\s]/g, '');
    return contentOnly.trim().length >= 5;
}

/**
 * Character Counter
 * Counts characters in text
 * @param {string} text - Text to count
 * @returns {number} - Character count
 */
function countCharacters(text) {
    return text.length;
}

/**
 * Word Counter
 * Counts words in text
 * @param {string} text - Text to count words in
 * @returns {number} - Word count
 */
function countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Debounce Function
 * Limits function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Real-time Email Suggestions
 * Suggests common email domain corrections
 * @param {string} email - Email to check
 * @returns {string|null} - Suggested email or null
 */
function suggestEmailCorrection(email) {
    const commonDomains = [
        'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
        'icloud.com', 'aol.com', 'mail.com'
    ];
    
    const typos = {
        'gmial.com': 'gmail.com',
        'gmai.com': 'gmail.com',
        'yahooo.com': 'yahoo.com',
        'yaho.com': 'yahoo.com',
        'hotmial.com': 'hotmail.com',
        'outlok.com': 'outlook.com'
    };
    
    const parts = email.split('@');
    if (parts.length !== 2) return null;
    
    const domain = parts[1].toLowerCase();
    
    // Check for common typos
    if (typos[domain]) {
        return `${parts[0]}@${typos[domain]}`;
    }
    
    return null;
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        isValidPhone,
        formatPhoneNumber,
        isValidName,
        sanitizeInput,
        isValidLength,
        isAlphaWithSpaces,
        isValidURL,
        checkPasswordStrength,
        isChecked,
        normalizeWhitespace,
        formatDate,
        hasValidContent,
        countCharacters,
        countWords,
        debounce,
        suggestEmailCorrection
    };
}
