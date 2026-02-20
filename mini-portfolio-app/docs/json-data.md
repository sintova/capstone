# JSON Data Structure for Project Gallery

This document outlines the structure of the JSON file used for the Project Gallery in the Mini Portfolio App. The JSON file should be located in the `src/data/projects.json` directory and should follow the format specified below.

## JSON Structure

The JSON file should be an array of project objects, where each object contains the following properties:

- **id**: A unique identifier for the project (string).
- **title**: The title of the project (string).
- **description**: A brief description of the project (string).
- **image**: The URL or path to the project's image (string).
- **link**: A URL to the live project or its repository (string).

### Example JSON Data

```json
[
    {
        "id": "project1",
        "title": "Project One",
        "description": "A brief description of Project One.",
        "image": "assets/images/project1.jpg",
        "link": "https://example.com/project1"
    },
    {
        "id": "project2",
        "title": "Project Two",
        "description": "A brief description of Project Two.",
        "image": "assets/images/project2.jpg",
        "link": "https://example.com/project2"
    },
    {
        "id": "project3",
        "title": "Project Three",
        "description": "A brief description of Project Three.",
        "image": "assets/images/project3.jpg",
        "link": "https://example.com/project3"
    }
]
```

## Fetching and Displaying Data

To fetch and display this data in the Project Gallery section of the application, you will need to use the `fetch` API in your JavaScript code. Here’s a brief overview of how to do this:

1. Use `fetch('src/data/projects.json')` to retrieve the JSON data.
2. Parse the response using `.json()`.
3. Iterate over the array of project objects and dynamically create HTML elements to display each project in the gallery.

Ensure that you handle any potential errors during the fetch operation and provide feedback to the user if the data cannot be loaded.