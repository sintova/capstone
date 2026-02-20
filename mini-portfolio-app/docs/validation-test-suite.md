# Validation Helper Functions - Test Suite

## Manual Testing Guide

This guide helps you test all validation functions manually in the browser console.

### Setup
1. Open the portfolio application in your browser
2. Navigate to the Contact section
3. Open Developer Tools (F12)
4. Go to Console tab

---

## Test Cases

### 1. Email Validation Tests

```javascript
// Test: Valid emails
console.group('Email Validation - Valid');
console.log(isValidEmail("user@example.com")); // Expected: true
console.log(isValidEmail("john.doe@company.co.uk")); // Expected: true
console.log(isValidEmail("test+tag@gmail.com")); // Expected: true
console.groupEnd();

// Test: Invalid emails
console.group('Email Validation - Invalid');
console.log(isValidEmail("notanemail")); // Expected: false
console.log(isValidEmail("@example.com")); // Expected: false
console.log(isValidEmail("user@")); // Expected: false
console.log(isValidEmail("user @example.com")); // Expected: false
console.groupEnd();

// Test: Email suggestions
console.group('Email Suggestions');
console.log(suggestEmailCorrection("user@gmial.com")); // Expected: "user@gmail.com"
console.log(suggestEmailCorrection("user@gmai.com")); // Expected: "user@gmail.com"
console.log(suggestEmailCorrection("user@yahooo.com")); // Expected: "user@yahoo.com"
console.log(suggestEmailCorrection("user@gmail.com")); // Expected: null
console.groupEnd();
```

**Expected Results:**
- Valid emails return `true`
- Invalid emails return `false`
- Common typos return suggestions
- Correct domains return `null`

---

### 2. Phone Validation Tests

```javascript
// Test: Valid phone numbers
console.group('Phone Validation - Valid');
console.log(isValidPhone("1234567890")); // Expected: true
console.log(isValidPhone("11234567890")); // Expected: true
console.log(isValidPhone("(123) 456-7890")); // Expected: true
console.log(isValidPhone("123-456-7890")); // Expected: true
console.groupEnd();

// Test: Invalid phone numbers
console.group('Phone Validation - Invalid');
console.log(isValidPhone("123")); // Expected: false
console.log(isValidPhone("abcdefghij")); // Expected: false
console.log(isValidPhone("123456789")); // Expected: false (9 digits)
console.groupEnd();

// Test: Phone formatting
console.group('Phone Formatting');
console.log(formatPhoneNumber("1234567890")); // Expected: "(123) 456-7890"
console.log(formatPhoneNumber("11234567890")); // Expected: "(123) 456-7890"
console.log(formatPhoneNumber("123")); // Expected: "(123"
console.log(formatPhoneNumber("1234567")); // Expected: "(123) 456-7"
console.groupEnd();
```

**Expected Results:**
- 10 or 11 digit numbers are valid
- Formatted numbers are valid
- Short numbers are invalid
- Format function returns (XXX) XXX-XXXX pattern

---

### 3. Name Validation Tests

```javascript
// Test: Valid names
console.group('Name Validation - Valid');
console.log(isValidName("John Doe")); // Expected: true
console.log(isValidName("Mary-Jane O'Brien")); // Expected: true
console.log(isValidName("José García")); // Expected: true
console.log(isValidName("Anne-Marie")); // Expected: true
console.groupEnd();

// Test: Invalid names
console.group('Name Validation - Invalid');
console.log(isValidName("J")); // Expected: false (too short)
console.log(isValidName("John123")); // Expected: false (numbers)
console.log(isValidName("John@Doe")); // Expected: false (special char)
console.log(isValidName("")); // Expected: false (empty)
console.groupEnd();
```

**Expected Results:**
- Names with letters, spaces, hyphens, apostrophes are valid
- Minimum 2 characters required
- Numbers and special characters are invalid

---

### 4. Length Validation Tests

```javascript
// Test: Length validation
console.group('Length Validation');
console.log(isValidLength("Hello", 3, 10)); // Expected: true
console.log(isValidLength("Hi", 3, 10)); // Expected: false (too short)
console.log(isValidLength("This is too long", 3, 10)); // Expected: false (too long)
console.log(isValidLength("Perfect", 3, 10)); // Expected: true
console.groupEnd();
```

**Expected Results:**
- Text within min-max range returns `true`
- Too short or too long returns `false`

---

### 5. Content Validation Tests

