from flask import request, jsonify, render_template
from app.services.document_service import DocumentService

def setup_routes(app):

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/process_file', methods=['POST'])
    def process_file():
        if 'file' not in request.files:
            return jsonify({"message": "No file uploaded."}), 400
        file = request.files['file']
        return jsonify({"message": DocumentService.process_file(file)})

    @app.route('/process_text', methods=['POST'])
    def process_text():
        text = request.json.get("text", "")
        if text:
            response = DocumentService.process_text(text)
            return jsonify({"message": response}), 200
        return jsonify({"message": "No text provided."}), 400

    @app.route("/process_link", methods=["POST"])
    def process_link():
        url = request.json.get("url", "")
        if url:
            response = DocumentService.process_link(url)
            return jsonify({"message": response}), 200
        return jsonify({"message": "No URL provided."}), 400

    @app.route("/search_answer", methods=["POST"])
    def search_answer():
        question = request.json.get("question", "")
        if question:
            answer = DocumentService.search_answer(question)
            return jsonify({"answer": answer}), 200
        return jsonify({"answer": "No question provided."}), 400