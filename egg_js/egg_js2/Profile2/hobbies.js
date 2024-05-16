// act1
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

//  act2

const Todos = [ ...enPareja, ...conAmigos, ...conFamilia ];

console.log(Todos);

// act3

// const numeros = [1, 2, 3, 4, 5];
// const [primero, segundo, ...resto] = numeros;
// console.log(primero); // 1
// console.log(segundo); // 2
// console.log(resto); // [3, 4, 5]

const [primeroHT, segundoHT, ...restoHT] = Todos;
const text1 = [segundoHT];

const  [primeroHP, segundoHP, terceroHP, cuartoHP, ...restoHP] = enPareja;
const text2 = [terceroHP, cuartoHP];

const [primeroHA, segundoHA, ...restoHA] = conAmigos;
const text3 = [primeroHA];

const [primeroHF, segundoHF, ...restoHF] = conFamilia;
const text4 = [primeroHF];


const algunos = [ ...text1, ...text2, ...text3, ...text4 ];

console.log(algunos);