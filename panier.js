//-------------------- Affichage dans le panier

    //Récupération de l'élément produit dans le localStorage
let produitEnregistre = JSON.parse(localStorage.getItem("produit"))
// JSON.parse pour convertir les données au format JSON qui sont dans le local storage
    
let panierHtml = document.getElementById("produit_select")


function checkQty(liste, option){
    let total = 1
    for(l = 0; l < liste.length; l++) {
       if(liste[l] == option) {
           total++
       }
    }console.log(total)
return total

}

if(produitEnregistre === null || produitEnregistre == 0){
    let phrasePanierVide =`
    <div class="panier_vide">
        <p>Votre panier est vide !</p>
    </div>`

panierHtml.innerHTML = phrasePanierVide

  } else {
    for (let i = 0; i < produitEnregistre.length; i++) {
        let qty = checkQty (produitEnregistre, produitEnregistre[i].option)
             
      document.getElementById("produit_select").innerHTML += `
        <div class="produit__panier">
            <div class="picture">
                <img src="${produitEnregistre[i].photo}" alt="peluche"/>
            </div>
            <div class="content">    
                <p>${produitEnregistre[i].nom}</p>
                <p>Option : ${produitEnregistre[i].option}</p>
                <p>Prix : ${produitEnregistre[i].prix} €</p>
                <p>Quantité : ${qty} </p>
            </div>
            <div class="trash">    
                <button class="btn_delete"> <i class="fas fa-trash-alt"></i> </button>
            </div>
        </div>
        `
    }
  }

//------------------ Suppr article choisis

//---- Selection de tous les boutons supprimer
let btnDelete = document.querySelectorAll(".btn_delete")
console.log(btnDelete)

for(let j = 0; j < btnDelete.length; j++) {
    btnDelete[j].addEventListener("click", (event) => {
        event.preventDefault()

        //selection de l'iD qui va être supprimer au click
        let id_select_delete = produitEnregistre[j].option
        console.log(id_select_delete)

        // avec la methode filter je selectionne les éléments à garger et je supprime l'élément ou le btn a été cliqué
        produitEnregistre = produitEnregistre.filter(
            (elem => elem.option !== id_select_delete)
        )
       

        //on envoie la variable dans le localStorage en la transfomrant au format JSON dans la clé "produit"
        localStorage.setItem("produit",JSON.stringify(produitEnregistre))

        //alert pour avertir la suppression et raffraichissement de la page
        alert("Produit supprimé du panier")
        window.location.href="panier.html"
    })
}

//----------- Suppr TOUS les articles
// création du bouton et insertion à l'intérieur après son dernier enfant 
let btnDeleteAll = ` 
<div class="btn_delete_all_div">
    <button class="btn_delete_all">Vider le panier</button>
</div>`

panierHtml.insertAdjacentHTML("beforeend", btnDeleteAll)

// selectionner le bouton tout supprimer
let selectBntDeleteAll = document.querySelector(".btn_delete_all")

//suppression de la key "produit"
selectBntDeleteAll.addEventListener("click", (e) =>{
    e.preventDefault

    localStorage.removeItem("produit")

    alert("Le panier à été vidé !")
    window.location.href="panier.html"

})

//------------- Prix total

function afficherPrixTotal () {
    let sum = 0;
    for (let k = 0; k < produitEnregistre.length; k++ ) {
        sum = sum + produitEnregistre[k].prix;
    }
    
    const prixTotal = `
    <div class="total_price">
        <p>Sous-total ( ${produitEnregistre.length} article(s) ) : ${sum} €</p>
    </div>
    <div class="btn_check_div">
        <button onclick="displayForm()" class="btn_check">Valider votre panier</button>
    </div>
    `
    panierHtml.insertAdjacentHTML("afterend", prixTotal)


}
      afficherPrixTotal()

 
// ----------- Formulaire

let positionHtml = document.getElementById("formulaire")

function displayForm () {
    addEventListener("click", (event) => {
        event.preventDefault()

    const formulaire = `
    
    <div class="formulaire_limite">
        <h2>Formulaire de validation de commande</h2>

            <form action="post">
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required>

                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>

                <label for="adresse">Adresse :</label>
                <input type="text" id="prenom" name="adresse" required>

                <label for="ville">Ville :</label>
                <input type="text" id="ville" name="ville" required>

                <label for="codePostal">Code Postal :</label>
                <input type="text" id="codePostal" name="codePostal" required>

                <label for="email">E-mail :</label>
                <input type="text" id="email" name="email" required>

                <button onclick="envoyerForm()" class="btn_send_form">Passer la commande</button>
            </form>
    </div>        
    `
    positionHtml.innerHTML = formulaire
    })
}

displayForm()

function envoyerForm () {}
