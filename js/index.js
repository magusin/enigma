const init = () => {
    document.addEventListener('submit', handleSelectNameFormSubmit);
}

function handleSelectNameFormSubmit (evt) {
    evt.preventDefault();

    // récupérer le prénom et l'ajouter dans les classes "prenom"
    document.querySelector('.prenom').innerText = document.querySelector('#prenom').value;

    // récupérer le prénom et l'ajouter dans les classes "nom"
    document.querySelector('.nom').innerText = document.querySelector('#nom').value;

    // cacher la div #beforegames
    document.querySelector('#beforegames').classList.add('hidden');

    // afficher la div #game
    document.querySelector('#game').classList.remove('hidden');
}


