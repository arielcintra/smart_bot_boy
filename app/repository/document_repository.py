from pymongo import MongoClient
import os

class DocumentRepository:
    def __init__(self):
        self.client = MongoClient(os.getenv("MONGO_URI", "mongodb://localhost:27017/"))
        self.db = self.client['smart-boy_db']
        self.collection = self.db['SmartBoy']

    def insert_document(self, text, embedding):
        self.collection.insert_one({"text": text, "embedding": embedding.tolist()})

    def find_all_documents(self):
        return self.collection.find()

    def get_all_texts(self):
        return [doc['text'] for doc in self.collection.find()]