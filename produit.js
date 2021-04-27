

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
      
        }

        console.log(allColors)

    })

  