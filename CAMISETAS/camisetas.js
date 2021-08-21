//
//
//
//
//
//
//
//
//

let datosDelStorage = localStorage.getItem ("productos")
let JsonToObject = JSON.parse(datosDelStorage)



let pedirEquipo = prompt("que equipo estas buscando")

let equipo = JsonToObject.filter (obj => obj.equipo === pedirEquipo)

console.log (equipo);
