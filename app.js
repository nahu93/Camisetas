//
//
//
///
//
//
//ENTIDAD////




class producto {

    constructor(categoria, equipo, precio, disp){
        this.categoria = categoria
        this.equipo = equipo
        this.precio = precio
        this.disp = disp
    }
 }

//VARIABLES////

const Productos = [];

const Barcelona = new producto ( "camiseta" , "barcelona", 5200, true)
const Paris = new producto ( "camiseta" , "paris" , 5500, true )
const Manchestercity = new producto ( "camiseta" , "manchestercity" , 5000, true)
const Realmadrid = new producto ( "camiseta" , "realmadrid" , 5100, true)
const Chelsea = new producto ( "camiseta" , "chelsea" , 4900, true) 

Productos.push(Barcelona)
Productos.push(Paris)
Productos.push(Manchestercity)
Productos.push(Realmadrid)
Productos.push(Chelsea)

console.log (Productos);

let ObjToJson = JSON.stringify(Productos)
localStorage.setItem ( "productos", ObjToJson)



console.log(document.body);

/////
//tomar objeto por etiqueta 

 //// let dato = document.getElementsByTagName()


/// tomar objeto por clase 

//// let dato = document.getElementsByClassName ()

/// tomar objeto por ID

/// let id = document.getElementById ()



//// selector universal //// # id de CSS /// . clase css /// selectores de css //// cuando se selecciona una sola etiqueta solo te devuelvew la pimera  "li"  la primera de lista 


 //let info = document.querySelectorAll () /// te lo devuelve todo en un array 
//
//// let info = document.querySelector ("#") 

let selector1 = document.getElementById ("camisetas")

/*
Productos.forEach (e => {     

         selector1.innerHTML +=
          `<div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${e.precio}</h5>
            <p class="card-text">${e.equipo}</p>
            <a href="#" class="btn btn-primary">Agregar</a>
          </div>
        </div>   ` 
    
}  )

*/

Productos.forEach (e => {

     let div1= document.createElement ("div")

     let p1 = document.createElement("p")
         p1.textContent = e.equipo

     let p2 = document.createElement("p")
         p2.textContent = e.precio


    ///atrebuto
    
    p2.setAttribute("class",  "colorAzul")

    //// estructura elementos
    div1.appendChild (p1)
    div1.appendChild (p2)

   /// selector agregado del dom
    selector1.appendChild(div1)
  
    
})
