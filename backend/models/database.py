from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 
from sqlalchemy.sql import table, column
from sqlalchemy import String, Integer, Date
from datetime import datetime

#init db
db= SQLAlchemy()
#Init ma
ma = Marshmallow()


#User Class/Model
class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), unique=True)

  def __init__(self, name):
    self.name = name

    
# User Schema
class UserSchema(ma.Schema):
  class Meta:
    fields = ('id','name')

#Init Schema
user_schema = UserSchema()
users_schema = UserSchema(many=True)

#Post Class/Model
class Post(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  text = db.Column(db.Text)
  time =  db.Column(db.String)
  created_at = db.Column(db.Date, default=datetime.now())
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

  def __init__(self, text, time, user_id):
    self.text = text
    self.time = time
    self.user_id = user_id
    
# Post Schema
class PostSchema(ma.Schema):
  class Meta:
    fields = ('id', 'text', 'time', 'created_at', 'user_id')

#Init Schema
post_schema = PostSchema()
posts_schema = PostSchema(many=True)
