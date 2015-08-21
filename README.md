# Project #3: Working as a Team with Express

###  Project Concept & Overview

A working full-stack application (with initial seed data) hosted on heroku at:

  `https://pacific-sands-5189.herokuapp.com/`

  - A place for users to browse locations and see instagram photos and cost of living data from the location selected.

  -Users ca save

The experience of this app is …"Experience living in another city…. for a day, for a year….fantasy, reality... now or later…. You decide!” (this is a working concept… title will be modified)

User enters their city, country of choice (or browse locations) and when they click to open up a location, they would have to log in, then:
  - User is taken to a page where Instagram images from that city are displayed (Thanks Instagram API) and the cost of living is displaying (because of the Numbeo API). Users only have to be authenticated with Instagram (OAuth) IF they want to connect, comment, or like (which is an icebox user story feature).

For this sprint we are limiting the amount of locations.

This idea allows for additional API's going forward… for instance: foursquare, yelp, twitter, facebook, etc.

**Below is a brief snippet for the Instagram stuff with some links…**

* **Instagram API search for geotags**
 ![diagram] (http://i.imgur.com/0MoluqC.jpg)


## Technologies Used:
  - Express web application server framework
  - NodeJS
  - Javascript
  - MongoDB database management system
  - Bootstrap CSS framework
  - HTML for structure of webpage

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

## Wireframes, ERDs, User Stories (MVP and Icebox):

  -  Attached via Trello along with App statement:
    - `https://trello.com/b/PkFL0UrL/travel-app`

### Technical Requirements

App must:

- **Use Mongo & Express** to build an app with a RESTful interface
- **Models**:
    - **Use at least 2 models**, one of which should be a "user," and one
      which is represents your resource
    - Include **all major CRUD functions** on your resource model(s)
- **Add authentication to your app** to restrict access to appropriate users
- Layout and style your front-end with **clean & well-formatted CSS**
- **Deploy your application online** so it's publically accessible

It is suggested that:

- Your server-side application serves a RESTful, JSON API, and has a
  client-side application that consumes it

---

### Necessary Deliverables

- **Thoughtful user stories**, with their current status ("Assigned to", "Done",
  "Icebox") available on Trello
    - Add your **wireframes** – sketches of major views / interfaces in your
      application
    - You may also add information about your data schema / ERDs (let us know
      if your data model gets complicated!)
- A **working app, hosted somewhere on the internet**
- **A consistent code style.** Make sure it looks like a unified effort!
- A **team git repository hosted on Github**, with a link to your hosted
  project, and frequent commits
- A **link to your hosted working app** in the URL section of your Github repo
- **A `README.md` file** with:
    - Explanations of the **technologies** used
    - **A link to your Trello!**
    - A couple paragraphs about the **general approach you took**
    - **Installation instructions** for any dependencies
    - Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome

---

### Team Structure

- Every team needs a manager. That manager will create the Trello Board, GitHub
  repo, and Heroku account, and add the rest of the team (or allow them to fork).
- [Remember our Git / GitHub workflow.](/resources/cheatsheets/class_git_cheatsheet.md#our-workflows)
- Consistency and style:
    - The manager is in charge of ensuring that code meets the team's style and
      commenting rules before merging.
    - The team may want to review the code as a group before or after it is
      merged, in a [Code Review](https://github.com/thoughtbot/guides/tree/master/code-review)...
      You may ask to use the projector to do this!
- You may work singularly, or in pairs. If you are pairing, remember that it's
  two people, but **ONE computer!**
- When deciding on what you want to work on, it may make sense to choose to work
  on a part of the application you:

    1.  want to get better at doing, or
    2.  enjoy doing and feel comfortable with.

  Either of these is fine! Decide as a team how to divy up the work. It may be
  worthwhile to pair people based on their level of understanding (stronger/weaker)
  on a given feature.

---

### Suggested Ways to Get Started

- Before you begin writing the app:
    - Read the docs for whatever technologies / frameworks / API’s you use
      **FIRST**, before you begin to integrate them into your app. Make sure you
      can use them!
    - **Keep user stories small and well-defined**, and remember – user stories
      focus on what a user needs, not what development tasks need accomplishing.
- When you're writing the app:
    - **Write pseudocode before you write actual code.** Thinking through the logic
      of something helps.
    - **Don’t hesitate to write throwaway code** to solve short term problems.
    - **Write your code DRYly** and **build your interface RESTfully**.
    - **Commit early, commit often.** Don’t be afraid to break something because
      you can always go back in time to a previous version.
- Remember to use good style and comments:
    - **Write code another developer wouldn't have to ask you about**. Do your
      naming conventions make sense? Would another developer be able to look at your
      app and understand what everything is?
    - **Comment your code.** Will someone understand what is going on in each block
      or function? Even if it's obvious, explaining the what & why means someone
      else can pick it up and get it.
    - **Make it all well-formatted.** Are you indenting, consistently? Can we find
      the start and end of every div, curly brace, etc?

---

### Useful Resources

* **[Mongoose](http://mongoosejs.com/)**
* **[Express JS](http://expressjs.com/)**
* **[Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)**

---

### Project Feedback + Evaluation

- __Project Workflow__: Did you complete the user stories, wireframes, task
  tracking, and/or ERDs, as specified above? Did you use source control as
  expected for the phase of the program you’re in (detailed above)?

- __Technical Requirements__: Did you deliver a project that met all the
  technical requirements? Given what the class has covered so far, did you build
  something that was reasonably complex?

- __Creativity__: Did you added a personal spin or creative element into your
  project submission? Did you deliver something of value to the end user (not
  just a login button and an index page)?

- __Code Quality__: Did you follow code style guidance and best practices
  covered in class, such as spacing, modularity, and semantic naming? Did you
  comment your code as your instructors as we have in class?

- __Problem Solving__: Are you able to defend why you implemented your solution
  in a certain way? Can you demonstrated that you thought through alternative
  implementations? _(Note that this part of your feedback evaluation will take
  place during your one-on-one code review with your instructors, after you've
  completed the project.)_
