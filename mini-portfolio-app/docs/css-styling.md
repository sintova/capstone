# CSS Styling Guidelines for Mini Portfolio App

This document provides guidelines for styling the Mini Portfolio App using CSS. It covers responsive design principles, class naming conventions, and how to utilize the provided CSS files for different sections of the application.

## Responsive Design Principles

1. **Mobile-First Approach**: Start by designing for the smallest screens first and progressively enhance for larger screens.
2. **Fluid Layouts**: Use relative units (like percentages, ems, and rems) instead of fixed units (like pixels) to create fluid layouts that adapt to different screen sizes.
3. **Media Queries**: Implement media queries to adjust styles for different breakpoints. For example:

   ```css
   @media (min-width: 768px) {
       /* Styles for tablets and larger devices */
   }

   @media (min-width: 1024px) {
       /* Styles for desktops */
   }
   ```

## Class Naming Conventions

1. **BEM Methodology**: Use Block Element Modifier (BEM) naming conventions for class names to maintain clarity and avoid conflicts. For example:
   - Block: `.portfolio`
   - Element: `.portfolio__item`
   - Modifier: `.portfolio__item--highlighted`

2. **Descriptive Names**: Choose class names that describe the purpose of the element. Avoid generic names like `.box` or `.container`.

## Utilizing CSS Files

The project includes several CSS files for different sections. Ensure to include the appropriate CSS files in your HTML to apply the styles correctly:

- **Global Styles**: `styles.css` should be included for overall typography and layout styles.
- **Navigation Styles**: Use `navigation.css` for styling the navigation component.
- **About Me Styles**: Include `about.css` for the About Me section.
- **Gallery Styles**: Use `gallery.css` for the Project Gallery section, focusing on grid layouts and hover effects.
- **Contact Form Styles**: Include `contact.css` for the Contact Form section to ensure accessibility and user-friendliness.

## Example of Including CSS Files

In your `index.html`, include the CSS files in the `<head>` section as follows:

```html
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/navigation.css">
<link rel="stylesheet" href="css/about.css">
<link rel="stylesheet" href="css/gallery.css">
<link rel="stylesheet" href="css/contact.css">
```

## Conclusion

By following these CSS styling guidelines, you will create a visually appealing and responsive Mini Portfolio App. Ensure to test your styles across different devices and screen sizes to maintain a consistent user experience.