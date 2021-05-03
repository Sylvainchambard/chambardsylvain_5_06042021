let produitEnregistre = JSON.parse(localStorage.getItem("produit")) //récupere lélément produit
      // JSON.parse pour convertir les données au format JSON qui sont dans le local storage
      console.log(produitEnregistre)

let panierHtml = document.getElementById("#produit_select")
console.log(panierHtml)

if(produitEnregistre === null){
    let phrasePanierVide = document.createElement("p")
    const vide = "Votre panier est vide !"
        
    phrasePanierVide.appendChild(vide)
}