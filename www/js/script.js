const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const result = document.getElementById('result');
const dateLivraison = document.getElementById('dateLivraison');
const today = new Date(); 

const delaiLivraison = 691200000; // équivalence de 8 jours en millisecondes car date de livraison doit être supérieur à 8 jours

result.style.color ="#cf2d4f";

btnEnvoyer.addEventListener('click', controlerAvantValidation)

function controlerAvantValidation(event) {
    event.preventDefault();

    result.innerHTML = "";

    if (nom.value.length < 3 || nom.value.length < 3 ) {
        result.innerHTML= `Le nom ou le prénom est trop court (3 caractères minimum)`;
    }


    let dateLivraisonMs = dateLivraison.value; // Récupère la valeur du champ sous forme de chaine de caractères
    dateLivraisonMs = Date.parse(dateLivraisonMs); // Convertit la chaine et nombre de millisecondes depuis EPOCH
    dateLivraisonMs = new Date(dateLivraisonMs); // Crée une instance de Date 

    if (dateLivraisonMS - today.getTime() < delaiLivraison ){
        result.innerHTML= `La date de livraison doit être supérieur à 8 jours`;

    }
}