```javascript
// Test: Content validation
console.group('Content Validation');
console.log(hasValidContent("Hello world!")); // Expected: true
console.log(hasValidContent("This is a valid message")); // Expected: true
console.log(hasValidContent("!!!!!!")); // Expected: false (only special chars)
console.log(hasValidContent("   ")); // Expected: false (only whitespace)
console.log(hasValidContent("Hi!")); // Expected: false (too little content)
console.groupEnd();
```

**Expected Results:**
- Meaningful text returns `true`
- Only special characters or whitespace returns `false`
- Minimum 5 characters of content required

---

### 6. Sanitization Tests

```javascript
// Test: Input sanitization
console.group('Input Sanitization');
console.log(sanitizeInput("<script>alert('xss')</script>Hello")); 
// Expected: "Hello"

console.log(sanitizeInput("<b>Bold</b> text")); 
// Expected: "Bold text"

console.log(sanitizeInput("Normal text")); 
// Expected: "Normal text"

console.log(sanitizeInput("  Trimmed  ")); 
// Expected: "Trimmed"
console.groupEnd();
```

**Expected Results:**
- HTML tags are removed
- Scripts are blocked
- Text is trimmed
- Safe text passes through unchanged

---

### 7. Counter Tests

```javascript
// Test: Character counter
console.group('Character Counter');
console.log(countCharacters("Hello")); // Expected: 5
console.log(countCharacters("Hello World!")); // Expected: 12
console.log(countCharacters("")); // Expected: 0
console.groupEnd();

// Test: Word counter
console.group('Word Counter');
console.log(countWords("Hello world")); // Expected: 2
console.log(countWords("The quick brown fox")); // Expected: 4
console.log(countWords("")); // Expected: 0
console.log(countWords("   Multiple   spaces   ")); // Expected: 2
console.groupEnd();
```

**Expected Results:**
- Character count includes all characters
- Word count splits on whitespace
- Empty strings return 0

---

### 8. Whitespace Normalization Tests

```javascript
// Test: Whitespace normalization
console.group('Whitespace Normalization');
console.log(normalizeWhitespace("  Hello   World  ")); 
// Expected: "Hello World"

console.log(normalizeWhitespace("Multiple   spaces")); 
// Expected: "Multiple spaces"

console.log(normalizeWhitespace("   ")); 
// Expected: ""
console.groupEnd();
```

**Expected Results:**
- Extra spaces are removed
- Leading/trailing whitespace trimmed
- Single space between words

---

### 9. URL Validation Tests

```javascript
// Test: URL validation
console.group('URL Validation');
console.log(isValidURL("https://example.com")); // Expected: true
console.log(isValidURL("http://test.com")); // Expected: true
console.log(isValidURL("ftp://files.com")); // Expected: false (ftp not allowed)
console.log(isValidURL("not-a-url")); // Expected: false
console.groupEnd();
```

**Expected Results:**
- Valid http/https URLs return `true`
- Other protocols return `false`
- Invalid URLs return `false`

---

### 10. Checkbox Validation Tests

```javascript
// Test: Checkbox validation
console.group('Checkbox Validation');
console.log(isChecked(true)); // Expected: true
console.log(isChecked(false)); // Expected: false
console.groupEnd();
```

**Expected Results:**
- Checked state (true) returns `true`
- Unchecked state (false) returns `false`

---

## Integration Tests

### Test Complete Form Validation

```javascript
// Simulate form data
const testFormData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    subject: "Project Inquiry",
    message: "I would like to discuss a potential project with your team.",
    terms: true
};

// Validate all fields
console.group('Form Validation Test');
console.log('Name:', isValidName(testFormData.name));
console.log('Email:', isValidEmail(testFormData.email));
console.log('Phone:', isValidPhone(testFormData.phone));
console.log('Subject:', isValidLength(testFormData.subject, 3, 100));
console.log('Message:', hasValidContent(testFormData.message));
console.log('Terms:', isChecked(testFormData.terms));
console.groupEnd();
```

**Expected Result:** All return `true`

---

## Visual Testing Checklist

Open the Contact form and test:

### Field Validation
- [ ] Click on Name field and leave empty → See error
- [ ] Enter "J" in Name → See "too short" error
- [ ] Enter "John123" in Name → See "invalid characters" error
- [ ] Enter "John Doe" → See success (green border)

### Email Testing
- [ ] Enter "notanemail" → See "invalid format" error
- [ ] Enter "user@gmial.com" → See "Did you mean gmail.com?" suggestion
- [ ] Enter "user@gmail.com" → See success (green border)

