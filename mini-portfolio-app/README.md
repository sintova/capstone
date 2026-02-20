# Mini Portfolio App

## Overview

The Mini Portfolio App is a **responsive single-page application** designed to showcase personal projects and provide information about the creator. Built with modern web technologies, it features smooth navigation, JSON-driven content, and a fully functional contact form.

## ✨ Features

- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🧭 **Fixed Navigation** - Smooth scrolling with active link highlighting
- 👤 **About Me Section** - Personal introduction with animated skill tags
- 💼 **Project Gallery** - JSON-driven project showcase with placeholder images
- 📧 **Enhanced Contact Form** - 6 fields with comprehensive validation
- ✅ **Input Validation** - 18+ helper functions for data validation
- 🔧 **Auto-Formatting** - Phone numbers format as you type
- 🎯 **Smart Suggestions** - Email typo detection and corrections
- 📊 **Character Counter** - Real-time feedback for message field
- ♿ **Accessible** - ARIA labels and keyboard navigation support
- 🎭 **Smooth Animations** - Scroll effects and hover transitions
- 🔒 **Security** - Input sanitization and XSS protection

## 🚀 Technologies Used

- **HTML5** - Semantic structure with accessibility features
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Dynamic functionality and DOM manipulation
- **JSON** - Structured data for project content

## 📁 Project Structure

The project is organized into the following directories and files:

```
mini-portfolio-app/
├── docs/                           # Documentation files
│   ├── portfolio-setup.md          # Overview and setup instructions
│   ├── html-structure.md           # HTML structure details
│   ├── css-styling.md              # CSS styling guidelines
│   ├── javascript-functionality.md # JavaScript functionality instructions
│   ├── json-data.md                # JSON data structure for projects
│   ├── navigation-structure.md     # Navigation system documentation
│   ├── navigation-flow-diagram.md  # Visual navigation diagrams
│   ├── json-data-structure.md      # Comprehensive JSON guide
│   ├── form-validation.md          # Contact form validation guide
│   ├── validation-helpers-quick-reference.md # Helper functions reference
│   └── validation-test-suite.md    # Testing guide for validation
├── src/                            # Source files for the application
│   ├── index.html                  # Main HTML file
│   ├── css/                        # CSS files for styling
│   │   ├── styles.css              # Global styles
│   │   ├── navigation.css          # Navigation bar styles
│   │   ├── about.css               # About section styles
│   │   ├── gallery.css             # Project gallery styles
│   │   └── contact.css             # Contact form styles
│   ├── js/                         # JavaScript files for functionality
│   │   ├── main.js                 # Main app initialization
│   │   ├── navigation.js           # Navigation functionality
│   │   ├── gallery.js              # Project gallery loader
│   │   ├── validation-helpers.js   # 18+ validation helper functions
│   │   └── contact-form.js         # Form validation and submission
│   └── data/                       # JSON data files
│       └── projects.json           # Project data (6 sample projects)
├── assets/                         # Directory for images and other assets
│   └── images/                     # Images used in the project
├── README.md                       # Project documentation
├── IMPLEMENTATION_SUMMARY.md       # Complete implementation summary
└── FORM_VALIDATION_SUMMARY.md      # Validation features summary
```

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mini-portfolio-app
```

### 2. Open the Project
Use your preferred code editor to open the project folder.

### 3. Run the Application

**Option A: Using Python (Recommended)**
```bash
cd src
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Option B: Using Node.js**
```bash
cd src
npx http-server -p 8000
```

**Option C: Direct Browser Access**
Open `src/index.html` directly in your web browser (some features may require a server).

### 4. View the Application
Navigate to `http://localhost:8000` in your web browser to view the live application.

## 📝 Navigation Structure

The navigation bar includes:

- **👤 About Me** - Personal introduction and skills
- **💼 Projects** - Interactive project gallery
- **📧 Contact** - Contact form with validation

### Features:
- Fixed position with smooth scrolling
- Active link highlighting based on scroll position
- Responsive hamburger menu for mobile devices
- Accessibility support with ARIA attributes

For detailed documentation, see: [docs/navigation-structure.md](docs/navigation-structure.md)

## 📊 JSON Data Structure

Projects are loaded from `src/data/projects.json`:

```json
{
  "meta": {
    "version": "1.0",
    "lastUpdated": "2026-02-20",
    "totalProjects": 6
  },
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "description": "Full-featured e-commerce platform...",
      "image": "https://via.placeholder.com/400x300/...",
      "link": "https://github.com/example/project",
      "technologies": ["HTML5", "CSS3", "JavaScript"],
      "category": "Web Development",
      "date": "2026-01-15",
      "status": "completed"
    }
  ]
}
```

### Sample Projects Included:
1. **E-Commerce Platform** - Full-featured shopping platform
2. **Weather Dashboard** - Real-time weather tracking
3. **Task Management App** - Collaborative task manager
4. **Portfolio Website** - Responsive portfolio design
5. **Blog Platform** - Modern blogging system
6. **Recipe Finder** - Interactive recipe search

For detailed JSON documentation, see: [docs/json-data-structure.md](docs/json-data-structure.md)

## 📧 Enhanced Contact Form

The contact form includes **6 fields** with comprehensive validation:

### Form Fields:
1. **Full Name** (Required)
   - Min 2, max 50 characters
   - Letters, spaces, hyphens, apostrophes only
   
2. **Email Address** (Required)
   - Valid email format validation
   - Common typo detection (gmial.com → gmail.com)
   - Auto-suggestions for corrections

3. **Phone Number** (Optional)
   - Auto-formatting to (XXX) XXX-XXXX
   - 10 or 11 digit validation
   - Real-time formatting as you type

4. **Subject** (Required)
   - Min 3, max 100 characters
   - Brief project inquiry topic

5. **Message** (Required)
   - Min 10, max 1000 characters
   - Real-time character counter
   - Content validation (meaningful text)
   - Color-coded feedback (green/orange/red)

6. **Terms & Conditions** (Required)
   - Checkbox agreement

### Validation Features:
- ✅ 18+ helper functions for validation
- ✅ Real-time validation with debouncing
- ✅ Email typo detection and suggestions
- ✅ Phone number auto-formatting
- ✅ Character counter with visual feedback
- ✅ Input sanitization (XSS protection)
- ✅ Clear error messages
- ✅ Success/error state indicators
- ✅ Comprehensive documentation

For complete validation documentation, see:
- [Form Validation Guide](docs/form-validation.md)
- [Helper Functions Reference](docs/validation-helpers-quick-reference.md)
- [Test Suite](docs/validation-test-suite.md)

## 🎯 Helper Functions

The application includes 18+ validation helper functions:

**Email:** `isValidEmail()`, `suggestEmailCorrection()`  
**Phone:** `isValidPhone()`, `formatPhoneNumber()`  
**Text:** `isValidName()`, `isValidLength()`, `hasValidContent()`  
**Sanitization:** `sanitizeInput()`, `normalizeWhitespace()`  
**Counters:** `countCharacters()`, `countWords()`  
**Utilities:** `debounce()`, `isChecked()`, `isValidURL()`  
**And more...**

All functions are documented with examples in [validation-helpers-quick-reference.md](docs/validation-helpers-quick-reference.md)

6. **Add Functionality**: Implement additional JavaScript functionality as needed in the files located in `src/js/`.

## Features

- Responsive design that adapts to various screen sizes.
- Smooth navigation between sections.
- Dynamic project gallery populated from a JSON file.
- User-friendly contact form with validation.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the project's coding standards and documentation practices.

## License

This project is open-source and available under the MIT License.