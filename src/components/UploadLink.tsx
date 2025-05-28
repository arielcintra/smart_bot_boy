import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

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
        <Box>
            <TextField
                fullWidth
                variant="outlined"
                label="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleUpload}
                sx={{ mt: 1 }}
            >
                Upload Link
            </Button>
        </Box>
    );
};

export default UploadLink;