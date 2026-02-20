# Validation Helper Functions - Quick Reference

## 📋 Function List

### ✉️ Email Functions

#### `isValidEmail(email)`
Validates email format
```javascript
isValidEmail("user@example.com") // true
isValidEmail("invalid.email")     // false
```

#### `suggestEmailCorrection(email)`
Suggests corrections for common typos
```javascript
suggestEmailCorrection("user@gmial.com")  // "user@gmail.com"
suggestEmailCorrection("user@gmail.com")  // null
```

---

### 📞 Phone Functions

#### `isValidPhone(phone)`
Validates US phone numbers (10 or 11 digits)
```javascript
isValidPhone("1234567890")   // true
isValidPhone("12345")        // false
```

#### `formatPhoneNumber(phone)`
Auto-formats to (XXX) XXX-XXXX
```javascript
formatPhoneNumber("1234567890")   // "(123) 456-7890"
formatPhoneNumber("11234567890")  // "(123) 456-7890"
```

---

### 👤 Name & Text Functions

#### `isValidName(name)`
Validates name (letters, spaces, hyphens, apostrophes, min 2 chars)
```javascript
isValidName("John Doe")           // true
isValidName("Mary-Jane O'Brien")  // true
isValidName("J")                  // false
```

#### `isAlphaWithSpaces(text)`
Checks for letters and spaces only
```javascript
isAlphaWithSpaces("Hello World")  // true
isAlphaWithSpaces("Hello123")     // false
```

#### `isValidLength(text, min, max)`
Validates text length
```javascript
isValidLength("Hello", 3, 10)  // true
isValidLength("Hi", 3, 10)     // false
```

#### `hasValidContent(message)`
Checks for meaningful content (not just special characters)
```javascript
hasValidContent("Hello world!")  // true
hasValidContent("!!!!!!")        // false
```

---

### 🧹 Sanitization Functions

#### `sanitizeInput(input)`
Removes HTML tags and dangerous characters
```javascript
sanitizeInput("<script>alert('xss')</script>Hello")  // "Hello"
sanitizeInput("<b>Bold</b> text")                     // "Bold text"
```

#### `normalizeWhitespace(text)`
Removes extra spaces
```javascript
normalizeWhitespace("  Hello   World  ")  // "Hello World"
```

---

### 🔢 Counter Functions

#### `countCharacters(text)`
Counts total characters
```javascript
countCharacters("Hello")           // 5
countCharacters("Hello World!")    // 12
```

#### `countWords(text)`
Counts words
```javascript
countWords("Hello world")                // 2
countWords("The quick brown fox")        // 4
```

---

### ✅ Checkbox & Boolean Functions

#### `isChecked(checked)`
Validates checkbox state
```javascript
isChecked(true)   // true
isChecked(false)  // false
```

---

### 🔗 URL Functions

#### `isValidURL(url)`
Validates URL format
```javascript
isValidURL("https://example.com")  // true
isValidURL("http://test.com")      // true
isValidURL("not-a-url")            // false
```

---

### 🔐 Password Functions

#### `checkPasswordStrength(password)`
Checks password strength
```javascript
checkPasswordStrength("Pass123!")
// Returns: {
//   isValid: true,
//   strength: "medium",
//   details: {
//     minLength: true,
//     hasUpper: true,
//     hasLower: true,
//     hasNumber: true,
//     hasSpecial: true
//   }
// }
```

---

### ⏱️ Performance Functions

#### `debounce(func, wait)`
Delays function execution
```javascript
const debouncedValidation = debounce(validateEmail, 300);
emailInput.addEventListener('input', debouncedValidation);
```

---

### 📅 Date Functions

#### `formatDate(date)`
Formats date to readable string
```javascript
formatDate(new Date())  // "February 20, 2026"
```

---

## 🎯 Common Use Cases

### Validate Email on Input
```javascript
emailInput.addEventListener("blur", () => {
    const value = emailInput.value.trim();
    
    if (!isValidEmail(value)) {
        showError("Please enter a valid email");
        return;
    }
    
    const suggestion = suggestEmailCorrection(value);
    if (suggestion) {
        showError(`Did you mean: ${suggestion}?`);
        return;
    }
    
    showSuccess();
});
```

### Format Phone Number as User Types
```javascript
phoneInput.addEventListener("input", debounce(function() {
    this.value = formatPhoneNumber(this.value);
}, 100));
```

### Validate Name
```javascript
function validateName() {
    const value = nameInput.value.trim();
    
    if (value === "") {
        showError("Name is required");
        return false;
    }
    
    if (!isValidLength(value, 2, 50)) {
        showError("Name must be 2-50 characters");
        return false;
    }
    
    if (!isValidName(value)) {
        showError("Name contains invalid characters");
        return false;
    }
    
    return true;
}
```

