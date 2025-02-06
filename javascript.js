document.getElementById('send-button').addEventListener('click', function() {
    var userMessage = document.getElementById('input-box').value;
    if (userMessage.trim() === "") return;

    displayMessage(userMessage, 'user-message');

    fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: userMessage
        })
    })
    .then(response => response.json())
    .then(data => {
        var botResponse = data.text;
        displayMessage(botResponse, 'bot-message');
    });

    document.getElementById('input-box').value = '';
});

document.getElementById('upload-button').addEventListener('click', function() {
    var fileInput = document.getElementById('upload-file');
    var formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        displayMessage(data, 'bot-message');
    });
});

document.getElementById('upload-link-button').addEventListener('click', function() {
    var url = document.getElementById('link-input').value;
    if (url.trim() === "") return;

    fetch('/upload_link', {
        method: 'POST',
        body: new URLSearchParams({ 'url': url })
    })
    .then(response => response.text())
    .then(data => {
        displayMessage(data, 'bot-message');
    });
});

function displayMessage(message, className) {
    var messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.textContent = message;
    document.getElementById('chatbox').appendChild(messageElement);
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}
