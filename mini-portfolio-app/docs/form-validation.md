# Contact Form Validation Documentation

## Overview
The contact form includes comprehensive input validation with real-time feedback, helper functions for formatting, and user-friendly error messages.

## Form Fields

### 1. **Full Name** (Required)
- **Validation Rules:**
  - Required field
  - Minimum 2 characters
  - Maximum 50 characters
  - Only letters, spaces, hyphens, and apostrophes allowed
  - Automatically trimmed of whitespace

- **Error Messages:**
  - "Name is required"
  - "Name must be between 2 and 50 characters"
  - "Name can only contain letters, spaces, hyphens, and apostrophes"

### 2. **Email Address** (Required)
- **Validation Rules:**
  - Required field
  - Valid email format (RFC 5322 compliant)
  - Common typo detection and suggestions
  - Automatically trimmed and sanitized

- **Error Messages:**
  - "Email is required"
  - "Please enter a valid email address"
  - "Did you mean: [suggestion]?" (for common typos)

- **Typo Detection:**
  - gmial.com → gmail.com
  - gmai.com → gmail.com
  - yahooo.com → yahoo.com
  - hotmial.com → hotmail.com
  - outlok.com → outlook.com

### 3. **Phone Number** (Optional)
- **Validation Rules:**
  - Optional field
  - 10 or 11 digits (with country code)
  - Auto-formatting to (XXX) XXX-XXXX
  - Real-time formatting as user types

- **Error Messages:**
  - "Please enter a valid 10-digit phone number"

- **Auto-Formatting:**
  - Input: 1234567890
  - Output: (123) 456-7890

### 4. **Subject** (Required)
- **Validation Rules:**
  - Required field
  - Minimum 3 characters
  - Maximum 100 characters
  - Trimmed of whitespace

- **Error Messages:**
  - "Subject is required"
  - "Subject must be between 3 and 100 characters"

### 5. **Message** (Required)
- **Validation Rules:**
  - Required field
  - Minimum 10 characters
  - Maximum 1000 characters
  - Must contain meaningful content (not just special characters)
  - Real-time character counter
  - Visual feedback at 900+ characters

- **Error Messages:**
  - "Message is required"
  - "Message must be between 10 and 1000 characters"
  - "Please enter a meaningful message"

- **Character Counter:**
  - Green: 0-900 characters
  - Orange: 901-999 characters
  - Red: 1000+ characters (exceeds limit)

### 6. **Terms & Conditions** (Required)
- **Validation Rules:**
  - Must be checked
  - Required for form submission

- **Error Messages:**
  - "You must agree to the terms and conditions"

---

## Validation Helper Functions

### Email Validation
```javascript
isValidEmail(email)
```
- Validates email format using regex
- Returns: boolean
- Example:
  ```javascript
  isValidEmail("user@example.com") // true
  isValidEmail("invalid.email") // false
  ```

### Phone Validation
```javascript
isValidPhone(phone)
```
- Validates US phone numbers
- Accepts 10 or 11 digits
- Returns: boolean
- Example:
  ```javascript
  isValidPhone("1234567890") // true
  isValidPhone("12345") // false
  ```

### Phone Formatting
```javascript
formatPhoneNumber(phone)
```
- Formats phone to (XXX) XXX-XXXX
- Returns: string
- Example:
  ```javascript
  formatPhoneNumber("1234567890") // "(123) 456-7890"
  formatPhoneNumber("11234567890") // "(123) 456-7890"
  ```

### Name Validation
```javascript
isValidName(name)
```
- Validates name format
- Allows letters, spaces, hyphens, apostrophes
- Minimum 2 characters
- Returns: boolean
- Example:
  ```javascript
  isValidName("John Doe") // true
  isValidName("John-Paul O'Brien") // true
  isValidName("123") // false
  ```

### Input Sanitization
```javascript
sanitizeInput(input)
```
- Removes HTML tags and scripts
- Prevents XSS attacks
- Returns: string
- Example:
  ```javascript
  sanitizeInput("<script>alert('xss')</script>Hello") // "Hello"
  ```

### Length Validation
```javascript
isValidLength(text, min, max)
```
- Validates text length
- Returns: boolean
- Example:
  ```javascript
  isValidLength("Hello", 3, 10) // true
  isValidLength("Hi", 3, 10) // false
  ```

### Content Validation
```javascript
hasValidContent(message)
```
- Checks for meaningful content
- Ignores special characters only
- Returns: boolean
- Example:
  ```javascript
  hasValidContent("Hello world!") // true
  hasValidContent("!!!!!!") // false
  ```

### Character Counter
```javascript
countCharacters(text)
```
- Counts total characters
- Returns: number
- Example:
  ```javascript
  countCharacters("Hello") // 5
  ```

### Word Counter
```javascript
countWords(text)
```
- Counts words in text
- Returns: number
- Example:
  ```javascript
  countWords("Hello world") // 2
  ```

### Debounce Function
```javascript
debounce(func, wait)
```
- Limits function execution rate
- Improves performance
- Returns: function
- Example:
  ```javascript
  const debouncedValidation = debounce(validateEmail, 300);
  ```

