from flask import Flask , jsonify 
from flask_cors import CORS
from Functions.testfunc import get_animal_names

app = Flask(__name__)
CORS(app) 

@app.route('/')
def hello():
    return 'Hello from Flask!'

@app.route('/api/animal_names')
def animal_names_route():
    animal_names = get_animal_names()  # Call the function to get the list of animal names
    return jsonify({"animal_names": animal_names})

if __name__ == '__main__':
    app.run(debug=True)
