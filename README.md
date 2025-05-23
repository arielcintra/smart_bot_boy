# SmartBoy 🤖 — Chatbot Frontend (Just for Fun)

This is the frontend interface for **SmartBoy**, a conversational AI powered by NLP and semantic search. Built with **React** and **TypeScript**, it connects to a Flask backend that processes text, links, and files using embedding models and automatic fine-tuning.

---

## ✨ Features

1. **Text Processing**
   - Submit raw text to be vectorized and stored in a semantic database.
   - Automatically triggers model fine-tuning with the new data.

2. **Link Extraction**
   - Submit web links (URLs) to extract content from webpages.
   - The content is stored and used for fine-tuning.

3. **File Upload**
   - Upload `.txt`, `.pdf`, `.docx`, `.jpg`, and other file types.
   - Extracted content is embedded and stored.

4. **Semantic Q&A**
   - Ask questions and retrieve contextually relevant answers based on processed data.

---

## 🛠 Technologies Used

- **React + TypeScript** — Component-based frontend
- **CSS** — Styling and layout
- **Fetch API** — Communication with Flask backend
- **HashRouter** — Client-side routing (for GitHub Pages compatibility)

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js** — [Download here](https://nodejs.org/)
- **Backend running** — The Flask backend must be active at `http://localhost:3978` (or update the `.env` file)

### 🔧 Setup

1. **Clone the repository**

```bash
git clone https://github.com/arielcintra/smart_bot_boy.git
cd smart_bot_boy
```

2. **Install dependencies**

```bash
npm run install
```

3. **Start development server**

```bash
npm start
```

4. **Access locally**

Open your browser at http://localhost:3000

### 📁 Project Structure

src/
├── components/
│   ├── SmartBoy.tsx       # Chat display component
│   ├── InputBoy.tsx       # Text input field
│   ├── UploadLink.tsx     # Link submission
│   └── UploadFile.tsx     # File uploader
├── App.tsx                # Main layout + logic integration
├── api.ts                 # API utilities (calls to Flask)
├── index.tsx              # ReactDOM entry point
├── styles.css             # Global styles

### 🧪 Usage Guide

- Send Text: Type into the input and click “Send”.
- Submit URL: Paste a link and click “Upload Link”.
- Upload File: Select a file to parse and store.
- Ask a Question: Type a question to query the semantic index.

### 🌐 Deployment
The frontend is deployed on GitHub Pages:

[🔗 Live Demo](https://arielcintra.github.io/smart_bot_boy/)

### 📬 Contact
Ariel Cintra
📧 [arielcintra@gmail.com](mailto:arielcintra@gmail.com)
🔗 [GitHub @arielcintra](https://github.com/arielcintra)

