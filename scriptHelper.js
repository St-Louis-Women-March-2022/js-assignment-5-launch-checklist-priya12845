// Write your helper functions here!
require('isomorphic-fetch');

//This is displaying the planetary information.
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const container = document.getElementById("missionTarget");
    container.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
}

//Validating all the text inputs and alerting the use. Check for empty, is a number or not a number.
function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

//form submission to check and display the faultyitems list about when the shuttle is ready and when it is not
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {



    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
        alert("All fields are required");
        return;

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field");
    }



    //    Launch Checklist when fuel too low for launch //fuel is less and cargo mass is ok
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
        console.log("here");
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`;
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co Pilot ${copilot} is ready for launch`;
        document.getElementById("fuelStatus").innerHTML = `Fuel too low for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    }
    //Launch Checklist when cargo too heavy for launch //fuel is enough and cargo is too much
    if (fuelLevel > 10000 && cargoLevel > 10000) {

        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`;
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co Pilot ${copilot} is ready for launch`;
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;

    }
    //Launch Checklist when cargo too heavy and fuel too low for launch // cargo is too heavy and fuel is too low.
    //fuel is less than 10000 and cargo mass is more than 10000
    if (fuelLevel < 10000 && cargoLevel > 10000) {

        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`;
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co Pilot ${copilot} is ready for launch`;
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;


    }
    //Launch Checklist when everything is good to go. // fuel is more than 10000 and cargo mass is less than 10000
    if ((fuelLevel >= 10000 && cargoLevel <= 10000) || (fuelLevel === 10000 && cargoLevel === 10000)) {

        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch.`;
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co Pilot ${copilot} is ready for launch`;
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;


    }
}

//Fetching the planetary information.
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });

    return planetsReturned;
}

//Pick the random planet to display the information.
function pickPlanet(planets) {
    let planet = Math.floor(Math.random() * 6);
    return planets[planet];
}

// exporting the functions
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;