export const processText = async (text: string): Promise<string> => {
    const response = await fetch('/process_text', {
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
    const response = await fetch('/process_link', {
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
    const response = await fetch('/search_answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });
    const data = await response.json();
    return data.answer;
};