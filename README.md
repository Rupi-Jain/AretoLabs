# MyTweeter

## Introduction

It is a platform to send and view all or filtered Posts based on selected dates.
As a user:

1. I can log in the app
2. I can view all of my posts.
3. I can create a new post.
4. I can filter my posts based on dates.

## Dependencies

### Front-End:

`React`

- axios
- material-ui/core
- material-ui/icons
- moment
- recoil

### Back-End:

`Flask`

- flask-cors
- flask-sqlalchemy
- flask-marshmallow
- marshmallow-sqlalchemy
- python-dotenv

## Front-end Server Setup

Install dependencies with

- cd `project-directory`
- cd client
- npm install

## Running Webpack Development Server

npm start

## Back-end Server Setup

Install dependencies with

- cd `project directory`
- cd backend
- pipenv shell (install pipenv if not already installed using pip3 install pipenv)
- pip install -r requirements.txt

`Set up database`

- flask db_drop (can be used if required)
- flask db_create
- flask db_seed

## Running Flask Development Server

flask run

Database has two users (Arnold and Jacqline) with one post each.
A user can log in with it's name like Arnold and can use app.
