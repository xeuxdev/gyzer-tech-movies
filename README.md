# GyzerTech Movies

A website show casing various movies from the TMDB API.

## Features

- A user-friendly interface for displaying the movie list and managing favorites.
- View the details of the movie.
- Add a movie to your favourites.
- View all your favourite movies.
- Remove a movie from your favourites.

## Getting Started

### Clone the repository

- Go ahead and clone the repository by running the following command:

```bash
git clone https://github.com/xeuxdev/gyzer-tech-movies.git
```

- navigate into the cloned folder

```bash
cd gyzer-tech-movies
```

- you should see two directories, frontend and backend.

### Install the dependencies

- on the frontend directory:

```bash
cd frontend
npm install
```

- go back to the root directory

```bash
cd ../
```

- on the backend directory:

```bash
cd backend
npm install
```

- navigate back to the root directory

```bash
cd ../
```

- open your code editor and proceed

### Adding Environment variables

- on the backend directory, add the following environment variables to your .env file

```bash
MONGO_URI="mongodb+srv://xeuxdev:lkJBsZRk5fwib2NR@gyzer.syylqkr.mongodb.net/movie?retryWrites=true&w=majority"
```

- on the frontend directory, add the following environment variables to your .env file

```bash
VITE_API_KEY="d46ec9fa47c8144231606d2ec0e72435"
```

### Running the Application

- on the frontend directory, run the following command to start the server

```bash
cd frontend
npm run dev
```

To view the application in the browser, go to <http://localhost:5173>

- on the backend directory, run the following command to start the server

```bash
cd backend
npm run start
```

The application should be running on the port, <http://localhost:3000>

To view the deployed version of the app go to <https://gyzer-tech-movies.vercel.app/>
