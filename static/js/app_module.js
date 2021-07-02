// import the table data from data.js
const tableData = data; 

// Reference the HTML table using d3
 var tbody = d3.select('tbody');

// create a function to load the table data into a table
function buildTable (data){

    //clear out any existing data
    tbody.html("");

    // loop through each object in the data array and add a row for each object and cell for each value 
    data.forEach(dataRow => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// create a function to detect a click
function handleClick (){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date)
    };
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
