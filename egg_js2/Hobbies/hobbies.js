
const hobbies = {
    enPareja: ["Ver películas juntos", "Cocinar en pareja", "Salir a cenar", "Viajar juntos", "Hacer ejercicio en pareja"],
    conAmigos: ["Jugar videojuegos", "Hacer barbacoas", "Ir al cine", "Practicar deportes", "Organizar juegos de mesa"],
    conFamilia: ["Hacer picnics familiares", "Realizar actividades al aire libre", "Hacer manualidades juntos", "Celebrar reuniones familiares", "Cocinar en familia"]
};

 const { enPareja, conAmigos, conFamilia } = hobbies;

 const Hoby3P = enPareja[2];
 console.log(Hoby3P);

 const Hoby4F = conFamilia[3];
 console.log(Hoby4F);

 const conteinerHobbies = document.getElementById('hobbies-seleccionados');

 function templateHobies () {
 
    const TextHobies = `
    
    <h3>Mis hobbies favoritos son:</h3>
    <p>En pareja: ${Hoby3P}</p>
    <p>En familia: ${Hoby4F}</p>
    `
    
   conteinerHobbies.innerHTML = TextHobies

 }

 templateHobies ()

