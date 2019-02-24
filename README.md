# auth-FullStack
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/inPhoenix/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

    auth-fullstack
    https://auth-fullstack.herokuapp.com
    
    
A full stacker authentication system with NodeJs/ReactJs/PostgreSQL

Heroku Deployment

    heroku addons:create heroku-postgresql:hobby-dev -a auth-fullstack
    cat users.sql | heroku pg:psql -a auth-fullstack
    
Create DB_PASSWORD with the correct instance password.
    
    https://data.heroku.com/ -> Settings -> View Credentials

Update the secrets/db_configuration.js file.

Always run:

    git push heroku master
    heroku logs --tail
