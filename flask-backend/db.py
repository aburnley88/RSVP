from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class RSVP(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)

    def __repr__(self):
        return f'<RSVP {self.name}>'

def init_db(app):
    with app.app_context():
        db.create_all()

