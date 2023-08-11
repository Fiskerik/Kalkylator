 (function(){
    "use strict";
    var detailsform = document.querySelector('#destination_details');

    detailsform.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        var destname = event.target.elements["destination"].value;
        var locationname = event.target.elements["location"].value;
        var urlname = event.target.elements["photo"].value;
        var destDesc = event.target.elements["description"].value;


        for(var i=0; i<detailsform.length; i++){
            detailsform.elements[i].value = "";
            
        }

        var destCard = createDestinationCard(destname, locationname, urlname, destDesc);
    
        var  wishlistcontainer = document.getElementById('destinations_container');

        if(wishlistcontainer.children.length === 0){
            document.getElementById('title').innerHTML = "My wish list"
        }   

        document.querySelector('#destinations_container').appendChild(destCard);
    }

    function createDestinationCard(name, location, photoUrl, description){
        var card = document.createElement('div');
        card.className = "card";

        var img = document.createElement('img');
        img.setAttribute('alt', name);

        var constantphotourl = "images/signpost.jpg";
        if(photoUrl.length === 0){
            img.setAttribute('src', constantphotourl);
        }
        else{
            img.setAttribute('src', photoUrl)
        }
        card.appendChild(img);

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";

        var cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardsubtitle = document.createElement('h4');
        cardsubtitle.innerText = location;
        cardBody.appendChild(cardsubtitle);

        if(description.length !== 0){
        var cardtext = document.createElement('p');
        cardtext.className = "card-text";
        cardtext.innerText = description;
        cardBody.appendChild(cardtext);
        }

        var removebutton = document.createElement('button');
        removebutton.innerHTML = "Remove";
        

        removebutton.addEventListener('click', removecard);
        cardBody.appendChild(removebutton);
        
        card.appendChild(cardBody);

        return card;
    }

    function removecard(event){
        var card = event.target.parentElement.parentElement;
        card.remove();

    }
 })();