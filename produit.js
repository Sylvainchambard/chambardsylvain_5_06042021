

// ETAPE 1 - visualisation et récupération ID 
const queryString_url_id = window.location.search
const urlSearchParams = new URLSearchParams(queryString_url_id)
const id = urlSearchParams.get("id")

// ETAPE 2 - Récupération des infos de l'api

    fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(response => response.json())
    .then(info => {
      let name = document.getElementById("name")
      let price = document.getElementById("price")
      let description = document.getElementById("description")  
      let image = document.getElementById("picture")  
      let colors = document.getElementById("info_colors")  
        
      name.innerText = info.name
      price.innerText ="Prix : "+ info.price/100 +" €"  
      description.innerText = info.description  
      image.src = info.imageUrl 
      colors.innerText = `Choisissez parmis ses ${info.colors.length} couleurs différentes `  
        
      let allColors = [];
      for (let i = 0; i < info.colors.length; i++) {
        allColors += `<option value=${info.colors[i]}>${info.colors[i]}</option> `
              
        let inner = document.getElementById("option");
        inner.innerHTML = allColors;
      }          
              
      //Selection de l'id du formulaire
      const idForm = document.querySelector("#option")
         
      // Selection du bouton
      let btnEnvoyerPanier = document.getElementById("btn_envoyer")
       
      //Ecouter le bouton et envoyer au panier
      btnEnvoyerPanier.addEventListener("click", (event)=>{
        event.preventDefault()
        console.log(btnEnvoyerPanier)
      
      
      
      //mettre le choix dans une variable
      const choixForm = idForm.value
       
      //Récupération des valeurs du formulaire
      let optionProduit = {
        nom : info.name,
        photo : info.imageUrl,
        option : choixForm,
        idProduit : info._id,
        quantite : 1,
        prix : info.price/100
      }
        //---------LOCALSTORAGE ------------
        
      let produitEnregistre = JSON.parse(localStorage.getItem("produit")) //récupere lélément produit
      // JSON.parse pour convertir les données au format JSON qui sont dans le local storage

      //stocker les valeurs du formulaire dans le local storage
      function ajoutProduitLocalStorage() {

      //ajout dans le tableau de l'objet avec les valeurs choisis par l'utilisateur
      produitEnregistre.push(optionProduit)
        
      // transformation en format JSON et l'envoyer dans la key "produit" du localStorage
      localStorage.setItem("produit", JSON.stringify(produitEnregistre))
      }

      // si y a déja des produit dans le local storage
      if(produitEnregistre){
        ajoutProduitLocalStorage()
      }
     
      // si il y a pas de produit
      else{
        produitEnregistre = []
        ajoutProduitLocalStorage()
      }  



    })
    })
     
              
                  
 
  
  
let tableau = JSON.parse(localStorage.getItem("paquetChips")) || []

 function addChips(){
  
    
    let str = "chips"
      
    tableau.push(str)
    localStorage.setItem('paquetChips', JSON.stringify(tableau))
 }