from flask import Flask, render_template, request
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client['user_registration']
collection = db['registrations']

# Show the registration form
@app.route('/')
def index():
    return render_template('index.html')

# Handle form submission
@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['fname']
    phone = request.form['phone']
    email = request.form['email']
    zip_code = request.form['zip']
    password = request.form['password']
    confirm_password = request.form['confirmPassword']
    state = request.form['States']
    gender = request.form['Gender']

    # Insert data into MongoDB
    user_data = {
        "name": name,
        "phone": phone,
        "email": email,
        "zip_code": zip_code,
        "password": password,
        "confirm_password": confirm_password,
        "state": state,
        "gender": gender
    }

    collection.insert_one(user_data)

    return render_template('thankyou.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
