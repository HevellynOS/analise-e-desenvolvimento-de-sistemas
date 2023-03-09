  


 var a = window.document.getElementById('principal')
 a.addEventListener('mouseenter', entrar)
 a.addEventListener('click', clicar)
 a.addEventListener('mouseout', sair)
 function entrar(){
         a.innerText = 'Analise e desenvolvimento de Sistemas'
 }
 function clicar(){
             a.innerText = 'A Logica De Programação'
 }
 function sair(){
             a.innerText = 'Entenda:'
 }
