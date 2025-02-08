import React, { useState } from 'react';

interface InputBoyProps {
    onSend: (text: string) => void;
    placeholder: string;
}

const InputBoy: React.FC<InputBoyProps> = ({ onSend, placeholder }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <div style={{ width: '80%', maxWidth: '600px', marginTop: '10px' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={placeholder}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <button onClick={handleSend} style={{ padding: '10px 20px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', borderRadius: '5px', marginTop: '10px' }}>
                Send
            </button>
        </div>
    );
};

export default InputBoy;