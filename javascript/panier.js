//-------------------- Affichage dans le panier

//Récupération de l'élément produit dans le localStorage
let produitEnregistre = JSON.parse(localStorage.getItem("produit"))
// JSON.parse pour convertir les données au format JSON qui sont dans le local storage

let panierHtml = document.getElementById("produit_select")

if (produitEnregistre === null || produitEnregistre == 0) {
    let phrasePanierVide = `
        <div class="panier_vide">
            <p>Votre panier est vide !</p>
        </div>`

    panierHtml.innerHTML = phrasePanierVide;
}   else {
        for (let i = 0; i < produitEnregistre.length; i++) {
            document.getElementById("produit_select").innerHTML += `
                <div class="produit__panier">
                    <div class="picture">
                        <img src="${produitEnregistre[i].photo}" alt="image peluche"/>
                    </div>
                    <div class="content">    
                        <p>${produitEnregistre[i].nom}</p>
                        <p>Option : ${produitEnregistre[i].option}</p>
                        <p>Prix : ${produitEnregistre[i].prix} €</p>
                        <p>Quantité : ${produitEnregistre[i].quantite} </p>
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

for (let j = 0; j < btnDelete.length; j++) {
    btnDelete[j].addEventListener("click", (event) => {
        event.preventDefault()

        //selection de l'iD qui va être supprimer au click
        let id_select_delete = produitEnregistre[j].option
        console.log(id_select_delete)

        // avec la methode filter je selectionne les éléments à garger et je supprime l'élément ou le btn a été cliqué
        produitEnregistre = produitEnregistre.filter(
        (elem) => elem.option !== id_select_delete
        )

        //on envoie la variable dans le localStorage en la transfomrant au format JSON dans la clé "produit"
        localStorage.setItem("produit", JSON.stringify(produitEnregistre))

        //alert pour avertir la suppression et raffraichissement de la page
        alert("Produit supprimé du panier")
        window.location.href = "panier.html"
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
selectBntDeleteAll.addEventListener("click", (e) => {
  e.preventDefault

  localStorage.removeItem("produit")

  alert("Le panier à été vidé !")
  window.location.href = "panier.html"
})

//------------- Prix total

function afficherPrixTotal() {
    let sum = 0
    let qty = 0
    for (let k = 0; k < produitEnregistre.length; k++) {
        sum = sum + produitEnregistre[k].prix * produitEnregistre[k].quantite
        qty =
        qty +
        (produitEnregistre.length * produitEnregistre[k].quantite) / produitEnregistre.length;
  }

const prixTotal = `
    <div class="total_price">
        <p>Sous-total (${qty} article(s)) : ${sum} €</p>
    </div>
    <div class="btn_check_div">
        <button class="btn_check">Valider votre panier</button>
    </div>
    `

panierHtml.insertAdjacentHTML("afterend", prixTotal);
}
afficherPrixTotal()

// ----------- Formulaire

let positionHtml = document.getElementById("formulaire")
btn = document.querySelector(".btn_check")
console.log(btn)

btn.onclick = function displayForm() {
    const formulaireHtml = `    
        <div class="formulaire_limite">
            <h2>Formulaire de validation de commande</h2>

                <form id="envoie">
                    <label for="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" required>

                    <label for="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required >

                    <label for="adresse">Adresse :</label>
                    <input type="text" id="adresse" name="adresse" required>

                    <label for="ville">Ville :</label>
                    <input type="text" id="ville" name="ville" required>

                    <label for="email">E-mail :</label>
                    <input type="text" id="email" name="email" required>

                    <input type="submit" class="btn_send_form"  name="valider" value="Envoyer" required>
                </form>
                <div id="erreur"></div>
        </div>        
        `
    positionHtml.innerHTML = formulaireHtml

  // ------------------Récupération des valeurs du form

    //Selection du bouton
    let btnFormulaire = document.querySelector(".btn_send_form")
    console.log(btnFormulaire);
    
    btnFormulaire.addEventListener("click", (e) => {
        e.preventDefault()

    const contact = {
        firstName: document.getElementById("nom").value,
        lastName: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        address: document.getElementById("adresse").value,
        city: document.getElementById("ville").value,
    }
    console.log(contact)

    //-----------Controle du formulaire
    const regExPrenomNomVille = (value) => {
      return /^^[A-Za-zéè]+([ \-']?[a-zA-Za-zéè]+[ \-']?[a-zA-Za-zéè]+[ \-']?)[a-zA-Za-zéè]+$/.test(value)
    }

    const regExEmail = (value) => {
      return /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i.test(value)
    }

    const regExAdresse = (value) => {
      return /^[A-Za-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ0-9\s]{5,100}$/.test(value)
    }

    // controle prénom
    function prenomCtrl() {
        let lePrenom = contact.lastName
        if (regExPrenomNomVille(lePrenom)) {
            return true;
        } else {
            alert("Prénom incorrect")
            return false
        }
    }

    //controle nom
    function nomCtrl() {
        let leNom = contact.firstName
        if (regExPrenomNomVille(leNom)) {
            return true
        } else {
            alert("Nom incorrect")
            return false
        }
    }

    //controle adresse
    function adresseCtrl() {
        let laAdresse = contact.address;
        if (regExAdresse(laAdresse)) {
            return true;
        } else {
            alert("Adresse incorrect")
            return false
        }
    }

    //controle ville
    function villeCtrl() {
        let laVille = contact.city;
        if (regExPrenomNomVille(laVille)) {
            return true
        } else {
            alert("Ville incorrect")
            return false
        }
    }

    function emailCtrl() {
        let leEmail = contact.email
        if (regExEmail(leEmail)) {
            return true
        } else {
            alert("Email incorrect")
            return false
        }
    }

    // envoie des donnes formulaire dans le localStorage
    if  (prenomCtrl() &&
        nomCtrl() &&
        villeCtrl() &&
        emailCtrl() &&
        adresseCtrl()
    ){
        localStorage.setItem("contact", JSON.stringify(contact));
    }   else {
            alert("Veuillez remplir correctement tous les champs du formulaire");
            return false
        }
   
    //--------- Envoie resultat a l'api (POST)

    // -------------- Contenant produit panier
    let produitEnregistre = JSON.parse(localStorage.getItem("produit"));

    // -----------Récupération de l'id des produits commandés
    let products = [];
    produitEnregistre.forEach((produitEnregistre) => {
        products.push(produitEnregistre.idProduit);
    });
    console.log(products)
    // -----------------envoie sur le serveur

    let promise = fetch("https://oc-p5-api.herokuapp.com/api/teddies/order", {
        method: "POST",
        body: JSON.stringify({ contact, products }),
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
        // -------------reception des infos de l'api (génération du numéro de commande)

        .then((reponse) => reponse.json())
        .then((reponse) => {
           
        // --------------Message remerciment

            let body = document.body
            body.innerHTML = `
                <header>
                    <div id="display_header">
                        <a href="#">
                            <img src ="images/logo.png" alt="logo de l'entreprise ORINOCO"/>
                        </a>    
                
                </header>
                <main id="merci" class="merci_merci";">
                    <h1>Confirmation de commande</h1>
                        <p> Votre commande à bien été prise en compte <br /> Votre numéro de suivis de commande est le : "${reponse.orderId}"</p>
                        <p>Merci pour votre confiance</p>
                    
                        <button id="btn_acceuil">Retour à l'Accueil</button>
                </main>
                `
            // ---------------Retour à l'acceuil et suppression du localStorage

            let refresh = document.getElementById("btn_acceuil");
            refresh.addEventListener("click", (e) => {
                e.preventDefault()
                window.location.href = "index.html"
                localStorage.removeItem("produit")
            })
        })

    displayForm()
    })
}
