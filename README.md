# Project #3: Working as a Team with Express

###  Project Concept

An idea that could provide for a robust and dynamic site with full crud and with API usage.

We utilize the Instagram API that has geotagging available and also the Numbeo API.

The experience is …"Experience living in another city…. for a day, for a year….fantasy, reality... now or later…. You decide!” (this is a working concept… we can come up with that later)

User enters their city, country of choice (or browse locations) and when they click to open up a location, they would have to log in, then:
  - User is taken to a page where Instagram images from that city are displayed/updated in real time (because of the API) and the cost of living is displaying (because of the numbeo API). Users only have to be authenticated with Instagram (OAuth) IF they want to connect, comment, or like (which we can icebox).

For this project we can limit the amount of locations (or not depending on complexity), but at least we know it could scale going forward. Main thing is testing out if the API(s) would work.

Using the Instagram images helps take away from having to come up with robust design as images are themselves vibrant, so then the design focus for the app becomes user flow and display options (from what i understand, the Instagram API also allows for thumbnail and zoomed images).

This idea allows for additional API's going forward (if time permits)… like foursquare, yelp, twitter, facebook, etc.

This also meets the requirements of the project:
  - User model
  - Location model
  - Full CRUD on User model
  - Possibly full CRUD on Location model if Users can save Locations (I think we should implement)

Also, here’s a brief snippet for the Instagram stuff with some links…

* **[Instagram API search for geotags] (http://i.imgur.com/0MoluqC.jpg)**

* **[NodeJS driver for the instagram API] (http://www.ibm.com/developerworks/xml/library/xinstagram1/index.html#retrievedetails)**

Some NPM Documentation, Github repos, and Instagram Developer documentation:

* **[NodeJS Driver for Instagram API] (https://github.com/totemstech/instagram-node)**

* **[NPM: Simple Instagram-Node Driver] (https://www.npmjs.com/package/instagram-node)**

* **[Instagram Limits] (https://instagram.com/developer/limits/)**

* **[Instagram Endpoints] (https://instagram.com/developer/endpoints/?hl=en)**

* **[Get Data Using Instagram API] (http://www.c-sharpcorner.com/UploadFile/raj1979/how-to-authenticate-and-get-data-using-instagram-API/)**

* **[Express.js Tutorial: Instagram Gallery Example App with Storify API] (http://webapplog.com/express-js-tutorial-instagram-gallery-example-app-with-storify-api/)**

Another link that is utilizing a streaming feed… this one is using twitter, though should help build a roadmap for Instagram (real-time is icebox, but just putting it here, so we can reference):

* **[Build A Real-Time Twitter Stream with Node and React.js] (https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js)**

* **[Instagram Node Library] (https://github.com/mckelvey/instagram-node-lib)**

* **[Instagram Realtime] (https://instagram.com/developer/realtime/?hl=en)**

---

### Landing Page Concept

A basic landing page mocked up by Kevin:
* **[Landing Page Mock-up, v1] (https://googledrive.com/host/0B6z5p82sidMKeU5HRWtldDVVSEU)**

---

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
