// const app = {
//     init: function() {
       // récupérer le formulaire
        

//         document.querySelector('#beforegames .start').addEventListener('submit', app.handleSelectNameFormSubmit);
        
//     },
    
//     handleSelectNameFormSubmit: function (evt) {
//         evt.preventDefault();

       // récupérer le prénom et l'ajouter dans les classes "prenom"
//         document.querySelector('#game .prenom').innerText = document.querySelector('#prenom').value;

        // récupérer le prénom et l'ajouter dans les classes "nom"
//         document.querySelector('#game .nom').innerText = document.querySelector('#nom').value;

        // cacher la div #beforegames
//         document.querySelector('#beforegames').classList.add('hidden');

         // afficher la div #game
//         document.querySelector('#game').classList.remove('hidden');
//     },

// }

const init = () => {
    document.addEventListener('submit', handleSelectNameFormSubmit);
}

function handleSelectNameFormSubmit (evt) {
    evt.preventDefault();

    // récupérer le prénom et l'ajouter dans les classes "prenom"
    document.querySelector('#game .prenom').innerText = document.querySelector('#prenom').value;

    // récupérer le prénom et l'ajouter dans les classes "nom"
    document.querySelector('#game .nom').innerText = document.querySelector('#nom').value;

    // cacher la div #beforegames
    document.querySelector('#beforegames').classList.add('hidden');

    // afficher la div #game
    document.querySelector('#game').classList.remove('hidden');
}





// lorsque la page est chargée, on initialise notre application
// document.addEventListener('DOMContentLoaded', app.init);