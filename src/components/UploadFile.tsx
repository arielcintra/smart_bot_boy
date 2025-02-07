import React from 'react';

interface UploadFileProps {
    onUpload: (file: File) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ onUpload }) => {
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onUpload(e.target.files[0]);
        }
    };

    return (
        <div style={{ marginTop: '10px' }}>
            <input type="file" id="upload-file" onChange={handleUpload} />
            <button style={{ padding: '10px 20px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', borderRadius: '5px', marginTop: '10px' }}>
                Upload Document
            </button>
        </div>
    );
};

export default UploadFile;