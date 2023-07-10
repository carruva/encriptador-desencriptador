function encriptar(){

    var txtEncriptar = document.getElementById("encriptar").value.toLowerCase();
    //txtEncriptar.toLowerCase();
    var letras = { 'a': 'ai', 'e' : 'enter', 'i' :'imes','o':'ober', 'u':'ufat'};
    
    if (txtEncriptar) {

        var encriptar = txtEncriptar.replace(/[aeiou]/g, function(coincidir){
         return letras[coincidir];
       
        });
        document.getElementById('desencriptar').innerHTML=encriptar; 
       // console.log(encriptar);
              
      //  alert(letras);
    } else {
        alert("Ingresa el texto a Encriptar/Desencriptar");
    }    
    //alert(txtEncriptar);

}

function desencriptar(){

    var txtEncriptar = document.getElementById("encriptar").value.toLowerCase();
    var letras = [{ encontrar: /ai/g, cambiar: 'a'}, {encontrar: /enter/g, cambiar : 'e'},
    {encontrar: /imes/g,cambiar :'i'},{encontrar: /ober/g,cambiar:'o'},{encontrar:/ufat/g, cambiar:'u'}];
   // array para localizar las palabras a reemplazar por letra
    
    if (txtEncriptar) {

        for (var i = 0; i < letras.length; i++) {
            var desencriptar = letras[i];
            txtEncriptar = txtEncriptar.replace(desencriptar.encontrar,desencriptar.cambiar);
            
        }
       
       // console.log(txtDesencriptar);
          
           
        document.getElementById('desencriptar').innerHTML=txtEncriptar; 
          
      
    } else {
        alert("Ingresa el texto a Encriptar/Desencriptar");
    }    
    

}

function copiar(){

    //var copiarTextoEncriptado = document.querySelector('encriptar');
    var copiarTextoDesencriptado = document.getElementById('desencriptar');

    if(copiarTextoDesencriptado) {
      // console.log(copiarTextoEncriptado);
      copiarTextoDesencriptado.focus();
      copiarTextoDesencriptado.select();
        document.execCommand('copy');

       // alert('Para poder copiar es necesario que uno de los campos este vacio');

    } else{
        alert('Para poder copiar favor de capturar el texto a desencriptar')
    }
    
     
}