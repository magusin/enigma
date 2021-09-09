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

function swapImg(elt){
    //Partie de script où tu vérifies si l'image est déjà agrandie ou pas
    //Mais les indications que tu donnes sont trop succinctes pour te donner une piste
    //Puis tu détermines la nouvelle taille de l'image
    elt.width=newWidth;
    elt.height=newHeight;
}


