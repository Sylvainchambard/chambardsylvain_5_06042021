const nounourses = [
  {
      "colors": [
          "Tan",
          "Chocolate",
          "Black",
          "White"
      ],
      "_id": "5be9c8541c9d440000665243",
      "name": "Norbert",
      "price": 2900,
      "imageUrl": "http://localhost:3000/images/teddy_1.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
      "colors": [
          "Pale brown",
          "Dark brown",
          "White"
      ],
      "_id": "5beaa8bf1c9d440000a57d94",
      "name": "Arnold",
      "price": 3900,
      "imageUrl": "http://localhost:3000/images/teddy_2.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
      "colors": [
          "Brown"
      ],
      "_id": "5beaaa8f1c9d440000a57d95",
      "name": "Lenny and Carl",
      "price": 5900,
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "imageUrl": "http://localhost:3000/images/teddy_3.jpg"
  },
  {
      "colors": [
          "Brown",
          "Blue",
          "Pink"
      ],
      "_id": "5beaabe91c9d440000a57d96",
      "name": "Gustav",
      "price": 4500,
      "imageUrl": "http://localhost:3000/images/teddy_4.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
      "colors": [
          "Beige",
          "Tan",
          "Chocolate"
      ],
      "_id": "5beaacd41c9d440000a57d97",
      "name": "Garfunkel",
      "price": 5500,
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "imageUrl": "http://localhost:3000/images/teddy_5.jpg"
  }
];

//Nom des nounourses

function afficherNomDesNounours() {
    for (let elem of nounourses) {
        console.log(elem.name)
    }
   
}

  afficherNomDesNounours()




  // couleurs des nounourses
function afficherColorisDisponibles(array) {
    for (let elem of nounourses) {
      console.log(elem.name + " est disponible " + elem.colors.length + " couleurs")
  }
  }
  afficherColorisDisponibles()


//Prix total
function afficherPrixTotal (array) {
    let sum = 0;
    for (let peluche of nounourses) {
        sum = sum + peluche.price;
    }
console.log(sum)
}
      afficherPrixTotal()
     
    
//description
function afficherSommeDescriptions(array) {
    let sumDescription = 0;
    for (let elem of nounourses){
        sumDescription = sumDescription + elem.description;
    }
    console.log(sumDescription)
}
afficherSommeDescriptions()
 

      function afficherTroisiemeCouleurDispo(array) {
          for (let elem of nounourses) {
              if (elem.colors[2]) {
                  console.log(elem.colors[2])
                
              }
              else {
                  console.log("cette couleur n'existe pas ")
              }
              
                
          }
         
      }
      afficherTroisiemeCouleurDispo()
      

      function afficherMoitiePrix(array) {}
// si tu peux, essaye aussi d'afficher celui à -20%

let ageJulie = 12
let agePaul = 24

function addTenToAge(choufleur) {
    console.log(choufleur + 10)

}
 
addTenToAge(agePaul)

