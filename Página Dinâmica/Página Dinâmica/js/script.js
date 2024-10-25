document.addEventListener('DOMContentLoaded', function () {
    var selecao1 = document.getElementById('catButton');
    var selecao2 = document.getElementById('dogButton');
    var cat = document.getElementById('cat');
    var dog = document.getElementById('dog');
    var nomeAnimal = document.getElementById('name');
    var focado = document.getElementById('focado');
    var finalPagina = document.getElementById('fim');
    

    selecao1.addEventListener('mouseover', function () {
        if (cat) {
            cat.style.transform = 'scale(1.1)';
        }
    });

    selecao1.addEventListener('mouseout', function () {
        if (cat) {
            cat.style.transform = 'scale(1)';
        }
    });

    selecao1.addEventListener('click', function () {
        if (dog && cat) {
            dog.style.display = 'none';
            cat.style.display = 'inline';
        }
    });

    selecao2.addEventListener('mouseover', function () {
        if (dog) {
            dog.style.transform = 'scale(1.1)';
        }
    });

    selecao2.addEventListener('mouseout', function () {
        if (dog) {
            dog.style.transform = 'scale(1)';
        }
    });

    selecao2.addEventListener('click', function () {
        if (dog && cat) {
            cat.style.display = 'none';
            dog.style.display = 'inline';
        }
    });

nomeAnimal.addEventListener('focus', function () {
    focado.textContent = 'Pense em um nome com carinho ❣'
});

nomeAnimal.addEventListener('blur', function () {
    if (nomeAnimal.value.trim() !== '') {
        focado.textContent = 'Uau! Que lindo nome!🥰'
    }
    else {
        focado.textContent = 'Você não está se esquecendo de algo? 🤔'
    }
});

finalPagina.addEventListener('click', function () {
    var nome = nomeAnimal.value.trim();
    if (nome === '') {
        focado.textContent = 'Ei! Não esqueça de nomear seu bichinho 🥺';
        return;
    }

    var animalAparecer = (document.getElementById('cat').style.display === 'inline') ? 'cat' : 'dog';
    var animalEspecie = (animalAparecer === 'cat') ? 'gatinho' : 'cachorrinho';

    document.body.innerHTML =
        `<img src="./img/${animalAparecer}.jpg" id="${animalAparecer}">
    <h1> Parabéns! O ${animalEspecie}, ${nome} é o seu mais novo bichinho 💌`;

});

});




