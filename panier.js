let produitEnregistre = JSON.parse(localStorage.getItem("produit")) //récupere lélément produit
      // JSON.parse pour convertir les données au format JSON qui sont dans le local storage
      console.log(produitEnregistre)

let panierHtml = document.getElementById("produit_select")

if(produitEnregistre === null){
    let phrasePanierVide =`
    <div class="panier_vide">
        <p>Votre panier est vide !</p>
    </div>`
    panierHtml.innerHTML = phrasePanierVide
    
    
} else {
    //si le panier n'est pas vide > afficher les produits du localStorage
    for (let i = 0 ; i < produitEnregistre.length; i++){
        let struct = []
        struct = struct + `
        <div class="panier">
            <p>${produitEnregistre[i].nom}</p>
            <p>${produitEnregistre[i].option}</p>
            <p>${produitEnregistre[i].prix}</p>
        </div>
        `
        panierHtml.innerHTML = struct
          
        console.log(struct)
        }

    }