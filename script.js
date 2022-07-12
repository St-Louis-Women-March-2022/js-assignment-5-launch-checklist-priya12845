//const { formSubmission } = require("./scriptHelper");
window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetSelected = pickPlanet(listedPlanets);
        addDestinationInfo(window.document, planetSelected.name, planetSelected.diameter, planetSelected.star,
            planetSelected.distance, planetSelected.moons, planetSelected.image)
    })

    let testForm = document.querySelector('form');
    testForm.addEventListener("submit", function(event) {

        let txtpilotName = document.querySelector('input[name=pilotName]');
        let txtcopilotName = document.querySelector('input[name=copilotName]');
        let txtfuelLevel = document.querySelector('input[name=fuelLevel]');
        let txtcargoMass = document.querySelector('input[name=cargoMass]');
        let list = document.querySelector("#faultyItems");


        formSubmission(window.document, list, txtpilotName.value, txtcopilotName.value, txtfuelLevel.value, txtcargoMass.value);
        event.preventDefault();
    })
})