### Phone Testing
- [ ] Type "1234567890" → Watch auto-format to "(123) 456-7890"
- [ ] Enter "123" → See "invalid phone" error
- [ ] Leave empty → No error (optional field)

### Subject Testing
- [ ] Enter "Hi" → See "too short" error
- [ ] Enter "Project Inquiry" → See success

### Message Testing
- [ ] Type characters → Watch counter update
- [ ] Type 900+ characters → Counter turns orange
- [ ] Type 1000+ characters → Counter turns red
- [ ] Enter "!!!" only → See "meaningful message" error
- [ ] Enter valid message → See success

### Checkbox Testing
- [ ] Try to submit without checking → See error
- [ ] Check the box → Error disappears

### Form Submission
- [ ] Fill all fields correctly → Click Submit
- [ ] See "Sending..." text
- [ ] See success message
- [ ] Form resets automatically
- [ ] Counter resets to 0

---

## Performance Testing

### Test Debouncing

```javascript
// Open console and monitor
let callCount = 0;
const testDebounce = debounce(() => {
    callCount++;
    console.log('Called:', callCount);
}, 300);

// Call rapidly
for (let i = 0; i < 10; i++) {
    testDebounce();
}

// Expected: Only 1 call after 300ms
```

**Expected Result:** Function only executes once despite 10 rapid calls

---

## Error Scenarios

### Test Edge Cases

```javascript
console.group('Edge Cases');

// Empty strings
console.log('Empty name:', isValidName(""));
console.log('Empty email:', isValidEmail(""));

// Whitespace only
console.log('Spaces only name:', isValidName("   "));
console.log('Spaces only message:', hasValidContent("   "));

// Special characters
console.log('Special chars in name:', isValidName("John@#$Doe"));
console.log('HTML in message:', sanitizeInput("<script>alert()</script>"));

// Boundary cases
console.log('Min length name:', isValidName("Jo")); // 2 chars
console.log('Max length message:', isValidLength("a".repeat(1000), 10, 1000));

console.groupEnd();
```

---

## Automated Test Script

Run all tests at once:

```javascript
function runAllTests() {
    const tests = [
        // Email tests
        { name: 'Valid Email', func: () => isValidEmail("test@example.com"), expected: true },
        { name: 'Invalid Email', func: () => isValidEmail("notanemail"), expected: false },
        
        // Phone tests
        { name: 'Valid Phone', func: () => isValidPhone("1234567890"), expected: true },
        { name: 'Invalid Phone', func: () => isValidPhone("123"), expected: false },
        
        // Name tests
        { name: 'Valid Name', func: () => isValidName("John Doe"), expected: true },
        { name: 'Invalid Name', func: () => isValidName("J"), expected: false },
        
        // Length tests
        { name: 'Valid Length', func: () => isValidLength("Hello", 3, 10), expected: true },
        { name: 'Invalid Length', func: () => isValidLength("Hi", 3, 10), expected: false },
    ];
    
    console.group('Test Results');
    let passed = 0;
    let failed = 0;
    
    tests.forEach(test => {
        const result = test.func();
        const status = result === test.expected ? '✅ PASS' : '❌ FAIL';
        console.log(`${status} - ${test.name}: ${result} (expected: ${test.expected})`);
        
        if (result === test.expected) passed++;
        else failed++;
    });
    
    console.log(`\nTotal: ${tests.length} tests`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.groupEnd();
}

// Run the tests
runAllTests();
```

**Expected Output:** All tests should pass (✅)

---

## Troubleshooting

### If tests fail:

1. **Check if validation-helpers.js is loaded:**
   ```javascript
   typeof isValidEmail === 'function' // Should be true
   ```

2. **Check for console errors:**
   - Look for red error messages
   - Check network tab for failed script loads

3. **Verify function availability:**
   ```javascript
   console.log(window); // Check for global functions
   ```

4. **Test individual functions:**
   - Start with simple tests
   - Isolate failing functionality
   - Check function parameters

---

## Success Criteria

All tests should:
- ✅ Execute without errors
- ✅ Return expected values
- ✅ Handle edge cases properly
- ✅ Show visual feedback in UI
- ✅ Perform well (debounced)

---

**Happy Testing! 🧪**

For questions or issues, refer to:
- [Form Validation Documentation](./form-validation.md)
- [Helper Functions Reference](./validation-helpers-quick-reference.md)
