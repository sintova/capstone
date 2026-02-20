# JSON Data Structure Documentation

## Overview
The project gallery is powered by a structured JSON file (`projects.json`) that contains all project information. This approach allows for easy content management without modifying the HTML or JavaScript code.

## File Location
```
src/data/projects.json
```

## JSON Schema

### Root Object
```json
{
  "meta": { },      // Metadata about the JSON file
  "projects": [ ]   // Array of project objects
}
```

### Meta Object
Contains metadata about the project collection:

```json
{
  "version": "1.0",
  "lastUpdated": "2026-02-20",
  "totalProjects": 6
}
```

**Fields:**
- `version` (string): Version number of the data structure
- `lastUpdated` (string): ISO date of last update
- `totalProjects` (number): Total count of projects

### Project Object
Each project in the array has the following structure:

```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description...",
  "image": "URL or path to image",
  "link": "URL to project",
  "technologies": ["Tech1", "Tech2"],
  "category": "Category Name",
  "date": "2026-01-15",
  "status": "completed"
}
```

**Required Fields:**
- `id` (number): Unique identifier for the project
- `title` (string): Project name/title
- `description` (string): Detailed project description
- `image` (string): URL or path to project image
- `link` (string): URL to live project or repository

**Optional Fields:**
- `technologies` (array): List of technologies used
- `category` (string): Project category/type
- `date` (string): Project completion date (ISO format)
- `status` (string): Project status (completed, in-progress, planned)

## Sample Projects

### 1. E-Commerce Platform
```json
{
  "id": 1,
  "title": "E-Commerce Platform",
  "description": "A full-featured e-commerce platform built with modern web technologies. Includes shopping cart, payment integration, and user authentication.",
  "image": "https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce+Platform",
  "link": "https://github.com/example/ecommerce-platform",
  "technologies": ["HTML5", "CSS3", "JavaScript", "Node.js"],
  "category": "Web Development",
  "date": "2026-01-15",
  "status": "completed"
}
```

### 2. Weather Dashboard
```json
{
  "id": 2,
  "title": "Weather Dashboard",
  "description": "Real-time weather dashboard with interactive charts and forecasts. Features geolocation support and multiple city tracking.",
  "image": "https://via.placeholder.com/400x300/764ba2/ffffff?text=Weather+Dashboard",
  "link": "https://github.com/example/weather-dashboard",
  "technologies": ["JavaScript", "API Integration", "Chart.js"],
  "category": "Web Application",
  "date": "2025-12-10",
  "status": "completed"
}
```

### 3. Task Management App
```json
{
  "id": 3,
  "title": "Task Management App",
  "description": "Collaborative task management application with drag-and-drop functionality, team collaboration features, and deadline tracking.",
  "image": "https://via.placeholder.com/400x300/f093fb/ffffff?text=Task+Manager",
  "link": "https://github.com/example/task-manager",
  "technologies": ["React", "CSS Grid", "Local Storage"],
  "category": "Productivity",
  "date": "2025-11-20",
  "status": "completed"
}
```

### 4. Portfolio Website
```json
{
  "id": 4,
  "title": "Portfolio Website",
  "description": "Responsive personal portfolio website with smooth animations, dark mode toggle, and contact form integration.",
  "image": "https://via.placeholder.com/400x300/4facfe/ffffff?text=Portfolio+Site",
  "link": "https://github.com/example/portfolio-website",
  "technologies": ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  "category": "Web Design",
  "date": "2026-02-01",
  "status": "completed"
}
```

### 5. Blog Platform
```json
{
  "id": 5,
  "title": "Blog Platform",
  "description": "Modern blogging platform with markdown support, comment system, and category-based filtering. SEO optimized with social sharing.",
  "image": "https://via.placeholder.com/400x300/00f2fe/ffffff?text=Blog+Platform",
  "link": "https://github.com/example/blog-platform",
  "technologies": ["JavaScript", "Markdown", "CSS3"],
  "category": "Content Management",
  "date": "2025-10-15",
  "status": "completed"
}
```

### 6. Recipe Finder
```json
{
  "id": 6,
  "title": "Recipe Finder",
  "description": "Interactive recipe search application with advanced filtering, nutritional information, and shopping list generator.",
  "image": "https://via.placeholder.com/400x300/fa709a/ffffff?text=Recipe+Finder",
  "link": "https://github.com/example/recipe-finder",
  "technologies": ["JavaScript", "REST API", "Bootstrap"],
  "category": "Web Application",
  "date": "2025-09-28",
  "status": "completed"
}
```

