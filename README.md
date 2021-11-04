# Learning Management System OpenEyes e-learning

This is a LMS that gives access to courses. There 2 types of users: Teacher and Student. The data is connected to Firebase Database (Cloud Firestore). The Teacher role can edit courses and can add a new course. Soon you will be able to add files too (work in progress).

## How to use it 

When you start the app, the first page you are going to see is the Landing page, which has a pitch of the school and some information. In the bottom there is a button to the Login page. When you click it, you will be forwarded to the login page. On the login page you can click Register and create a new account. Once you register - you can login with your credentials.

The Home page showcases the courses. Each course has a short description, a photo and a button which will open a more detailed page of that section. The Calendar button on the navigation bar opens the extenral google calendar page. The Logout button will log you out.

Each course consists of a list of files within that course. When you click on the course, it will open a new page with a detailed information about that particular course such as photo, price as well as a short description. You can click on the Go Back button which will send you back to the category page.

The teacher status can be assigned by changing isTeacher from false to true via firebase (you can also login with email: natalia@gmail.com password: 12345678). The teacher's page shows existing courses and when you click on any category it will open a new page with the particular course's information inside the form which you can edit and save. On the same page you can see if there are files associated with that course.

## How to start 

You need to have npm installed on your computer. In the project terminal first run:

### `npm install`

It would compile the project before you would run it. After this go to the next step:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Diagram

The diagram/component tree of the project structure: https://whimsical.com/componenttree-6VsU2YGuJd4Lh8oGzypayD

## Prototype

The prototype is made in Figma and available through the link: https://www.figma.com/file/Q4r4rlI9I5DQGXhTJo9rKl/Untitled?node-id=10%3A167

## Link

The app is hosted on: https://openeyeselearning.web.app
