# Project: Basic Informational Site

## Introduction

By now you should know enough to be dangerous. There’s definitely more to learn but you already know enough about Node to actually make something! So let’s do it! You will be creating a very basic informational site that contains 4 pages: index, about, contact-me and 404. Keep in mind that the content of these pages isn’t really all that important. So there’s no need to spend a lot of time filling them up or trying to make them look pretty.

## Built With
- Node.js
- HTTP (built-in Node.js module)
- File System (fs)

## Getting Started

Install dependencies (if any):

```bash
npm install
```

Start the server:

```bash
node index.js
```

Open the app in your browser:

```
http://localhost:8080
```

## Assignment

1. Create a project directory and add the following files inside it:
   - `index.html`
   - `about.html`
   - `contact-me.html`
   - `404.html`

2. Create a server file `index.js` and write the code needed to serve the right page depending on the URL:
   - `localhost:8080` → returns `index.html`
   - `localhost:8080/about` → returns `about.html`
   - `localhost:8080/contact-me` → returns `contact-me.html`
   - any other address → returns `404.html`

3. The content of the pages isn't critical — there's no need to spend a lot of time on design or filling them with text.

**Note**

If you run into difficulties, feel free to go back to the previous lesson — ["Getting Started"](https://www.theodinproject.com/lessons/nodejs-getting-started) — and review the basic principles of working with a Node.js server.
