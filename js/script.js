var submitBtn = document.getElementById("button");

submitBtn.addEventListener("click", function() {
    var nomeBurgerField = document.getElementById("name");
 
    var primoPrezzo = 50;
    
    var listaIngredienti = document.querySelectorAll(".ingredient [type ='checkbox']");
    console.log(listaIngredienti)
    
    for(var i=0; i < listaIngredienti.length; i++){
        var ingrediente = listaIngredienti[i];
        
        if(ingrediente.checked){
                primoPrezzo += parseInt(ingrediente.value)
                document.getElementById("price").innerHTML = primoPrezzo
            }
        }
        if(!nomeBurgerField.value){
            alert("manca il nome del burger")
        }
        
    var sconto = document.getElementById("coupon");
    var sconto = sconto.value.toUpperCase()
        if (sconto.value === AAAA0000 || sconto.value === BBBB1111) {
            primoPrezzo * 0.80;
        }
        document.getElementById("price").innerHTML = primoPrezzo;

})