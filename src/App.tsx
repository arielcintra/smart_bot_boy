import React, { useState } from 'react';
import SmartBoy from './components/SmartBoy.tsx';
import InputBoy from './components/InputBoy.tsx';
import UploadLink from './components/UploadLink.tsx';
import UploadFile from './components/UploadFile';
import { processText, processLink, searchAnswer, uploadFile } from './api.ts';

const App: React.FC = () => {
    const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

    const handleSendText = async (text: string) => {
        setMessages((prev) => [...prev, { text: text, isUser: true }]);
        const response = await processText(text);
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
    };

    const handleSendLink = async (url: string) => {
        setMessages((prev) => [...prev, { text: `Uploading link: ${url}`, isUser: true }]);
        const response = await processLink(url);
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
    };

    const handleSearchAnswer = async (question: string) => {
        setMessages((prev) => [...prev, { text: question, isUser: true }]);
        const answer = await searchAnswer(question);
        setMessages((prev) => [...prev, { text: answer, isUser: false }]);
    };

    const handleUploadFile = async (file: File) => {
        setMessages((prev) => [...prev, { text: `Uploading file: ${file.name}`, isUser: true }]);
        const response = await uploadFile(file);
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', margin: 0, backgroundColor: '#f7f7f7' }}>
            <h2>Chatbot Interface</h2>
            <SmartBoy messages={messages} />
            <InputBoy onSend={handleSearchAnswer} placeholder="Talk with, my blessing..." />
            <UploadFile onUpload={handleUploadFile} />
            <UploadLink onUpload={handleSendLink} />
        </div>
    );
};

export default App;