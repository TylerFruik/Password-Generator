# Module 3 | JavaScript Challenge | Password Generator

## Finished Product

### [🔗Project Link](https://tylerfruik.github.io/Password-Generator/)
This project involved building upon pre-laid-out code using HTML, CSS, and JS. Using all three, repairs must be made to a Password Generator.
When functioning properly, the Password Generator will produce a copyable custom line of text that fits the user's parameters.
Users are able to select the 'Uppercase', 'Lowercase', 'Numbers', and 'Symbols' parameters along with a password length between 8 and 128 characters.
The 'Generate Password' button's functionality is locked until at least one of the four parameter buttons have been selected.
Upon clicking, a 'Secure Password' is generated in the space at the bottom that matches the requested criteria!
This page is responsive to resizing and the code is well annotated.

This repository contains the HTML, CSS, and JS files as well as all necessary images in the /Assets/images/ folder.

All additions to base-code written manually by Tyler Fruik

### The following is an image of the final webpage:
![Image URL]([#](https://github.com/TylerFruik/Password-Generator/blob/main/Assets/images/PageExample.png))

## Assignment Information

### User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
### Mock-Up
![Image URL](https://github.com/TylerFruik/Password-Generator/blob/main/Assets/images/03-javascript-homework-demo.png)

### Grading Criteria

#### Technical Acceptance Criteria: 40%
- Satisfies all of the preceding acceptance criteria plus the following:
    - The Challenge should not peoduce any errors in the console when you inspect it using Chrome DevTools.

#### Deployment: 32%
- Application deployed at live URL.
- Application loads with no errors.
- Application GitHub URL submitted.
- GitHub repository contains application code.

#### Application Quality: 15%
- Application user experience is intuitive and easy to navigate.
- Application user interface style is clean and polished.
- Application resembles the mock-up functionality provided in the Challenge instructions.

#### Repository Quality: 13%
- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains a quality README file with description, screenshot, and link to deployed application.

## Bugs to still be squashed:
- Button activation on a resized view disrupts the previous margin updates. Clicking a button when zoomed in rather far causes the buttons to shift around when toggled.
- Slider does not get smaller with resizing.
