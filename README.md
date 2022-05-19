# CRUDApp1
## Overview
This application, Sean's Kitchen, is a hub for new and experiences home chefs to explore new recipes, add their own favorites, and edit exiting ones as necessary. Sean's Kitchen includes the following:
* Navigation bar that is consistent across all pages and designed for mobile viewing
* A home page with links to each category of recipes, broken down by main protein (i.e., seafood, vegetarian, etc.), as well as a button that takes users immediately to a random recipe
* Four separate databases of recipes that users can read, update, add to, and delete from
* Functionality for users to create accounts and log in, which is required in order to edit, add, or delete
* All recipes are created and maintained using this model:
 ```javascript
  name: String,
  img: String,
  link: String,
  cookTime: Number,
  type: String,
  base: String,
  genre: String,
  comments: String
  ```
## Links
Application Link (hosted by Heroku): https://immense-depths-20154.herokuapp.com/recipes

GitHub Repo: https://github.com/sean-r-g/CRUDApp1
## Approach
My approach to designing and building this application was to start by first outlining the overall goal of the application, and then moving on to mocking up a few wireframes for the key views (Main, Index, Show, New/Edit). Below are some example wireframes:

Main Page Wireframe
![Main Page](https://i.imgur.com/2GCyoa1.png)

Index Page Wireframe
![Index Page](https://i.imgur.com/EPfEQZD.png)

After that, I got to work creating the file structure and base .ejs and .js files. In total, for the base application build, I created:
* One database
* Four models
* Four collections
* Four views sub folders with four ejs files in each (index, show, edit, new)
* Six partials to keep all pages consistent across views
* A public folder with my styles.css and app.js

After created the files outlined above, I wrote out the routes for all seven RESTful methods for each model/collection and did some initial testing. After that, I moved on to styling for desktop and mobile. Finally, I added in the user account creation and log in functionality. I did hit a significant issue with this after some testing, and will go into more detail in the last section of this markdown. In adding the user/login functionality, I created two additional models, views, controllers, and collections. 

## Technologies Used
* JavaScript
* HTML
* CSS
* jQuery
* Express
* Mongo DB/Atlas
* Mongoose
* Heroku
## Issues Along the Way
I didn't run into any major issues with the initial app development, fortunately, but did hit quite a few snags adding in the the user/login functionality. The primary issue I ran into is that after I created an initial test user, I was unable to create more. The user information was being read as ```undefined``` and would not actually add a new user to the collection. After reading through the Heroku error logs, I determined the issue was related to the collection indexes. After digging in more, I came to the conclusion that the error was caused by a change I made in the User Schema after creating the initial test account, resulting in multiple indexes being created. After dropping the extraneous index, everything functioned appropriately when creating new users.