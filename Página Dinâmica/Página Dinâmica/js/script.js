document.addEventListener('DOMContentLoaded', function () {

    const get = { method: 'GET' };
    const url = 'https://jsonplaceholder.typicode.com/';
    const posts = 'posts/1';
    const clientData = document.getElementById('infoClient');
    const infoDisplay = document.getElementById('infoDisplay');

    async function responseHolder(response) {
        const data = await response.json();
        return data;
    };

});

