# auth-FullStack
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/inPhoenix/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

    A NodeJs/React App with User Registration and Login System
    
Live: 
[https://auth-fullstack.herokuapp.com](https://auth-fullstack.herokuapp.com)

A cookie-based authentication App with React/Node/PostgreSQL

- [x] NodeJs
- [x] ExpressJs
- [x] PostgreSQL
- [x] React Fiber
- [x] React Router
- [x] Redux
- [x] ReduxForm
- [x] TypeScript
- [x] styled-components
    

### Folder Structure

```sh
./                  # Node/Express Files
./docs              # Api documentation
./secrets           # PostgreSQL configuration
./client            # Client React Js Files
  ⌙ index.tsx       # Start Point
./client/src/app    # App
  ⌙ components      # SignIn and Signup pages
  ⌙ scenes          # Main Pages
  ⌙ store           # Redux Main Files
./client/src/sass   # Styles
./client/src/design # Atoms/Organism Pages
```  

A full stacker authentication system with NodeJs/ReactJs/PostgreSQL


### Deployment Notes:

Heroku Deployment

    heroku addons:create heroku-postgresql:hobby-dev -a auth-fullstack
    cat users.sql | heroku pg:psql -a auth-fullstack
    
Create DB_PASSWORD with the correct instance password.
    
    https://data.heroku.com/ -> Settings -> View Credentials

Update the secrets/db_configuration.js file.

Always run:

    git push heroku master
    heroku logs --tail
