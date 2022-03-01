from flask import Flask, request, jsonify
from models.database import Post
from models.database import post_schema, posts_schema
from models.database import db

class PostRoute():
  #Create a Post
  def add_post():
    text = request.json['text']
    time = request.json['time']
    user_id = request.json['user_id']
    new_post = Post(text, time, user_id)
    db.session.add(new_post)
    db.session.commit()
    return post_schema.jsonify(new_post)

  #Get all posts
  def get_posts():
    all_posts = Post.query.all()
    result = posts_schema.dump(all_posts)
    return jsonify(result)

  #Get Posts for Single User
  def get_post(id):
    post = Post.query.filter(Post.user_id==id)
    result = posts_schema.dump(post)
    return jsonify(result)

  def get_filtered_post():
    date1 = str(request.args.get('date1'))
    date2 = str(request.args.get('date2'))
    user_id = request.args.get('user_id')
    posts = Post.query.filter(Post.created_at.between(date1, date2)).filter(Post.user_id==user_id)
    result = posts_schema.dump(posts)
    return jsonify(result)



