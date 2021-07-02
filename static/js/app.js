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

