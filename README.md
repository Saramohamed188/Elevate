# Elevate

# Black & White Product Listing

This project is a simple e-commerce product listing page that fetches products from the Fake Store API and displays them in a black-and-white themed layout.

## Live Demo
Click here to view the live demo
(https://elevatetask.vercel.app/)

## Features
- Black and white design
- Responsive layout (CSS Grid/Flexbox)
- Product information (image, title, price, rating)
- Loading and error handling

## Approach
## HTML Structure:

The HTML file contains a navigation bar, a title, and a container for the product listings.
Tailwind CSS is used for styling and responsive design.
JavaScript Functionality:

An event listener is added for the DOMContentLoaded event to ensure that the DOM is fully loaded before executing the JavaScript.
The fetchProducts function is responsible for making a GET request to the fake store API. It displays a loading indicator while the data is being fetched and handles errors if the request fails.
The renderProducts function takes the fetched products and generates HTML elements for each product, displaying its image, title, price, and rating.
Error Handling:

If fetching the products fails, an error message is displayed to the user.
## Challenges Faced
API Integration: Understanding how to effectively handle API responses and errors required some trial and error.
Responsive Design: Ensuring that the layout looks good on different screen sizes while maintaining usability was challenging. Using Tailwind CSS helped simplify this process.
Dynamic Rendering: Implementing the product rendering dynamically based on fetched data was a new experience, requiring a good grasp of template literals and DOM manipulation.


