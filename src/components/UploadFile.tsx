import React, { useState } from 'react';

interface UploadFileProps {
    onUpload: (file: File) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ onUpload }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleUpload = () => {
        if (file) {
            onUpload(file);
            setFile(null);
        }
    };

    return (
        <div style={{ marginTop: '10px' }}>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <button onClick={handleUpload} style={{ padding: '10px 20px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', borderRadius: '5px', marginTop: '10px' }}>
                Upload File
            </button>
        </div>
    );
};

export default UploadFile;