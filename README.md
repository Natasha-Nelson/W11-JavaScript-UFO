# W11-JavaScript-UFO

# Overview
The goal of this project was to create a dynamic website that would allow users to parse through a large dataset of UFO Sightings across the United States. The project utilized VS Code and the browser (Chrome) as the primary programming applications. The programming languages used include JavaScript, CSS and HTML. The data file and images are included in the static file folder within this repo. 

# Results
In combination, the app.js and index.html file create a dynamic table that can be filtered by:
1. Date
2. City
3. State
4. Country
5. Shape

The website automatically loads the entire table and the app.js is set to monitor changes in the user input fields (using d3) and will filter on a single or multiple input. A few examples of questions that could be addressed include:

****A.**** Are certain shapes observed in particular geographies or across the entire country (note: all data relates to US sighting)? 
![image](https://user-images.githubusercontent.com/81983110/124404311-69d55e80-dd08-11eb-96d7-54c9685d7c8a.png)

****B.**** Do any of the datapoints represent the same sighting?
![z_single_search](https://user-images.githubusercontent.com/81983110/124404426-e49e7980-dd08-11eb-88c7-cd2074ff8acb.png)

# Summary
This filtering can be used for other similarly structured datasets, which is a strong benefit of this design. In particular, using the following code snippet is helpful because it allows for variability in the what keys can be included in the search:

Object.entries(filters).forEach(([key,value]) => filteredData = filteredData.filter(row => row[key] === value)

One downside of the structure of this code is that it requires the user to input an exact match to the data (aka "el cajon" not "El Cajon") which may contribute to false negatives. One potential workaround would be to create a dropdown menu, rather than a user input field for some of the search criteria.

