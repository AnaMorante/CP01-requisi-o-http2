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

    clientData.addEventListener('click', function(){
        fetch(url + posts, get)
            .then(responseHolder)
            .then(function (data) {
                infoDisplay.innerHTML = `
                        <h3>Dados do Adotante:</h3>
                        <p><strong>ID:</strong> ${data.id}</p>
                        <p><strong>Título:</strong> ${data.title}</p>
                        <p><strong>Corpo:</strong> ${data.body}</p>
                    `;
            })
    })

});

