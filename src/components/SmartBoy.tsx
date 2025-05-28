import React from 'react';
import { Box, Typography } from '@mui/material';

interface SmartBoyProps {
    messages: Array<{ text: string; isUser: boolean }>;
}

const SmartBoy: React.FC<SmartBoyProps> = ({ messages }) => {
    return (
        <Box display="flex" flexDirection="column" gap={1}>
            {messages.map((msg, index) => (
                <Box
                    key={index}
                    alignSelf={msg.isUser ? 'flex-end' : 'flex-start'}
                    bgcolor={msg.isUser ? '#d1f7c4' : '#f1f1f1'}
                    px={2}
                    py={1}
                    borderRadius={2}
                    maxWidth="80%"
                >
                    <Typography variant="body1">{msg.text}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default SmartBoy;