## Image Handling

### Image Sources
The JSON supports multiple image sources:

1. **Local Images**
   ```json
   "image": "assets/images/project-name.jpg"
   ```

2. **External URLs**
   ```json
   "image": "https://example.com/image.jpg"
   ```

3. **Placeholder Images** (used in samples)
   ```json
   "image": "https://via.placeholder.com/400x300/667eea/ffffff?text=Project+Name"
   ```

### Image Requirements
- **Recommended Size:** 400x300 pixels
- **Format:** JPG, PNG, or WebP
- **Aspect Ratio:** 4:3
- **Max File Size:** 500KB (for optimal loading)

### Fallback Handling
The JavaScript includes automatic fallback for failed images:
```javascript
projectImage.onerror = function() {
    this.src = `https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(project.title)}`;
};
```

## How Data is Loaded

### JavaScript Implementation (gallery.js)

```javascript
// Fetch the JSON file
fetch("data/projects.json")
    .then(response => response.json())
    .then(data => {
        displayProjects(data.projects);
    })
    .catch(error => {
        console.error("Error loading projects:", error);
    });
```

### Display Function
```javascript
function displayProjects(projects) {
    projects.forEach((project, index) => {
        // Create project card
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        
        // Add content from JSON
        // - Image
        // - Title
        // - Description
        // - Link
    });
}
```

## Adding New Projects

### Step 1: Edit JSON File
Open `src/data/projects.json` and add a new object to the `projects` array:

```json
{
  "id": 7,
  "title": "Your New Project",
  "description": "Description of your project...",
  "image": "path/to/image.jpg",
  "link": "https://github.com/yourusername/project",
  "technologies": ["JavaScript", "HTML", "CSS"],
  "category": "Web Development",
  "date": "2026-02-20",
  "status": "completed"
}
```

### Step 2: Update Meta Information
```json
"meta": {
  "version": "1.0",
  "lastUpdated": "2026-02-20",
  "totalProjects": 7  // Update this number
}
```

### Step 3: Refresh the Page
The project will automatically appear in the gallery!

## Data Validation

### Best Practices
1. **Unique IDs:** Each project should have a unique `id`
2. **Valid URLs:** Ensure all links and image URLs are valid
3. **Description Length:** Keep descriptions between 100-200 characters
4. **Image Optimization:** Optimize images before adding
5. **JSON Syntax:** Validate JSON syntax before deployment

### Validation Tools
- [JSONLint](https://jsonlint.com/) - Validate JSON syntax
- Chrome DevTools - Check for fetch errors
- Browser Console - View error messages

## Advanced Features

### Filtering by Category
You can extend the JavaScript to filter projects by category:

```javascript
function filterByCategory(category) {
    const filteredProjects = projects.filter(
        project => project.category === category
    );
    displayProjects(filteredProjects);
}
```

### Sorting Projects
Sort projects by date:

```javascript
projects.sort((a, b) => new Date(b.date) - new Date(a.date));
```

### Search Functionality
Implement search across project titles and descriptions:

```javascript
function searchProjects(query) {
    const results = projects.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProjects(results);
}
```

## Error Handling

### Loading States
```javascript
// Show loading
projectContainer.innerHTML = '<div class="loading-text">Loading projects...</div>';

// Show error
projectContainer.innerHTML = '<div class="no-projects">Failed to load projects.</div>';

// Show empty state
projectContainer.innerHTML = '<div class="no-projects">No projects to display yet.</div>';
```

## Performance Optimization

### Tips
1. **Lazy Loading:** Load images as they come into viewport
2. **Caching:** Cache JSON data in localStorage
3. **Compression:** Minify JSON in production
4. **CDN:** Use CDN for images
5. **Pagination:** Implement pagination for large datasets

## Security Considerations

1. **Sanitize User Input:** If allowing user-generated content
2. **Validate URLs:** Check external links are safe
3. **HTTPS Only:** Use HTTPS for all external resources
4. **Content Security Policy:** Implement CSP headers

## Future Enhancements

- [ ] Add project tags/keywords
- [ ] Include GitHub statistics
- [ ] Add project screenshots array
- [ ] Support for video demos
- [ ] Multi-language support
- [ ] Project ratings/likes
- [ ] Comments section data
- [ ] Related projects links
