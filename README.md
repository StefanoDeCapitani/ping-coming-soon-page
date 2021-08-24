# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./screenshots/screenshot-desktop.png)

### Links

- Solution URL: [https://www.frontendmentor.io/profile/StefanoDeCapitani](https://www.frontendmentor.io/profile/StefanoDeCapitani)
- Live Site URL: [https://stefanodecapitani.github.io/ping-coming-soon-page/](https://stefanodecapitani.github.io/ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I tried using clamp(), min() and max() every time that it was possible and useful and I finally got a perfect responsive page without recurring to media queries. Then I added only one media query to adjust two small things of the layout that didn't involve dimensions but only positioning. I think I've always over-used media queries, from now on I'll use them only when they are really indispensable.

### Useful resources

- [5 simple tips to making responsive layouts the easy way](https://youtu.be/VQraviuwbzU) - This was super helpful! Instead of teaching a bunch of techniques that you have to memorize, this tutorial makes one step back to give you some understanding on what making a responsive page is really about. Kevin Powell is the best!

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
