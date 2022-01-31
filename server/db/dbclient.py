from pymongo import MongoClient

mongoClient = MongoClient('mongodb://127.0.0.1:27017')
db = mongoClient.get_database('gamers_db')
users = db.get_collection('users')


def get_collection():
    return users
