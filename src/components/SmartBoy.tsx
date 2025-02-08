import React from 'react';

interface SmartBoyProps {
    messages: Array<{ text: string; isUser: boolean }>;
}

const SmartBoy: React.FC<SmartBoyProps> = ({ messages }) => {
    return (
        <div id="smartboy" style={{ width: '80%', maxWidth: '600px', height: '400px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', overflowY: 'auto', backgroundColor: 'white', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`} style={{ padding: '5px', margin: '5px 0', backgroundColor: msg.isUser ? '#e1f7d5' : '#f0f0f0', alignSelf: msg.isUser ? 'flex-end' : 'flex-start' }}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default SmartBoy;