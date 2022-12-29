# My Reads Udacity assessment:

This is my assessment project for Udacity's React Fundamentals course.


## Get started: 

* You can download ``` .zip ``` file by pressing on the green button with name ```Code```  and select ```Download Zip``` 
* You can clone it through 
``` git clone https://github.com/0anw0/MyReads-A-Book-Tracking-App.git```

## Start running the project through:

- install all project dependencies with `npm install`
- start the development server with `npm start`

# Technologies
```html```
```css```
```react js```
```javascirpt``` 

# Project Structure 

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── api 
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components
    │   ├── atoms  # This directory holds the most smallest components of each screen 
    │   ├── moleclues
    │   │   ├── bookTop.js # The component that is responable for rendering book cover and floating drop menu
    │   │   └── searchBar.js # The component that is responable for providing searching functionality on searching page
    │   ├── origanisms
    │   │   └── bookItem.js # The component that is responable for rendering each book info
    │   └── templates
    │       └── shelfBook.js # The component that is responable for rendering shelf's books
    ├── containers
    │     └── shelf.js # The component that is responable for rendering each shelf
    ├── pages
    │     ├── mainPage.js # The web application name screen 
    │     └── searchPage.js # The page where you can search and add new screens
    └── util
        └── constants.js # holds all the application constants and strings. 

```

## Please note that:
 I was given a starter template and I had to refactor the code to add functionality and Interactivity to it 


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Functionality 

This application consists of two page. And Main Page and a Search Page. 
 * The Main Page shows all the user books sorted on 3 different shelves. ```Currently Readin``` , ```Want to Read``` and ```read```
    - The User can change the book's state through pressing on the drop menu button. 
    - The user can hide the book by choosing ```None``` 
    - The user can navigate to search screen to search and add new books

 * The Search Page is the page where user can type any desired name through the search box and the app will start searching 
    for it after ```SEARCH_TIMEOUT``` value that can be specified in ```bash ./scr/util/constants```
    - the user can choose new books to add to the shelves. 
    - books that already chosen by user will be shown if it is appeared as a search result. on its current shelves. 
