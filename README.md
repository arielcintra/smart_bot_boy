# SmartBoy just for fun
This is the frontend for the Chatbot project, built with React and TypeScript. It connects to a Flask backend to process text, links, and files, and retrieves answers based on a Natural Language Processing (NLP) model that uses automatic fine-tuning.

## Features
1. Process Text: 
        
    - Send text to be processed and stored in the database.
    - The model is automatically fine-tuned after processing.

2. Process Link:

    - Send links to extract content from web pages and store it in the database.

    - The model is automatically fine-tuned after processing.

3. Upload Files:

    - Upload files (e.g., .txt, .docx, .pdf, .jpg, etc.) to extract and store their content.

    - The model is automatically fine-tuned after processing.

4. Search for Answers:

    - Ask questions and get answers based on the stored data and the fine-tuned model.

## Technologies Used
- **React:** JavaScript library for building user interfaces.

- **TypeScript:** Adds static typing to JavaScript, improving code safety and maintainability.

- **CSS:** Styling for components.

- **Fetch API:** For making API calls to the backend.

## How to Run the Project

### Prerequisites

1. **Node.js:** Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

2. **Backend:** The Flask backend must be running. Ensure it is running on port 3978 (or update the URLs in the code).

### Steps to Run
1. **Clone the repository:**

````
git clone https://github.com/${your-username}/smart_bot_boy.git
cd smart_bot_boy
````
2. **Install dependecies:**
````
npm install
````

3. **Start the development server:**
```
npm start
```

4. **Access the application:**

Open your browser and go to http://localhost:3000.

## Project Structure
```
src/
├── components/
│   ├── SmartBoy.tsx          # Component to display chat messages
│   ├── InputBoy.tsx         # Component for text input
│   ├── UploadLink.tsx       # Component for uploading links
│   └── UploadFile.tsx       # Component for uploading files
├── App.tsx                  # Main component that integrates all other components
├── index.tsx                # Entry point of the application
├── styles.css               # Global styles
└── api.ts                   # Functions for API calls to the backend
```

## How to Use

1. **Process Text:**

    - Enter text in the "Enter text to process..." field and click "Send".

    - The text will be processed, and the model will be fine-tuned automatically.

2. **Process Link:**

    - Enter a URL in the "Enter URL" field and click "Upload Link".

    - The content of the webpage will be extracted, and the model will be fine-tuned automatically.

4. **Upload Files:**

    - Click "Choose File" to upload a file (e.g., .txt, .docx, .pdf, .jpg, etc.).

    - The file content will be extracted, and the model will be fine-tuned automatically.

5. **Search for Answers:**

    - Enter a question in the "Ask a question..." field and click "Send".

    - The system will return the most relevant answer based on the stored data.

## Contributing
If you'd like to contribute to this project, follow these steps:

For the frontend:

1. Fork the repository.

2. Create a new branch for your feature (git checkout -b feature/new-feature) from the branch pages.

3. Commit your changes (git commit -m 'Add new feature').

4. Push to the branch (git push origin feature/new-feature).

5. Open a pull request.

For the backend:

1. Send me an email, talk with me a bit about your idea and what you'll intend to change, then I'll give you the google collab link and then we can update the copy in github.

## Contact
If you have any questions or suggestions, feel free to reach out:

Name: Ariel Cintra

Email: arielcintra@gmail.com

GitHub: arielcintra