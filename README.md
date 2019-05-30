#### An API for the Potterverse

Basic API for Harry Potter related information -- to have a basic personal API for testing when building larger projects.

Built with Node, Express, and Postgres - also using knex.js for routing, handlebars and materialize css for the basic front-end. Written in and linted for ES6.

  ***Available Endpoints:***
  - /data/characters_detailed
  - /data/characters_detailed/:id
  - /data/characters_basic
  - /data/characters_basic/:id
  - /data/hogwarts_houses
  - /data/hogwarts_houses/:id
  - /data/hogwarts_staff
  - /data/hogwarts_staff/:id
  - /data/wizarding_schools/
  - /data/wizarding_schools/:id

https://potterverse.herokuapp.com/ | https://git.heroku.com/potterverse.git


Next Features:
- Add more detail to postgres table relations to enable more specific calls, ex. pulling data on a single character from multiple tables

Additional features determined by the testing needs of the projects using it (ex. [Lighter Lighter Pack React Native Application](https://github.com/thacherT1D/lighter-lighter-pack))


07 May 2019: Upgraded to heroku-18

`$ git clone https://github.com/thacherT1D/potterverse.git`

`$ cd potterverse`

`$ heroku git:remote -a potterverse`

`$ git pull heroku master`

`$ heroku stack:set heroku-18 -a potterverse`

`$ git commit --allow-empty -m "Upgrading to heroku-18"`

`$ git push heroku master`

To check upgrade from project directory: `$ heroku stack`
