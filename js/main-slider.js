var counter = 1;

setInterval(function (){
    document.getElementById('photo' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 8000);