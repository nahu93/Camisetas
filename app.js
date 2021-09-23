//
//
//
///
//
//
//
//
//
//
//


////////////////////////////////////////////////ENTIDAD////////////////////////////////////////




class producto {

    constructor(id,categoria, equipo, precio,img ){
        this.id = id;
        this.categoria = categoria;
        this.equipo = equipo;
        this.precio = precio;
        this.img = img;
        
       
    }
 }


///////////////////////////////////////////SELECTORES//////////////////////////////////////



let selectorItems= document.getElementById ("camisetas")
let carritoId = document.getElementById ("carrito")
let tablePrint = document.getElementById ( "table")
let total = document.getElementById("total")
let btnClear = document.getElementById ("clear")


////////////////////////////////////////////////VARIABLES/////////////////////////////////////////////////

let Productos = [];
let carrito = [];

let Barcelona = new producto ( 1, "camiseta" , "Barcelona", 5200, "./multimedia/barcelona.jpg" )
let Paris = new producto ( 2, "camiseta" , "Paris" , 5500,"./multimedia/paris.jpg"  )
let Manchestercity = new producto ( 3, "camiseta" , "ManchesterCity" , 5000,"./multimedia/manchestercity.jpg")
let Realmadrid = new producto (4, "camiseta" , "RealMadrid" , 5100, "./multimedia/realmadrid.jpg" )
let Chelsea = new producto (5, "camiseta" , "Chelsea" , 4900, "./multimedia/chelsea.jpg" ) 
let Juventus = new producto (6, "camiseta" , "Juventus" , 5700, "./multimedia/juventus.jpg" )  
let Liverpool = new producto (7, "camiseta" , "Liverpool" , 5800, "./multimedia/liverpool.jpg" ) 
let Bayern = new producto (8, "camiseta" , "Bayern" , 5200,"./multimedia/bayern.jpg") 
let Olympique = new producto (9, "camiseta" , "Olympique" , 5300,"./multimedia/olympique.jpg" ) 
let Milan = new producto (10, "camiseta" , "Milan" , 5700,"./multimedia/milan.jpg") 

Productos.push(Barcelona)
Productos.push(Paris)
Productos.push(Manchestercity)
Productos.push(Realmadrid)
Productos.push(Chelsea)
Productos.push(Juventus)
Productos.push(Liverpool)
Productos.push(Bayern)
Productos.push(Olympique)
Productos.push(Milan)

console.log(Productos)


///////////////////////////////// lista de productos/////////////////////////////////////////////

//////utilizando inner///////

/*Productos.forEach (e => {

selectorItems.innerHTML += `
 <div class="card col-12 col-md-4" style="width: 18rem;">
  <img src="${e.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.equipo}</h5>
    <h6 class="card-text">$ ${e.precio}</h6>
    
    <a href="#" class="btn btn-dark"  onclick="agregarCarrito(${e.id})">AGREGAR</a>
  </div>
</div>
 `
   
})
const agregarCarrito = (idPorOnClick) => {

    const objetoIdentificado = Productos.find(e => e.id == idPorOnClick)
    console.log (objetoIdentificado);

    if (JSON.parse (localStorage.getItem("carrito")) != null){ 
         
    let carritoNuevo = JSON.parse (localStorage.getItem("carrito"))

    
    carritoNuevo.push (objetoIdentificado)

    localStorage.setItem("carrito", JSON.stringify(carritoNuevo))
    location.reload()
     }

else {
    carrito.push (objetoIdentificado)
    localStorage.setItem ("carrito",JSON.stringify(carrito))
 }

}

*/
Productos.forEach (e => {

    let camisetas = document.createElement ("div")
    camisetas.setAttribute = ("class","card" )
    camisetas.setAttribute = ("class","col-12")
    camisetas.setAttribute = ("class","col-md-4")
    camisetas.setAttribute = ("style" , "width: 18rem")

    let imagen = document.createElement ("img")
    imagen.setAttribute = ("class", "card-img-top")
    imagen.setAttribute = ("src", `(${e.img})`)
    camisetas.appendChild (imagen)

    let cardBody = document.createElement ("div")
    cardBody.setAttribute = ("class ", "card-body")
    camisetas.appendChild (cardBody)

    let equipo = document.createElement ("h5")
    equipo.setAttribute = ("class", "card-title")
    equipo.textContent = `${e.equipo}`
    cardBody.appendChild (equipo)

    let precio = document.createElement ("h6")
    precio.setAttribute = ("class", "card-text")
    precio.textContent = `${e.precio}`
    cardBody.appendChild (precio)
    
    
    let button = document.createElement ("button")
    button.setAttribute ("class","btn btn-dark")
    button.setAttribute ("id",`${e.id}`)
    button.setAttribute("onclick",`(${e.id})`)
    button.textContent = "Comprar"
    camisetas.appendChild (button)

    selectorItems.appendChild(camisetas)

    button.addEventListener ('click',() => {

        addCarrito(e)

    })
       
    })


/////////////// tabla////////////////////////////////

/////utilizando crate element///////////

const imprimirCarrito = () => {

    let carritoDelStorage = JSON.parse(localStorage.getItem("carrito"))

if (carritoDelStorage!= null)  {

    carritoDelStorage.forEach (e => {



        let table = document.createElement ("tr")

        let td= document.createElement ("td")
        td.setAttribute ("class", "col-4")
        td.textContent = `${carritoDelStorage.indexOf(e)}`
        table.appendChild (td)


        let th1= document.createElement ("th")
        th1.setAttribute ("class", "col-4")
        th1.textContent = `${e.equipo}`
        table.appendChild (th1)


        let th2= document.createElement ("th")
        th2.setAttribute ("class", "col-4")
        th2.textContent = `$ ${e.precio}`
        table.appendChild (th2)


        let td2= document.createElement ("td")
        td2.setAttribute ("class", "col-4")
        table.appendChild (td2)

        let button = document.createElement ("button")
        button.setAttribute ("class","btn btn-danger")
        button.setAttribute ("id",`${e.id}`)
        button.setAttribute("onclick",`deleteProduct(${e.id})`)
        button.textContent = "X"
        td2.appendChild (button)

        tablePrint.appendChild (table)

 
}) } else {
    let error = "No hay producto en el carrito, agrega alguno"
    console.error (error)
}
}

imprimirCarrito()

/////////////////////////quitar producto/////////////////////////////

const deleteProduct = (id) => {
    let allProduct = JSON.parse(localStorage.getItem ("carrito"))
    let allProductAct = allProduct.filter (e => e.id != id)
    localStorage.setItem ("carrito", JSON.stringify (allProductAct))
    location.reload()
    
}



/////////////////////////precio total/////////////////////
const totalPrecio = () => {

    let carritoDelStorage = JSON.parse (localStorage.getItem("carrito"))

    let totalPrecio = 0;

    
    carritoDelStorage.forEach(e =>{
        totalPrecio = totalPrecio + e.precio
        console.log (totalPrecio)

    })

    total.textContent = totalPrecio
   
}

totalPrecio()

/////////////LImpiar Carrito//////////

btnClear.addEventListener ("click", ()=> {
    localStorage.clear()
    location.reload()
})