### Character Counter
```javascript
messageInput.addEventListener("input", function() {
    const count = countCharacters(this.value);
    charCounter.textContent = `${count}/1000`;
    
    if (count > 1000) {
        charCounter.style.color = 'red';
    } else if (count > 900) {
        charCounter.style.color = 'orange';
    } else {
        charCounter.style.color = 'gray';
    }
});
```

### Sanitize Before Submission
```javascript
function submitForm() {
    const formData = {
        name: sanitizeInput(nameInput.value),
        email: sanitizeInput(emailInput.value),
        message: sanitizeInput(messageInput.value)
    };
    
    // Send to server...
}
```

### Validate Message Content
```javascript
function validateMessage() {
    const value = messageInput.value.trim();
    
    if (!isValidLength(value, 10, 1000)) {
        showError("Message must be 10-1000 characters");
        return false;
    }
    
    if (!hasValidContent(value)) {
        showError("Please enter a meaningful message");
        return false;
    }
    
    return true;
}
```

---

## 🎨 Implementation Patterns

### Pattern 1: Real-Time Validation
```javascript
// Validate after user stops typing (debounced)
inputField.addEventListener("input", debounce(() => {
    if (inputField.value.length > 0) {
        validateField(inputField);
    }
}, 500));
```

### Pattern 2: On Blur Validation
```javascript
// Validate when user leaves field
inputField.addEventListener("blur", () => {
    validateField(inputField);
});
```

### Pattern 3: Form Submission
```javascript
// Validate all fields on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (validateAllFields()) {
        submitForm();
    } else {
        showFormError("Please fix errors");
    }
});
```

### Pattern 4: Conditional Validation
```javascript
// Validate optional field only if filled
if (phoneInput.value.trim() !== "") {
    if (!isValidPhone(phoneInput.value)) {
        showError("Invalid phone number");
        return false;
    }
}
```

---

## 🚨 Error Handling

### Show Field Error
```javascript
function showFieldError(formGroup, message) {
    formGroup.classList.add("error");
    formGroup.querySelector(".error-message").textContent = message;
}
```

### Show Field Success
```javascript
function showFieldSuccess(formGroup) {
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
    formGroup.querySelector(".error-message").textContent = "";
}
```

### Clear Errors
```javascript
function clearFieldError(formGroup) {
    formGroup.classList.remove("error", "success");
    formGroup.querySelector(".error-message").textContent = "";
}
```

---

## 💡 Best Practices

1. **Always sanitize input** before sending to server
2. **Use debouncing** for real-time validation to improve performance
3. **Provide clear error messages** that tell users how to fix the issue
4. **Validate on both blur and submit** for best UX
5. **Show success states** to give positive feedback
6. **Keep validation logic consistent** across all fields
7. **Test edge cases** like empty strings, special characters, etc.
8. **Make optional fields clear** with proper labeling
9. **Use helper text** to guide users before errors occur
10. **Never trust client-side validation alone** - always validate on server

---

## 📦 Module Export

If using modules:
```javascript
// Import specific functions
import { isValidEmail, formatPhoneNumber } from './validation-helpers.js';

// Or import all
import * as Validators from './validation-helpers.js';
```

---

## 🔍 Debugging Tips

### Log validation results
```javascript
console.log('Email valid:', isValidEmail(email));
console.log('Phone valid:', isValidPhone(phone));
console.log('Name valid:', isValidName(name));
```

### Test individual functions
```javascript
// Open browser console and test
isValidEmail("test@example.com");
formatPhoneNumber("1234567890");
countWords("Hello world");
```

### Check sanitization
```javascript
const dirty = "<script>alert('xss')</script>Hello";
const clean = sanitizeInput(dirty);
console.log('Sanitized:', clean); // "Hello"
```

---

## 📚 Related Documentation

- [Form Validation Documentation](./form-validation.md) - Complete validation guide
- [Contact Form Styles](../src/css/contact.css) - CSS styling
- [Contact Form JavaScript](../src/js/contact-form.js) - Implementation

---

## 🎯 Quick Cheat Sheet

| Function | Purpose | Returns |
|----------|---------|---------|
| `isValidEmail()` | Validate email | boolean |
| `isValidPhone()` | Validate phone | boolean |
| `formatPhoneNumber()` | Format phone | string |
| `isValidName()` | Validate name | boolean |
| `sanitizeInput()` | Clean input | string |
| `isValidLength()` | Check length | boolean |
| `hasValidContent()` | Check content | boolean |
| `countCharacters()` | Count chars | number |
| `countWords()` | Count words | number |
| `debounce()` | Delay execution | function |
| `suggestEmailCorrection()` | Email suggestions | string/null |

---

**All helper functions are available in:** `src/js/validation-helpers.js`
