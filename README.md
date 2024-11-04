# Image Slider

## Overview
This project is an Image slider (carousel) that allows users to navigate through images interactively or automatically.

## Technologies Used
- **React**: For component-based structure and state management.
- **CSS**: For styling, transitions, and responsive design.

## How to Run the Project
1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install dependencies.
3. Use `npm start` to start the development server.
4. Open `http://localhost:3000` in a web browser to view the slider.

## Features
- **Interactive Navigation**: Click "Next" and "Previous" to navigate through images.
- **Looping**: Returns to the first image after the last one.
- **Automatic Slideshow**: Transitions automatically every 2 seconds.
- **Dot Slider**: Shows the current image being looped on.

## Code Structure
- **Main Component (`Slider.js`)**: Contains image display and navigation logic.
- **State Management**: React `useState` for the current image index and `useEffect` for auto-sliding.
- **Props**: Accepts an array of images as props.
- **CSS Styles**: (`Slider.css`) Separate CSS file to style the slider layout and animations.

## Usage
1. Run the project with `npm start`.
2. Use navigation buttons to view images or watch the automatic slideshow.
