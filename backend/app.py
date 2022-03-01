from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from datetime import datetime
from models.database import db, ma, User, Post
from controllers.user_route import UserRoute
from controllers.post_route import PostRoute
import os

# Init app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#Database

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DB_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


#init db
db.app = app
db.init_app(app)
#Init ma
ma.app = app
ma.init_app(app)

#Get all Users
@cross_origin
@app.route('/user', methods=['GET'])
def user():
  user = UserRoute.get_users()
  return user

#Create a User
@cross_origin
@app.route('/user', methods=['POST'])
def add_user():
  user = UserRoute.add_user()
  return user

#Get Single Users
@cross_origin
@app.route('/user/<name>', methods=['GET'])
def get_user(name):
  user = UserRoute.get_user(name)
  return user

#Create a Post
@cross_origin
@app.route('/post', methods=['POST'])
def add_post():
  user = PostRoute.add_post()
  return user

#Get all posts
@cross_origin
@app.route('/post', methods=['GET'])
def get_posts():
  user = PostRoute.get_posts()
  return user

#Get Posts for Single User
@cross_origin
@app.route('/posts/<id>', methods=['GET'])
def get_post(id):
  user = PostRoute.get_post(id)
  return user
#Get Posts Based on dates
@cross_origin
@app.route('/posts/dates/', methods=['GET'])
def get_filtered_post():
  user = PostRoute.get_filtered_post()
  return user


# Run Server
if __name__ == '__main__':
  app.run(debug=True)


######Database Creation

@app.cli.command('db_drop')
def db_drop():
    db.drop_all()
    print('Database dropped!')

@app.cli.command('db_create')
def db_create():
    db.create_all()
    print('Database created!')

@app.cli.command('db_seed')
def db_seed():
    user1 = User(name='Arnold')
    user2 = User(name='Jacqline')
    post1 = Post(text="How are you?", user_id=1,time="12:30")
    post2 = Post(text="I am good.How are you?", user_id=2, time="12:35")  

    db.session.add(user1)
    db.session.add(user2)
    db.session.add(post1)
    db.session.add(post2)
    db.session.commit()
    print('Database seeded!')