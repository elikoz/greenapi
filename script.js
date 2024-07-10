function getSettings() {
    const apiUrl = 'https://1103.api.green-api.com';
    const idInstance = document.querySelector('input[placeholder="idInstance"]').value;
    const apiTokenInstance = document.querySelector('input[placeholder="ApiTokenInstance"]').value;

    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('resultsArea').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            document.getElementById('resultsArea').innerText = 'Error occurred. Please check the console for details.';
        });
}
function getStateInstance() {
    const apiUrl = 'https://1103.api.green-api.com';
    const idInstance = document.querySelector('input[placeholder="idInstance"]').value;
    const apiTokenInstance = document.querySelector('input[placeholder="ApiTokenInstance"]').value;

    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('resultsArea').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            document.getElementById('resultsArea').innerText = 'Error occurred. Please check the console for more information.';
        });
}
function sendMessage() {
    const apiUrl = 'https://1103.api.green-api.com';
    const idInstance = document.querySelector('input[placeholder="idInstance"]').value;
    const apiTokenInstance = document.querySelector('input[placeholder="ApiTokenInstance"]').value;
    let chatId = document.querySelector('input[placeholder="chatIdInput"]').value;
    chatId = chatId + "@c.us"; 
    const message = document.querySelector('input[placeholder="messageInput"]').value;


    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId, message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('resultsArea').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        document.getElementById('resultsArea').innerText = 'Error occurred. Please check the console for more information.';
    });
}
function sendFileByUrl() {
    const apiUrl = 'https://1103.api.green-api.com';
    const idInstance = document.querySelector('input[placeholder="idInstance"]').value;
    const apiTokenInstance = document.querySelector('input[placeholder="ApiTokenInstance"]').value;
    
    let chatId = document.querySelector('input[placeholder="chatId"]').value;
    chatId = chatId + "@c.us"; 
    const urlFile = document.querySelector('input[placeholder="urlFileInput"]').value;
    const fileName = document.querySelector('input[placeholder="fileName"]').value;

    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId, urlFile, fileName })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('resultsArea').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        document.getElementById('resultsArea').innerText = 'Error occurred. Please check the console for more information.';
    });
}