### Email Suggestion
```javascript
suggestEmailCorrection(email)
```
- Suggests corrections for common typos
- Returns: string or null
- Example:
  ```javascript
  suggestEmailCorrection("user@gmial.com") // "user@gmail.com"
  suggestEmailCorrection("user@gmail.com") // null
  ```

### Whitespace Normalization
```javascript
normalizeWhitespace(text)
```
- Removes extra spaces
- Trims leading/trailing whitespace
- Returns: string
- Example:
  ```javascript
  normalizeWhitespace("  Hello   World  ") // "Hello World"
  ```

### URL Validation
```javascript
isValidURL(url)
```
- Validates URL format
- Checks for http/https protocol
- Returns: boolean
- Example:
  ```javascript
  isValidURL("https://example.com") // true
  isValidURL("not-a-url") // false
  ```

### Checkbox Validation
```javascript
isChecked(checked)
```
- Validates checkbox state
- Returns: boolean
- Example:
  ```javascript
  isChecked(true) // true
  isChecked(false) // false
  ```

---

## Validation Flow

### 1. **Real-Time Validation (On Input)**
```
User types → Debounced (500ms) → Validate field → Show feedback
```

### 2. **Blur Validation (On Field Exit)**
```
User leaves field → Validate immediately → Show error/success
```

### 3. **Form Submission Validation**
```
User clicks submit → Validate all fields → Show errors or submit
```

---

## Visual Feedback

### Success State
- Green border color (#28a745)
- No error message displayed
- Helper text remains visible

### Error State
- Red border color (#e74c3c)
- Red background tint (#fff5f5)
- Error message displayed in red
- Helper text hidden

### Default State
- Gray border (#e0e0e0)
- Light gray background (#f8f9fa)
- Helper text in gray (#999)

---

## Form Submission Process

### Step 1: Validation
```javascript
1. Clear all previous errors
2. Validate each field individually
3. Collect validation results
4. If any field fails, show errors and prevent submission
```

### Step 2: Data Collection
```javascript
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
```

### Step 3: Submission
```javascript
1. Disable submit button
2. Show "Sending..." text
3. Send data to server (or simulate)
4. Show success/error message
5. Reset form on success
6. Re-enable submit button
```

---

## Error Messages

### Field-Level Errors
- Displayed directly below the input field
- Red text with exclamation icon
- Specific to the validation failure

### Form-Level Errors
- Displayed at bottom of form
- Red background with border
- General message: "Please correct the errors above before submitting."

### Success Messages
- Displayed at bottom of form
- Green background with checkmark
- Message: "✓ Thank you for your message! We'll get back to you within 24 hours."

---

## Accessibility Features

### ARIA Attributes
- Labels properly associated with inputs
- Error messages linked to inputs
- Required fields marked with *
- Form has novalidate attribute (custom validation)

### Keyboard Navigation
- All fields are keyboard accessible
- Tab order is logical
- Enter key submits form
- Focus states are clearly visible

### Screen Reader Support
- Error messages announced to screen readers
- Success states communicated
- Helper text provides context

---

## Performance Optimization

### Debouncing
- Input validation debounced by 500ms
- Phone formatting debounced by 100ms
- Reduces unnecessary validation calls

### Efficient DOM Updates
- Minimal reflows and repaints
- Batch DOM updates where possible
- Use CSS classes for state changes

---

## Security Features

### Input Sanitization
- All inputs sanitized before submission
- HTML tags removed
- Script tags prevented
- XSS protection

### Data Validation
- Server-side validation required (client-side is not enough)
- Never trust client input
- Always sanitize on backend

---

## Testing Checklist

### Required Fields
- [x] Name validation
- [x] Email validation
- [x] Subject validation
- [x] Message validation
- [x] Terms checkbox validation

### Optional Fields
- [x] Phone validation (when provided)
- [x] Phone auto-formatting

### Edge Cases
- [x] Empty fields
- [x] Whitespace-only input
- [x] Special characters
- [x] Maximum length exceeded
- [x] Email typo detection
- [x] Checkbox state

### User Experience
- [x] Real-time feedback
- [x] Clear error messages
- [x] Success confirmation
- [x] Character counter
- [x] Auto-formatting
- [x] Form reset after submission

---

## Integration Example

### HTML Structure
```html
<div class="form-group">
    <label for="email">Email Address *</label>
    <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="john.doe@example.com" 
        required>
    <span class="error-message"></span>
    <span class="helper-text">We'll never share your email</span>
</div>
```

### JavaScript Validation
```javascript
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
    
    showFieldSuccess(formGroup);
    return true;
}
```

---

## Future Enhancements

- [ ] reCAPTCHA integration
- [ ] File upload support
- [ ] Multi-step form
- [ ] Save draft functionality
- [ ] Email verification
- [ ] SMS verification for phone
- [ ] Internationalization (i18n)
- [ ] Multiple language support
- [ ] Custom validation rules via attributes
- [ ] Async email availability check

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ⚠️ IE11 (requires polyfills)

---

This comprehensive validation system ensures data quality, enhances user experience, and maintains security standards.
