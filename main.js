

function calcular() {
    let usuario = document.getElementById("usuario").value;
    let estrato = document.getElementById("estrato").value;
    let metros = document.getElementById("metros").value;
    


    if(estrato==1){
         total= (250*metros)+2300*0.60
         cargoFijo=2300
         valorSubsidio=2300*0.40
         porcentajeSubsidio=40
    }else if(estrato==2){
         total=(350*metros)+3200*0.70
         valorSubsidio=3200*0.30
         cargoFijo=3200
         porcentajeSubsidio=30
    }else {
         total=(460*metros)+3900*0.90
         valorSubsidio=3900*0.10
         cargoFijo=3900
         porcentajeSubsidio=10
    }
    setLocalStorage(usuario, estrato, metros,total,valorSubsidio,cargoFijo,porcentajeSubsidio);

}
let arrayDatosAguasan = JSON.parse(localStorage.getItem('arrayDatosAguasan')) || [];

function setLocalStorage(usuario, estrato, metros,total,valorSubsidio,cargoFijo,porcentajeSubsidio) {
    
    
    arrayDatosAguasan.push({ usuario: usuario, estrato: estrato,cargoFijo:cargoFijo, metros: metros, porcentajeSubsidio:porcentajeSubsidio, valorSubsidio:valorSubsidio,total:total  })
    localStorage.setItem('arrayDatosAguasan', JSON.stringify(arrayDatosAguasan))
  

}