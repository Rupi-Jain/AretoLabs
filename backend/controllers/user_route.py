from flask import Flask, request, jsonify
from models.database import User
from models.database import users_schema, user_schema

class UserRoute():
  #add user
  def add_user():
    name = request.json['name']
    new_user = User(name)
    db.session.add(new_user)
    db.session.commit()
    return user_schema.jsonify(new_user)

  #Get all Users
  def get_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)

  #Get Single Users
  def get_user(name):
    user_id = User.query.filter(name==User.name).first().id
    user = User.query.get(user_id)
    return user_schema.jsonify(user)

  def get():
    return jsonify({'msg': 'Hello World'})
