import React, { useState } from 'react';
import SmartBoy from './components/SmartBoy.tsx';
import InputBoy from './components/InputBoy.tsx';
import UploadLink from './components/UploadLink.tsx';
import UploadFile from './components/UploadFile.tsx';
import { processText, processLink, searchAnswer, uploadFile } from './services/api.ts';
import { Container, Typography, Box, Stack, Paper } from '@mui/material';

const App: React.FC = () => {
    console.log("App mounted");
    const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

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
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom mt={4}>
                Hello from SmartBoy 🤖
            </Typography>

            <Paper elevation={3} sx={{ p: 2, minHeight: 300, mb: 2, backgroundColor: '#fafafa' }}>
                <SmartBoy messages={messages} />
            </Paper>

            <Stack spacing={2}>
                <InputBoy onSend={handleSearchAnswer} placeholder="Ask a question..." />
                <UploadFile onUpload={handleUploadFile} />
                <UploadLink onUpload={handleSendLink} />
            </Stack>
        </Container>
    );
};

export default App;