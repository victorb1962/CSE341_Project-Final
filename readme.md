# Final Project: Week 7 - 13

By Group 7

## Members:

- Victor Boxall
- Vitor Figueredo

## Application:

- Magazine Subscription

## Video Explanation

https://TBA

## Project Plan

https://github.com/ /CSE341-Final_project/blob/main/Project%20Plan.pdf

## How to run it

Run npm install and npm start from the backend folder in the terminal

- Run the following in the terminal:
- npm install
- npm install body-parser bcryptjs cors csurf dotenv jsonwebtoken 
- npm install mongodb connect-mongodb-session mongoose  
- npm install express express-session express-validator

- npm install swagger-ui-express - See https://www.npmjs.com/package/swagger-ui-express
- npm install swagger-jsdoc - See https://www.npmjs.com/package/swagger-jsdoc

- > > > npm install --dev swagger-autogen - See https://www.npmjs.com/package/swagger-autogen
- > > > npm run swagger - To recreate swagger.json
- > > > NOT USED for this project

- > > > npm install lint eslint-config-prettier eslint-plugin-prettier prettier --dev
- > > > NOT NECESSARY if extension already added to VS Code

- npm start

## Environment variables

Start MongoDB connection in VS Code

- add MONGODB_URI to .env file.

Environmental Variables to add to .env file:

- MongoDB connection
- Github authentication - if used
- Auhto0 authentication - if used

## Testing

Test the endpoints in the routes.rest file with Rest Client or another similar tool.

1. Browser test (local):

   http://localhost:3000/ < 'Cannot GET /'

   - Use routes.rest
     http://localhost:3000/api-docs
     http://localhost:3000/artwork
     http://localhost:3000/contact

2. Test validation rules with:

   - GET / contact /
   - GET / contact / {id}
   - GET / contact / POST, PUT, DELETE

3. Before uploading to GitHub run the following to make sure you have no issues

- npm run lint - helps to enforce packge.json standards
- npm run format
- edit swagger.js To use production host: https://victor-341w01.onrender.com/
- npm run swagger To recreate swagger.json

4. Push to GitHub
5. Confirm sync with Render

6. Browser test (productionl):

   https://victor-341w05.onrender.com/api-docs
   https://victor-341w05.onrender.com/artwork
   https://victor-341w05.onrender.com/contact

## Week 6 - Validation & Error Handling

## Week 7 - Auth0 incorporated

- see D:\BYU_files\2023-02 SPRING semester\CSE341_WebServices\CSE341-node\w07\w07_class\readme.md for more details
- edit Allowed Callback URLs - to iclude http://localhost:3000/callback (comma delimited)
- edit .env
- edit server.js

### VS Code / Terminal:

- npm install express express-openid-connect --save
- npm start

### ToDo for Production UPLOAD

- edit env file for production (https)
- add environmental variables to Render - since .env files is never deployed

- edit swagger.js to use production host: https://victor-341w01.onrender.com/
- npm run swagger - to recreate swagger.json

- Push to GitHub
- Confirm sync with Render
