# be-wise

Mini collage project aimed at managing courses and lecturers.

### Tech Stack

- Node.js
- Express.js
- MySQL
- nodemon
- Angular

## Prepare The Environment

1. Create a new MySQL database.
2. Clone project in vscode: `https://github.com/itanmd/be-wise.git`
3. Install dependencies in vscode terminal: `npm install`
4. Install nodemon globally: `npm i -g nodemon` and update `package.json` accordingly.
5. In project, add configuration file: `config/dev.js` containing the database connection details.
6. In project, add folder `exports`.
7. Install dependencies for Angular client:  
   `cd client`  
   `npm install`

## Run The App

1. Run the server:
   - Windows: `set DEBUG=be-wise:*; & npm start`
     or: DEBUG=be-wise:\* npm start
   - MacOS/Linux: `DEBUG=be-wise:* npm start`
2. Run the client:  
   `cd client`  
   `ng serve`
