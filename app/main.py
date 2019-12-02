from flask import Flask, render_template, jsonify
import json

app = Flask(__name__,
            static_folder='./static',
            template_folder='./templates')

@app.route('/api/v1/data')
def data_endpoint():
    stations = open('static/stations.json')
    return jsonify(json.loads(stations.read()))

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def global_route(path):
    return render_template('index.html')
