# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop design](./screenshot/Captura%20de%20pantalla_14-1-2026_231035_127.0.0.1.jpeg)
![Desktop success](./screenshot/Captura%20de%20pantalla_14-1-2026_231129_127.0.0.1.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (ES6+)
- Local Fonts (Self-hosted @font-face for performance)

### What I learned

In this project, I moved beyond simple form validation and practiced managing UI states. The biggest lesson was handling the transition between the "Sign-up" state and the "Success" state without reloading the page.

State Toggling: I used a .hidden utility class to switch between the main card and the success card.

Template Literals for UI Feedback: I used JavaScript to capture the user's input and display it back to them in the success message, making the experience feel personalized.

To see how you can add code snippets, see below:


```js
 function mostrarExito(email) {
        //Mostramos mensaje de exito
        userEmail.textContent = email;

        //Ocultamos el card principal
        card.classList.add('hidden');
        //Mostramos el card de exito
        successCard.classList.remove('hidden');
    }
```

### Continued development

Improve Web Accessibility by managing focus so that when the success card appears, the screen reader focus moves automatically to the "Dismiss" button.

### Useful resources

- [MDN - Font Face](https://developer.mozilla.org/es/docs/Web/CSS/Reference/At-rules/@font-face) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@GabrielNoss](https://www.frontendmentor.io/profile/GabrielNoss)

## Acknowledgments

Gemin AI for guided me through the logic of creating dynamic error messages instead of hard-coding them in HTM