# Project #3: Travel App

###  Project Concept & Overview

The experience of this app is …"Experience living in another city…. for a day, for a year….fantasy, reality... now or later…. You decide!” (working concept… title will be modified)

A working full-stack application (with initial seed data) hosted on heroku at:

  `https://pacific-sands-5189.herokuapp.com/`

  - A place for users to browse locations and see instagram photos and cost of living data from the location selected.

  - Users can log in and save their desired locations or just browse without logging in to the app.

User enters their location of choice (or browse locations) and when they click to open up a location, User is taken to a page where:
  - Instagram images from that city are displayed (Thanks Instagram API) and
  - Cost of living data is displaying (Thanks Numbeo API).
  - Users only have to be authenticated with Instagram (OAuth) IF they want to connect, comment, or like the images (OAuth is a feature for Sprint #2).
  - For this sprint we are limiting the amount of locations to: London, Mumbai, New York, Paris, San Francisco, and Shanghai.
  - This idea allows for additional API's going forward, for instance: foursquare, yelp, twitter, facebook, etc.

**Below is a screenshot of an article of interesting ways to use the Instagram API**

* **Instagram API search for geotags**
 ![diagram] (http://i.imgur.com/0MoluqC.jpg)


## Technologies Used:
  - Express web application server framework
  - NodeJS
  - Javascript
  - MongoDB database management system
  - Bootstrap CSS framework
  - HTML for structure of webpage
  - GitHub
  - MongoLab for database management
  - Heroku for site deployment
  - SublimeText2

## External APIs consumed:
  - Instagram (to get images)
  - Numbeo (to get cost of living data)

## Wireframes, ERDs, User Stories (MVP and Icebox):

  -  Attached via Trello along with App statement:
    - `https://trello.com/b/PkFL0UrL/travel-app`

## Installation Instructions (Getting Started):

  - **To View as a User:**

    - Open the browser of your choice on your computer and navigate to:
      - `https://pacific-sands-5189.herokuapp.com/` .

    - Start by setting up an account. After which you will be taken to your profile page. From your profile page, you can access an index of all styles trending.

    - Logout when you're done.

  - **To Contribute or View Code and Source Files:**

    - Create a copy or `Fork` of this repo `https://github.com/PrityPatel/travel_app`. Do so by clicking the `Fork`  button that is located above on the right corner of your github page. By forking this repo, you will now have a full working copy of all the same source files, issues, and commit history that currently exists in this repo.

    - Next, to work on the code, you'll need to make a local copy of the fork. To make a local copy of the forked repo, you'll need to open up your computer Terminal and navigate to the directory where you would like to store the repo and work on it. Make sure you store it in a directory where you already have created a git directory via `git init`, otherwise, `git init` first.

    - Once you've navigated (via the Terminal) to the directory where you would like to save the working files, go ahead and then type: `git clone https://github.com/PrityPatel/travel_app` and follow the instructions. You may be prompted for your Github login credentials.

    - You now have a local copy on your computer and a remote copy on Github. Open the local files in your favorite text editor, such as Sublime Text.

---

