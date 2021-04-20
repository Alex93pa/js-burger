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




    var couponInput = document.getElementById("coupon");
    var calculateBtn = document.getElementById("button");
    var codiciSconto = ["aaaa0000", "bbbb1111"];
    var spanPrezzo = document.getElementById("prezzo")

    calculateBtn.addEventListener("click", function(){
        //recupero il codice inserito dall'utente
        var codiceInserito = couponInput.value
        //controllo se è valido
        var isCodiceValido = checkCodiceSconto(codiceInserito, codiciSconto)

        if(isCodiceValido){
        //eventualmente applico lo sconto
            var scontoDaApplicare = valoreScontoCoupon * costoTotale /100

            costoTotale = costoTotale - scontoDaApplicare
        }

            spanPrezzo.innerText = costoTotale.toFixed (2)
            
    });




//------------------altro metodo--------------------

    // function checkCodiciSconto(codiceUtente, listaCodici){ //codiciSconto 
    //     var codUtenteFormattato = codiceUtente.toUpperCase();
    //     var elementExist = false;
        

    //     if(listaCodici.indexOf(codUtenteFormattato) === -1) {
    //         elementExist = false
    //     } else (listaCodici.indexOf(codUtenteFormattato) > -1) {
    //         elementExist = true
    //     }
    // }

});