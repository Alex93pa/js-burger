var submitBtn = document.getElementById("button");

submitBtn.addEventListener("click", function() {
    var nomeBurgerField = document.getElementById("name");
 
    var somma = 50;
    
    var listaIngredienti = document.querySelectorAll(".ingredient [type ='checkbox']");
    console.log(listaIngredienti)
    
    for(var i=0; i < listaIngredienti.length; i++){
        var ingrediente = listaIngredienti[i];
        
        if(ingrediente.checked){
                somma += parseInt(ingrediente.value)
            }
        }
        
        if(!nomeBurgerField.value){
            alert("manca il nome del burger")
        }
})