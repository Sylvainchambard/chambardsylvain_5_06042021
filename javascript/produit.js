// visualisation et récupération ID
const queryString_url_id = window.location.search;
const urlSearchParams = new URLSearchParams(queryString_url_id);
const id = urlSearchParams.get("id");

// ETAPE 2 - Récupération des infos de l'api

fetch(`http://localhost:3000/api/teddies/${id}`)
  .then((response) => response.json())
  .then((info) => { // ciblage element DOM
    let name = document.getElementById("name_descr");
    let price = document.getElementById("price");
    let description = document.getElementById("description");
    let image = document.getElementById("img_name_descr");
    let colors = document.getElementById("info_colors");

    //insertion image
    let imageSrc = document.createElement("img")
    imageSrc.src = info.imageUrl
    image.appendChild(imageSrc)

    //insertion h1 nom article
    name.insertAdjacentHTML("afterbegin", `<h1>${info.name}</h1>`)

    //insertion prix de l'article
    price.innerText = "Prix : " + info.price / 100 + " €";
    description.innerText = info.description;
    

    colors.innerText = `Choisissez parmis ses ${info.colors.length} couleurs différentes `;
    
    //boucle pour insérer toutes les options disponible
    let allColors = [];
    for (let i = 0; i < info.colors.length; i++) {
      allColors += `<option value=${info.colors[i]}>${info.colors[i]}</option> `;

      let inner = document.getElementById("option");
      inner.innerHTML = allColors;
    }

    //Selection de l'id du formulaire
    const idForm = document.querySelector("#option");

    // Choix quantité produit
    const structureQuantité = `
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      `;
    // Afficher structureQuantité dans DOM
    let positionQuantité = document.querySelector("#nmb_product");
    positionQuantité.innerHTML = structureQuantité;

    // Selection du bouton
    let btnEnvoyerPanier = document.getElementById("btn_envoyer");

    //Ecouter le bouton et envoyer au panier
    btnEnvoyerPanier.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(btnEnvoyerPanier);

      //mettre la quantité dans une variable
      const choixQuantité = positionQuantité.value;

      //mettre le choix de l'option dans une variable
      const choixForm = idForm.value;

      //Récupération des valeurs du formulaire
      let optionProduit = {
        nom: info.name,
        photo: info.imageUrl,
        option: choixForm,
        idProduit: info._id,
        quantite: choixQuantité,
        prix: info.price / 100,
        prixTotal: (info.price * choixQuantité) / 100,
      };
      //---------LOCALSTORAGE ------------

      let produitEnregistre = JSON.parse(localStorage.getItem("produit")); //récupere lélément produit
      // JSON.parse pour convertir les données au format JSON qui sont dans le local storage

      //stocker les valeurs du formulaire dans le local storage
      function ajoutProduitLocalStorage() {
        //ajout dans le tableau de l'objet avec les valeurs choisis par l'utilisateur
        produitEnregistre.push(optionProduit);

        // transformation en format JSON et l'envoyer dans la key "produit" du localStorage
        localStorage.setItem("produit", JSON.stringify(produitEnregistre));
      }

      // si y a déja des produit dans le local storage
      if (produitEnregistre) {
        ajoutProduitLocalStorage();
      }

      // si il y a pas de produit
      else {
        produitEnregistre = [];
        ajoutProduitLocalStorage();
      }
    });
  });
