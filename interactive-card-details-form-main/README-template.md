# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](interactive-card-details-form-main/design/Screenshot 2024-06-20 202722.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/Godbrand0/interactive-card-details-form-main)
- Live Site URL: [Add live site URL here](https://godbrand0.github.io/interactive-card-details-form-main/interactive-card-details-form-main/card.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

- [tailwindCSS](https://tailwindcss.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

i learnt how to use regular expression to get the error message.
To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
function tankPage() {
  if (
    NAME.innerHTML === cardName.value &&
    YY.innerHTML === expYear.value &&
    MM.innerHTML === expMonth.value &&
    number.innerHTML === cardNumber.value
  ) {
    tank.classList.remove("hidden");
    tank.classList.add("flex");
    infoPage.classList.remove("static");
    infoPage.classList.add("hidden");
  } else {
    tank.classList.add("hidden");
    tank.classList.remove("flex");
    infoPage.classList.remove("hidden");
    infoPage.classList.add("static");
  }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

i would like to improve on my javascript by trying out more code on frontendmentor

## Author

- Website - [Thompson Eregha](https://godbrand0.github.io/Portfolio-web/Home.htm)
- Frontend Mentor - [@Godbrand0](https://www.frontendmentor.io/profile/Godbrand0)
- Twitter - [@godbrand0](https://x.com/godbrand0)
