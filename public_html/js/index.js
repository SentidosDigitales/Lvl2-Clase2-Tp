/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ingreso = prompt("Ingrese día de la semana");
ingreso = ingreso.toString().toLowerCase();
var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
for(var i=0;i<7;i++){
    if(dias[i]==ingreso){
        if(i>4){
            document.getElementById("resultado").innerText = "El dia es de fin de semana";
            break;
        }else{
            document.getElementById("resultado").innerText = "El dia es dia de semana";
            break;
        }
    }
    document.getElementById("resultado").innerText = "No es un día valido";
}


