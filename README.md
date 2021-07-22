## Background & Objectives

In this project we want to **update the form's UI** when a user clicks on the `-` / `+` buttons.:

![Dynamic form Gif](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/booking-form.gif)

Submitting the form is not expected to have any effects.

It's important to understand [`dataset`s](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)! concepts for this exercise.

## Setup

Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/Booking-form.git
yarn install
```
Launch your local webserver with:

```bash
rake webpack
```
Then open [`localhost:8080`](http://localhost:8080) to test the code in the browser

## Specs

### Add participants

The page displays a booking form that we want to make **dynamic**. When the user clicks on the `+` / `-` buttons, we want to:

- Update the counter
- Update the price displayed on the submit button
- Update the value of the read-only input (in cents)

To do so, we should pay special atention at the `index.html` file, especially **the `data-` attributes** that hold precious values build the necessary behaviors!

### Enable the minus (`-`)

The `-` button should not allow `0` or negative values! To "disable" a link we can prevent it's default behavior like this:

```js
button.addEventListener('click', (event) => {
  event.preventDefault();  
});

```

Improvement of the form's UX by:

- Toggling `-` link: **enable** the link when the number of participants is **`>= 2`** and **disable** it otherwise (the counter should never reach `0` nor negative values).
- Hiding the input (you may want to look into [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)), it should not be visible to your users in your form's final version!

### Other information
You can also check the code and and test the app 👉 https://codepen.io/francisco-frontend/full/WNjZzBj
