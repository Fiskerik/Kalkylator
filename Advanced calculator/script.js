(function(){
    "use strict";

    document.getElementById('convert').addEventListener('submit', function(event){

        event.preventDefault();

        let distance = parseFloat(document.getElementById('distance').value).toFixed(2);
        let result = document.getElementById('answer');
        let conversion = (distance * 1.689349).toFixed(3);

        if(distance){
            
            result.innerHTML = `<h2>${distance} is converted to ${conversion} kilometers </h2>`;
            
        }
        else{
            result.innerHTML = `<h2> Thats not a number! </h2>`;
        }

        var keyp = document.addEventListener('keydown', function(event){
            var keyp = event.key;
                switch(keyp){
                    case 'k': 
                    conversion = (distance * 1.689349).toFixed(3);
                    result.innerHTML = `<h2>${distance} miles is converted to ${conversion} kilometers </h2>`; break; 
        
                    case 'm': 
                    conversion = (distance/1.689349).toFixed(3);
                    result.innerHTML = `<h2>${distance} kilometers is converted to ${conversion} miles </h2>`; break; 
                }
                   
            });

    });

    

    

}());