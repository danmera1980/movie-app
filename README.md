# MOVIE REVIEW SPA
This application helps search for movies according to a title, see the details of a movie, it's reviews, and post your own comments.

## Development

This project was built with a PERN stack and other techlologies.

### Database
For handling the data the application uses:
```
PostgreSQL  12.9
pgAdmin4 6.4
```

### Backend

```
NodeJS 16.14.2
ExpressJS 4.18.1
JSON Web Token 8.5.1
Sequelize ORM 6.19.0
Axios 0.27.2
```

### Frontend
For developing the visual part of the application, it uses:
```
NodeJS 16.14.2
Axios 0.27.2
ReactJS 18.1.0
React-Router-DOM 6.3.0
React-Icons 4.3.1
Redux 4.1.2
React-Redux 7.2.6
```
## Configuration
### Database Requirements
You should create the database in you ```PostgreSQL``` installation, create a user and give the user all the privileges to use the database created to modify it completely.

### Backend Requirements
It is necessary to configure the following files:
In the ```backend``` folder, create the ```.env``` file, completing the following configuration:
``` 
DATABASE=
DB_USER=
DB_PW=
DB_HOST=
jwtSecret=
PORT=
```
Here is an example on what it should look like:
``` 
DATABASE=movies_db
DB_USER=movies_us
DB_PW=movis_pw
DB_HOST=172.31.46.102
jwtSecret=movies2022
PORT=3001
```
To run the backend of the application and keep it running, make sure the database is up and running, and execute the following command in the terminal:
```bash
$ npm init
$ npm start
```

## Frontend Requirements
To be able to run the frontend of the application, the followinf file needs to be created and configured:
```
REACT_APP_BACKEND_URL=
```
The URL should be the one being used for the backend of the application. It should look like this:
```
REACT_APP_BACKEND_URL=http://172.31.46.102:3001
```

To run the frontend in development, execute the following commands:
```bash
$ npm init
$ npm start
```
## Tests
Running test are done separate from backend, and frontend.
### Backend
```bash
$ cd backend
$ npm test
```
### Frontend
```bash
$ cd frontend
$ npm test
```


## Future Development

Here are some tasks to be completed, improved, or created:

### Fix
- Updated searched list after clicking like button

### Develop
- View past comments
- Post a comment and view it.
- Create a page to view all the favorites

## Deployed Application
You can test the appplication using the following link
```
link to be placed here
```