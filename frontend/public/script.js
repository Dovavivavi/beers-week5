//console.log(beers);

//console.log(beers.cards);

//console.log(beers.logo);

//console.log(beers.cards[5]);

window.addEventListener("load", loadEvent);

function loadEvent() {
    const rootElement = document.getElementById("root");
    
    //const beerCard = beers.cards[0];

    const beerCard = beers.cards;
    
    
    //const beerName = beer.title;
    //const beerCompany = beer.sub;
    //const beerType = beer.text;
    
    //const beerName1 = beerCards[1].title;
    //const beerCompany1 = beerCards[1].sub;
    //const beerType1 = beerCards[1].text;
    
    //rootElement.insertAdjacentHTML('beforeend', beerCardComponent(beerName, beerCompany, beerType));
    //rootElement.insertAdjacentHTML('beforeend', beerCardComponent(beerName1, beerCompany1, beerType1));
    //rootElement.insertAdjacentHTML('beforeend', beerCardComponent(beerCards[2].title, beerCards[2].sub, beerType[2].text));
    
    for(beer of beerCard) {
        console.log(beer);
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text));
    }
}

const beerCardComponent = function(beerName, beerCompany, beerType) {
    return`
    <div class='card' onclick="onClick(this)">
        <div class='beer-name'>${beerName}</div>
        <div class='beer-company'>${beerCompany}</div>
        <div class='beer-type'>${beerType}</div>
    </div>
    `;  
}

const onClick = div => {
    if(div.classList.contains("green")) {
        div.classList.remove("green");
    } else {
        div.classList.add("green");
    }
}