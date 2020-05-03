// question 1

const subtract = (a,b) => a - b;

// question 2

const baseUrl = "https://api.rawg.io/api/games?genres=sports";

const getNames = `${baseUrl}games?genres=sports&page=`;

const gameNames = getNames + name;

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createNameList(json);
    })
    .catch(function(error) {
        location.href = error + "error.html";
    });

function createNameList(gameNames) {
    
    let resultsArray = gameNames.results;

    for (let i = 0; i < resultsArray.length; i++) {
        console.log(resultsArray[i].name);
    }
};


// question 3

const cat = document.getElementById("animal");

const newAnimal = cat.replace(/cats/g, "giraffes");

cat.innertext = newAnimal;
console.log(newAnimal);


// question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

for (let i = 0; i < id.length; i++) {

    if (params.has("id")) {
        id = params.get("id");
    }
        else if (id === false){
            document.location.href = "third.html";
        }
        else if (id < 10){
            document.location.href = "first.html";
        }
        else if (id >= 10){
            document.location.href = "second.html";
        }

};   


// question 5

function removeButton() {

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

}

removeButton();


// question 6

function addLinks() {

    const animalLinks = document.querySelector(".animals");

    const newLink = document.createElement("li");
    newLink.className = "parrots";
    newLink.innerText = "Parrots";
    
    animalLinks.appendChild(newLink);
    
    const elephant = document.querySelector(".elephants")

    elephant.before(newLink);

    }
    
    addLinks();


// question 7
/* I got really stuck on this one, would really help if
I could see an example of this */

const mainUrl = "https://api.rawg.io/api/games/3801";
const ratingUrl = `${mainUrl}`;

const getRating = ratingUrl;

fetch(mainUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createRating(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

function createRating(getRating) {

    let ratingResults = getRating;

    const allRatings = document.querySelector(".rating");

    const addRating = document.createElement("paragraph");

    addRating.innerText = "json.rating";

    allRatings.appendChild(addRating);

};

createRating(json);

