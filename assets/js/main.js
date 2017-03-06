function convertCelsius(){
    var gradoF = document.getElementById("gradoF").value;
    var gradoFF = parseInt(gradoF);
    if(isNaN(gradoFF)){
      alert("Ingrese un valor numérico");
      document.getElementById("gradoF").value="";
      document.getElementById("gradoF").focus();
      return;
    }else{
      document.getElementById("gradoC").value = ((gradoFF - 32) * (5 / 9)).toFixed(1);
    }
    return;
}
function convertFahrenheit(){
    var gradoC = document.getElementById("gradoC").value;
    var gradoCC = parseInt(gradoC);
    if(isNaN(gradoCC)){
      alert("Ingrese un valor numérico");
      document.getElementById("gradoC").value="";
      document.getElementById("gradoC").focus();
      return;
    }else{
      document.getElementById("gradoF").value = (1.8 * gradoCC + 32).toFixed(1);
    }
    return;
}
