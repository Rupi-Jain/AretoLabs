#MyTweeter

##Introduction

It is a platform to send and view all or filtered Posts based on selected dates.
As a user:

1. I can log in the app
2. I can view all of my posts.
3. I can create a new post.
4. I can filter my posts based on dates.

##Dependencies

###Front-End:

React

axios

material-ui/core

material-ui/icons

moment

###Back-End:

flask-cors

flask-sqlalchemy

flask-marshmallow

marshmallow-sqlalchemy

python-dotenv

#Front-end Server Setup

Install dependencies with

cd <project-directory>

cd client

npm install

#Running Webpack Development Server

npm start

#Back-end Server Setup

Install dependencies with

cd AretoLabs

cd backend

$ python3 -m venv venv

$ . venv/bin/activate

pip install -r requirements.txt

Setu up database

flask db_drop

flask db_create

flask db_seed

#Running Webpack Development Server

flask run

Database has two users (Arnold and Jacqline) with one post each.
A user can log in with it's name like Arnold and can use app.
