# Rancid Tomatillos API

## Created by:
[Kelly Dinneen](https://github.com/kellydinneen) 

[Lucas Merchant](https://github.com/lbmerchant93) 

### Technologies Used
**Build**: Express.js

**Deployment**: Heroku

### Introduction
This repository is the developers' first time using Express.js to build out their own RESTful API. It is used in conjunction in their Mod 3 Rancid Tomatillos project that can be found [here](https://github.com/kellydinneen/rancid-tomatillos).

### Setup Instructions
- `git clone` this repo 
- `cd` into the rancid-tomatillos-api-v2 repo
- run `npm start` to run the server locally

OR

We have deployed the API through Heroku. This way you don't have to clone it locally in order to use!
- [Rancid Tomatillos API](https://rancid-tomatillos-api-lm-kd.herokuapp.com/)

### Endpoints 
| Purpose | URL | Verb | Request Body | Sample Response (happy path) |
| ------- | --- | ---- | ------------ | ---------------------------- |
| Get all of the users | https://rancid-tomatillos-api-lm-kd.herokuapp.com/api/v1/users | GET | N/A | { "users": [ { "id": "u1", "name": "Jessica Candel", "username": "Jessica", "password": "Candel", "favorites": [] }, ... ] } |
| Get a specific user based on id | https://rancid-tomatillos-api-lm-kd.herokuapp.com/api/v1/users/u1 | GET | N/A | { "id": "u1", "name": "Jessica Candel", "username": "Jessica", "password": "Candel", "favorites": [] } |
| Add a movie to a user's favorites | https://rancid-tomatillos-api-lm-kd.herokuapp.com/api/v1/users/u1 | PATCH | { "movie": { "id": 726739, "title": "Cats & Dogs 3: Paws Unite", "poster_path": "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg", "backdrop_path": "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg", "release_date": "2020-10-02", "overview": "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.", "genres": ["Comedy","Action"], "budget": 0, "revenue": 0, "runtime": 84, "tagline": "", "average_rating": 7 } } | { "id": "u1", "name": "Jessica Candel", "username": "Jessica", "password": "Candel", "favorites": [ { "id": 726739, "title": "Cats & Dogs 3: Paws Unite", "poster_path": "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg", ...] } |
