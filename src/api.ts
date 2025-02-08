const API_BASE_URL = 'http://127.0.0.1:3978';

export const processText = async (text: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/process_text`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data.message;
};

export const processLink = async (url: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/process_link`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    });
    const data = await response.json();
    return data.message;
};

export const searchAnswer = async (question: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/search_answer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });
    const data = await response.json();
    return data.answer;
};

export const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload_file', {
        method: 'POST',
        body: formData,
    });
    const data = await response.json();
    return data.message;
};