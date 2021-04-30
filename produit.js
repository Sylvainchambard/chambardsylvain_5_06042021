

// ETAPE 1 - visualisation et récupération ID 
const queryString_url_id = window.location.search
const urlSearchParams = new URLSearchParams(queryString_url_id)
const id = urlSearchParams.get("id")

// ETAPE 2 - Récupération des infos de l'api

    fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(response => response.json())
    .then(info => {
        let name = document.getElementById("name")
        name.innerText = info.name
        
        let price = document.getElementById("price")
        price.innerText ="Prix : "+ info.price/100 +" €"
        
        let description = document.getElementById("description")
        description.innerText = info.description
        
        let image = document.getElementById("picture")
        image.src = info.imageUrl 
        
        let colors = document.getElementById("info_colors")
        colors.innerText = `Choisissez parmis ses ${info.colors.length} couleurs différentes `
         
        let allColors = [];
        for (let i = 0; i < info.colors.length; i++) {
          allColors += `<option value=${info.colors[i]}>${info.colors[i]}</option> `
          
          let inner = document.getElementById("option");
          inner.innerHTML = allColors;
      
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
          option : info.colors,
          idProduit : info._id,
          quantite : 1,
          prix : info.price/100
        }
        
        console.log(allColors)
        console.log(optionProduit)


       
 
        })
 
    
        
           }
 
   })


 