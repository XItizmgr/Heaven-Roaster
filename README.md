# Heaven Roaster

A sophisticated, responsive web application for a modern coffee roastery. This project implements dynamic data handling and custom-built UI logic to provide a high-end user experience.



## Core Features

### 1. Dynamic Menu Engine
The menu is powered by a JavaScript engine that categorizes and renders items from data arrays.
* Categories: Espresso Based, Cold & Iced, Small Bites, Cakes, and Premium Specialties.
* Staggered Animations: Implemented a Fade-Up effect where cards appear one-by-one using dynamic animation-delay calculations.

### 2. Custom Interaction Logic
The project handles complex state management without external libraries:
* Interactive Modals: Custom registration and login flow with click-outside and Escape key closing logic.
* Profile System: Integrated HTML5 Canvas for real-time profile picture updates and rendering.
* Toast Notifications: A custom notification system supporting success, error, and warning states with SVG icons.

### 3. Review & Carousel System
* Users can submit reviews via a functional form.
* Dynamic DOM injection creates a new Review Card instantly upon submission.
* Integrated image uploading for reviewers using URL.createObjectURL for instant previews.



## Tech Stack
* Frontend: HTML5, CSS3 (Custom Variables, Flexbox, Grid)
* Scripting: Vanilla JavaScript (ES6 Modules, Intersection Observer API, Canvas API)
* Integration: Web3Forms API for serverless contact form submissions.

## Project Structure
* index.html / menu.html - Semantic structure and SEO-friendly layout.
* style.css / menu.css - Modular styling with glassmorphism and keyframe animations.
* script.js - Global UI logic, form handling, and profile management.
* menu.js - Data arrays and dynamic menu rendering logic.



## Installation and Usage
1. Clone the repository to your local machine.
2. Open index.html in any modern web browser.
3. To update menu items, modify the data arrays in menu.js.


