from flask import Flask, redirect, url_for, request
from db.dbclient import get_collection
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

users = get_collection()


@app.route('/getusers/')
def getusers():
    users_json = []

    if users.find({}):
        for user in users.find({}).sort('first_name'):
            m_user = {}
            m_user['id'] = str(user['_id'])
            m_user['first_name'] = user['first_name']
            m_user['last_name'] = user['last_name']
            m_user['location'] = user['location']
            m_user['handle'] = user['handle']
            users_json.append(m_user)

    return json.dumps(users_json)


@app.route('/adduser/', methods=['POST'])
def adduser():
    request_data = request.get_json()
    new_user = {}
    new_user['first_name'] = request_data.get('first_name', '')
    new_user['last_name'] = request_data.get('last_name', '')
    new_user['location'] = request_data.get('location', '')
    new_user['handle'] = request_data.get('handle', '')

    users.insert_one(new_user)
    return redirect(url_for('getusers'))


if __name__ == "__main__":
    app.run(debug=True)
