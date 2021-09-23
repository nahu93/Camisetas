$("#theme").on("click", () => {

    if (localStorage.getItem ("theme") == "dark"){
        lightTheme ()
    }
    else {
        darkTheme ()
    }

})



const darkTheme = () => {
 $("body").css ("background-color", "black")
 $("h1").css ("color", "white")
    $("h2").css ("color", "white")
    $("#tabla").css ("color","white")
    $("#preciototal").css ("color","white")
    $("#total").css ("color","white")

    localStorage.setItem ("theme", "dark")
   

}
const lightTheme = () =>{

    $("body").css ("background-color", "white")
    $("h1").css ("color", "black")
    $("h2").css ("color", "black")
    $("#tabla").css ("color","black")
    $("#preciototal").css ("color","black")
    $("#total").css ("color","black")

    localStorage.setItem ("theme", "light")
   
}




