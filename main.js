

function calcular() {
    let usuario = document.getElementById("usuario").value;
    let estrato = document.getElementById("estrato").value;
    let metros = document.getElementById("metros").value;
    
    let estrato1= (250*metros)+2300*0.60
    let estrato2= (350*metros)+3200*0.70
    let estrato3= (460*metros)+3900*0.90


    if(estrato==1){
         total= estrato1
    }else if(estrato==2){
         total=estrato2
    }else {
         total=estrato3
    }
    setLocalStorage(usuario, estrato, metros,total);

}
let arrayDatosAguasan = JSON.parse(localStorage.getItem('arrayDatosAguasan')) || [];

function setLocalStorage(usuario, estrato, metros,total) {
    
    
    arrayDatosAguasan.push({ usuario: usuario, estrato: estrato, metros: metros, total:total })
    localStorage.setItem('arrayDatosAguasan', JSON.stringify(arrayDatosAguasan))
  

}