from flask import Flask, request, jsonify
from flask_cors import CORS
from rasa.core.agent import Agent

app = Flask(__name__)
CORS(app)  # Bật CORS cho tất cả các route trong ứng dụng Flask
agent = Agent.load("<path_to_your_model>")

@app.route("/webhooks/rest/webhook", methods=["POST"])
def webhook():
    data = request.json
    response = agent.handle_text(data.get("message"))
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
