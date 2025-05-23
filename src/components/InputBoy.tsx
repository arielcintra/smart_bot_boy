import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface InputBoyProps {
    onSend: (text: string) => void;
    placeholder: string;
}

const InputBoy: React.FC<InputBoyProps> = ({ onSend, placeholder }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        console.log("handleSend triggered");
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <>
            <TextField
                fullWidth
                variant="outlined"
                label={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                    console.log("SEND button clicked");
                    handleSend();
                }}
                sx={{ mt: 1 }}
            >
                Send
            </Button>
        </>
    );
};

export default InputBoy;