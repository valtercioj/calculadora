
function clean(){
  document.getElementById('visor').innerHTML = "";
}
function insert(num)
 {
  var numero = document.getElementById('visor').innerHTML;
  document.getElementById('visor').innerHTML = numero + num;
 }

function calcular(){
  var resultado = document.getElementById('visor').innerHTML;
   if(resultado){
      document.getElementById('visor').innerHTML = eval(resultado);
    }
   
}

