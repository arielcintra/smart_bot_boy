# Smart Boy Bot 🤖

Smart Boy Bot is a Flask-based NLP application that leverages semantic embeddings and lightweight fine-tuning to process, store, and retrieve contextual information from documents, URLs, and images.

Built with production-readiness in mind, this project demonstrates practical usage of sentence transformers, file parsing, and semantic search with MongoDB integration.

## 🚀 Features

- Upload and process files (`.pdf`, `.docx`, `.txt`, `.csv`, `.xlsx`, `.jpg`, `.png`)
- Extract text using file-specific parsing and OCR for images
- Generate and store embeddings using SentenceTransformers
- Fine-tune the model dynamically with processed content
- Retrieve answers via semantic similarity
- Clean REST API ready for frontend or external integration

## ⚙️ Tech Stack

- Python 3.10
- Flask + Gunicorn
- SentenceTransformers (`paraphrase-MiniLM-L6-v2`)
- PyTorch
- MongoDB
- Tesseract OCR
- BeautifulSoup (web scraping)

## 🧪 API Endpoints

| Endpoint           | Method | Description                     |
|--------------------|--------|---------------------------------|
| `/process_file`    | POST   | Upload and process a file       |
| `/process_text`    | POST   | Submit raw text to process      |
| `/process_link`    | POST   | Scrape and process URL content  |
| `/search_answer`   | POST   | Submit question to retrieve info|

## 🧰 Project Structure

smart-boy-bot/
├── app/
│ ├── services/
│ │ ├── document_service.py
│ │ ├── nlp_model.py
│ │ └── extractors.py
│ ├── repository/
│ │ └── document_repository.py
│ └── routes.py
├── templates/
├── uploads/
├── run.py
├── requirements.txt
├── Dockerfile
└── README.md


## 🐳 Docker Setup

> Recommended for consistent and isolated deployments

```bash
docker build -t smart-boy-bot .
docker run -p 3978:3978 smart-boy-bot
```

## 🖥️ Manual Setup

```bash
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python run.py
```

## Why did I created this project?

This project showcases key skills in:

- Natural Language Processing (NLP)
- Document parsing and vectorization
- Embedding-based semantic search
- Backend architecture and microservice-ready design

It's ideal for demonstrating expertise in applied AI, LLM groundwork, and production-quality ML pipelines.

## 📄 License
MIT © Ariel Cintra