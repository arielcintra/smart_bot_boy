import React, { useState } from 'react';
import { Button, Box, InputLabel, Input } from '@mui/material';

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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <Box>
            <InputLabel htmlFor="upload-file">Choose a file</InputLabel>
            <Input
                id="upload-file"
                type="file"
                fullWidth
                onChange={handleFileChange}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleUpload}
                sx={{ mt: 1 }}
            >
                Upload File
            </Button>
        </Box>
    );
};

export default UploadFile;