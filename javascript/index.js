async function fillProducts() {
  await fetch('https://ocprojet5.herokuapp.com/api/teddies') 
    .then((response) => response.json()) 
    .then((nounours) => remplirListeProduits(nounours))
}
 
function remplirListeProduits(nounours) {
  for (let elem of nounours) {     //récupère tous les elements de l'api
    
    let ancre = document.getElementById("ancre")  // variable ancre = a l'id "ancre"
    let id = elem._id
    
    // Création des balises dans le DOM avec pour certain l'ajout d'attribut
    let divClass = document.createElement("div") 
    divClass.setAttribute ("class", "all")        
    let link = document.createElement("a")    
    link.setAttribute("href", `selection_produit.html?id=${id}`)
    let paragraphe = document.createElement("p")      
    let price = document.createElement ("p")
    let description = document.createElement ("p")
    let image = document.createElement("img")
    let btn = document.createElement("BUTTON")
    btn.setAttribute("id", "btn") 
  
    // Récupération des données pour chaque balise
    paragraphe.innerText = elem.name             
    price.innerText = elem.price/100+" €"
    description.innerText = elem.description
    image.src = elem.imageUrl
    image.alt = "image peluche "
    btn.innerHTML = "Voir Produit"
    
    //Modification du DOM
    ancre.appendChild(divClass);
    divClass.appendChild(link);
    link.appendChild(image); 
    link.appendChild(paragraphe);
    link.appendChild(price);
    link.appendChild(btn); 
  }
} 
fillProducts()


