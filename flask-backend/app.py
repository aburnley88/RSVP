from flask import Flask, render_template, request, jsonify
from db import db, RSVP  # Importing the RSVP class as well

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///rsvp.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)  # Initialize the database with the app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/rsvp', methods=['POST'])
def rsvp():
    data = request.get_json()

    name = data['name'].upper()
    email = data['email'].upper()

    # Check if name and email already exist in the database
    existing_rsvp = RSVP.query.filter_by(name=name, email=email).first()

    if existing_rsvp:
        return jsonify({"message": "RSVP already exists!"}), 400

    new_rsvp = RSVP(name=name, email=email)
    db.session.add(new_rsvp)
    db.session.commit()

    return jsonify({"message": "RSVP saved successfully!"}), 200

@app.route('/rsvps', methods=['GET'])
def get_rsvps():
    rsvps = RSVP.query.all()
    return jsonify([{'name': rsvp.name, 'email': rsvp.email} for rsvp in rsvps]), 200

if __name__ == '__main__':
    app.run(debug=True)
