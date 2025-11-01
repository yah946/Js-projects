
let dirham = document.getElementById('dirham');
let pound = document.getElementById('pound');

dirham.onkeyup = function(){
    pound.value = dirham.value / 5.13;
}

pound.onkeyup = function(){
    dirham.value = pound.value * 5.13;
}