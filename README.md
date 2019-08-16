# Grocery-List
Problem: The need for a family to share one central list and quickly add items in real time.


Solution: This solution uses a React and front end and an Express backend. Originally the solution was only going to be using React and not Node. The Firebase database is a free real time database that offers Facebook and Google oAuth, so there was minimal work to get implement authentication into the app. The Jest testing tool comes with React when create-react-app is used to create the app, so I decided to use Jest. 

Realizing this was a "true" full-stack project since it didn't have a backend server and database like MongoDB or PostgreSQL, I decided to integrate my React app with Node, Express and a MongoDB. Jasmine was the tool of choice for testing the backend. 

If it was my choice, I would try to accomplish everything using just Firebase and React. However, I felt it was a little confusing testing the Firebase DB and React library since it was my first time. Testing with MongoDb also was a little confusing. Next time, I may consider something I'm more familiar with so I don't spend too much time on learning the tools.


# Step 1

Clone the project

# Step 2
### `npm install`

Use this command to install dependencies before running the app.

Install dependencies at the root directory and in the client directory.

# Step 3
### `npm run dev`

Use this command to start the app locally.
Node will run on 5000 and React on 3000

#optional
### `npm start`

Runs the Express app<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

#optional
### `npm test`

Run npm test at the root to test the server and run npm test in the client directory to test the front-end.

The server must not be running when running npm test on the root.
<br>


# Step 4
**End-User Flows**

1. Authentication
    1.1 Hit the Google button to log in with a Google account
    1.2 Hit the Facebook button to log in with a Facebook account
    1.3 Hit the signout button at the top right corner to log out


2. Grocery List
    2.1 Enter in an item in the textbox and hit the Enter key to add an item to the list 
    2.2 Click the remove button to remove an item from the list
    2.3 Click the checkbox the update an item as purchased or unpurchased
    
    Feature Incomplete - Update the item 