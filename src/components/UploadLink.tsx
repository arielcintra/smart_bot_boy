import React, { useState } from 'react';

interface UploadLinkProps {
    onUpload: (url: string) => void; 
}

const UploadLink: React.FC<UploadLinkProps> = ({ onUpload }) => {
    const [url, setUrl] = useState(''); 

    const handleUpload = () => {
        if (url.trim()) { 
            onUpload(url);
            setUrl(''); 
        }
    };

    return (
        <div style={{ marginTop: '10px' }}>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter URL"
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <button
                onClick={handleUpload}
                style={{
                    padding: '10px 20px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: 'white',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    marginTop: '10px'
                }}
            >
                Upload Link
            </button>
        </div>
    );
};

export default UploadLink;