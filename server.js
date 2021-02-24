const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.locals.users = [
  { id: 'u1', name: 'Jessica Candel', username: 'Jessica', password: 'Candel', favorites: [], watched: [] },
  { id: 'u2', name: 'Marcus Aurelius', username: 'Marcus', password: 'Aurelius', favorites: [], watched: [] },
  { id: 'u3', name: 'Thirdu Ser', username: 'Thirdu', password: 'Ser', favorites: [], watched: [] }
];

app.set('port', process.env.PORT || 3001);

app.locals.title = 'Rancid Tomatillos API';

app.get('/', (request, response) => {
  response.send('Oh hey Rancid Tomatillos API');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/api/v1/users', (request, response) => {
  const users = app.locals.users;

  response.json({ users });
});

app.get('/api/v1/users/:id', (request, response) => {
  const { id } = request.params;
  const user = app.locals.users.find(user => user.id === id);
  if (!user) {
    return response.sendStatus(404);
  }

  response.status(200).json(user);
});

app.use(express.json());


app.patch('/api/v1/users/favorites/:id', (request, response) => {
  const { id } = request.params;
  const newFavorite = request.body;
  const user = app.locals.users.find(user => user.id === id);
  if (!user) {
    return response.sendStatus(404);
  }

  if(!user.favorites.some(fav => fav.id === newFavorite.id)) {
   user.favorites.push(newFavorite)
  } else {
    user.favorites = user.favorites.filter(fav => fav.id !== newFavorite.id)
  }
  response.status(201).json(user.favorites);
});

app.patch('/api/v1/users/watched/:id', (request, response) => {
  const { id } = request.params;
  const newWatched = request.body;
  const user = app.locals.users.find(user => user.id === id);
  if (!user) {
    return response.sendStatus(404);
  }

  if(!user.watched.some(watch => watch.id === newWatched.id)) {
   user.watched.push(newWatched)
  } else {
    user.watched = user.watched.filter(watch => watch.id !== newWatched.id)
  }
  response.status(201).json(user.watched);
});
