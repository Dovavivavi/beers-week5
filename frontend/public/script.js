//console.log(beers);

//console.log(beers.cards);

//console.log(beers.logo);

//console.log(beers.cards[5]);

window.addEventListener("load", loadEvent);

const headerComponent = function(title) {
    return `
        <header>
            <h1>
                ${title}
            </h1>
        </header>
    `
}

const footerComponent = function(company) {
    return `
        <footer>
            ${company}
        </footer>
    `
}

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
    
    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Best Beers"))

    rootElement.insertAdjacentHTML("afterend", footerComponent("Dreher"))

    for(beer of beerCard) {
        console.log(beer);
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text));
    }
}

const beerCardComponent = function(beerName, beerCompany, beerType) {
    return`
    <section class='card' onclick="onClick(this)">
        <h1>${beerName}</h1>
        <h2>${beerCompany}</h2>
        <h3>${beerType}</h3>
        <button>Buy</button>
    </section>
    `;  
}

const onClick = div => {
    if(div.classList.contains("green")) {
        div.classList.remove("green");
    } else {
        div.classList.add("green");
    }
}