import unittest
from app import app, db
from models import User

class BasicTests(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.app = app.test_client()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_index(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('Welcome to the Flask API!', str(response.data))

    def test_create_user(self):
        response = self.app.post('/users', json={'username': 'john', 'email': 'john@example.com'})
        self.assertEqual(response.status_code, 201)
        self.assertIn('User created successfully!', str(response.data))

if __name__ == "__main__":
    unittest.main()

