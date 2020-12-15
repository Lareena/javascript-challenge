// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js assign array of objects to descriptive variable
var ufoData = data;
// console.log(ufoData);
// Select the button
var dateButton = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// console.log(dateButton);

dateButton.on("click", function(){

    //Select the datetime input element html raw code
    var inputDateElement = d3.select("#datetime");

    //Get the value of the datetime input element
    var inputDateValue = inputDateElement.property("value");

    console.log("inputDateValue:",inputDateValue);
    // console.log(ufoData);

    var filterDateData = ufoData.filter(sighting => sighting.datetime === inputDateValue);

    console.log(filterDateData);

    // Clear any rows and cells from prior taby (if any)
    tbody.html("");

    filterDateData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


});
