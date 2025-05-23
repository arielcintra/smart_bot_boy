from app.repository.document_repository import DocumentRepository
from app.services.extractors import TextExtractorFactory
from app.services.nlp_model import NLPModel
from bs4 import BeautifulSoup
import requests
import torch
from sentence_transformers import util

repository = DocumentRepository()
nlp_model = NLPModel()

class DocumentService:
    @staticmethod
    def process_text(text):
        embedding = nlp_model.encode(text)
        repository.insert_document(text, embedding)
        DocumentService.fine_tune_model()
        return "Text processed and stored successfully!"

    @staticmethod
    def process_file(file):
        ext = file.filename.rsplit('.', 1)[-1].lower()
        extractor = TextExtractorFactory.get_extractor(ext)
        if extractor:
            text = extractor.extract_text(file)
            return DocumentService.process_text(text)
        return "Invalid or empty file."

    @staticmethod
    def process_link(url):
        text = DocumentService.extract_text_from_link(url)
        if text and len(text) > 0:
            embedding = nlp_model.encode(text)
            repository.insert_document(text, embedding)
            DocumentService.fine_tune_model()
            return "Link content processed and stored successfully!"
        return "No content retrieved from the URL."

    @staticmethod
    def extract_text_from_link(url):
        try:
            response = requests.get(url)
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                paragraphs = soup.find_all('p')
                text = "\n".join([para.get_text() for para in paragraphs])
                return text
            else:
                return "Failed to retrieve the webpage."
        except Exception as e:
            return f"An error occurred: {e}"

    @staticmethod
    def search_answer(question):
        question_embedding = nlp_model.encode(question)
        documents = repository.find_all_documents()
        similarities = []

        for doc in documents:
            doc_embedding = doc['embedding']
            similarity = util.pytorch_cos_sim(question_embedding, torch.tensor(doc_embedding))[0][0]
            similarities.append((doc['text'], similarity))

        similarities.sort(key=lambda x: x[1], reverse=True)
        return similarities[0][0] if similarities else "No relevant information found."

    @staticmethod
    def fine_tune_model():
        texts = repository.get_all_texts()
        if texts:
            nlp_model.fine_tune(texts)
            return "Model fine-tuned successfully!"
        return "No data available for fine-tuning."