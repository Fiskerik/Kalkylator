(function(){
    "use strict";

    document.getElementById('convert').addEventListener('submit', function(event){

        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const result = document.getElementById('answer');

        if(distance){
            const conversion = (distance * 1.689349).toFixed(3);
            result.innerHTML = `<h2>${distance} is converted to ${conversion} kilometers </h2>`;
            
        }
        else{
            result.innerHTML = `<h2> Thats not a number! </h2>`;
        }

    });

}());