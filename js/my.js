'use strict'

function verif(){

    var cin = document.getElementById('cin');
    var tel = document.getElementById('tel');
    var tcin = cin.value;
    var ttel = tel.value;

    if ((tcin.trim() == "") || (ttel.trim() == ""))
    {
        alert("Remplir tous les champs !");
    }
    else{
        // 
        // tmsg.innerHTML = "<p>"+tcin+"</p><p>"+ttel+"<p>";

        var tmsg = document.getElementById('msg');

        ex1 = /^[a-z]{2}[0-9]{4}$/;

        if (!ex1.test(tcin))
        {
            tmsg.innerHTML = `Votre cin ne respecte pas le format xx0000 !`;
        }
    }
    
}



