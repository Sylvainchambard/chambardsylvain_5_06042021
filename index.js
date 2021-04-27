async function fillProducts() {
  await fetch('http://localhost:3000/api/teddies') 
    .then((response) => response.json()) 
    .then((nounours) => remplirListeProduits(nounours))
}
 
function remplirListeProduits(nounours) {
  for (let elem of nounours) {                        //récupère tous les elements de l'api
  let id = elem._id  
 
  let divClass = document.createElement("div") // créé une div
  divClass.setAttribute ("class", "all")        // nommée class "all"
  
  let ancre = document.getElementById("ancre")  // variable ancre = a l'id ancre
  

  let link = document.createElement("a")    //créé la balise <a>
  link.setAttribute("href", `selection_produit.html?id=${id}`)
  
    
  let paragraphe = document.createElement("p")      // création 
  paragraphe.innerText = elem.name             // recup
 
  
  let price = document.createElement ("p")
  price.innerText = elem.price/100+" €"
  
  let description = document.createElement ("p")
  description.innerText = elem.description
  
  let image = document.createElement("img")
  image.src = elem.imageUrl
  
  let btn = document.createElement("BUTTON");  // créé le bouton
  btn.setAttribute("id", "btn") 
  btn.innerHTML = "Voir Produit"

      ancre.appendChild(divClass) 
      divClass.appendChild(link)
      
      link.appendChild(image)   // modification
      link.appendChild(paragraphe)
      link.appendChild(price) 
      link.appendChild(btn)    
    
 
   

  }
} 


fillProducts()


