# Lab 26

# RESTy

### Author: Paul Depew
#### Acknowledgements: 
  - Marlene Rinkler

- [submission PR](https://github.com/PaulDepew/resty)

- [Netlify Deployment](https://distracted-roentgen-6951b6.netlify.app/)
- [GitHub Pages Deployment]()
- [AWS S3 Deployment](http://resty-app-test.s3-website-us-west-2.amazonaws.com/)
- [AWS Amplify Deployment](https://master.d30w5wk5pui6fs.amplifyapp.com/)

### Setup

Clone the Git repository
Install Dependencies
   - "eslint-plugin-react": "^7.20.3",
   - "node-sass": "^4.14.1",
   - "react": "^16.13.1",
   - "react-dom": "^16.13.1",
   - "react-scripts": "^3.4.1"
   - "enzyme": "^3.11.0",
   - "enzyme-adapter-react-16": "^1.15.2",
   - "gh-pages": "^3.1.0",
  

Assign Scripts:
  - "start": "react-scripts start",
  - "build": "react-scripts build",
  - "test": "react-scripts test --env=jsdom",
  - "eject": "react-scripts eject"
  - "deploy": "gh-pages -d build",
  - "predeploy": "npm run build"

Run npm start

Enter a Url

Click on an Action

#### `.env` requirements

None

#### Running the app

npm start
  - Starts the server on your local host with react-scripts


#### Tests

npm test 
  - runs a jest testing suite to test our DB connections, CRUD functions and middleware


#### UML
