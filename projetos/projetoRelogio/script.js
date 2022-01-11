
function displayClock(){
  var display = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  relogio.innerHTML = display;

    setTimeout(displayClock, 1000); 
}

let relogio =document.querySelector('.mostrar-relogio');
relogio.addEventListener('mostrar-relogio', window.onload=displayClock());


