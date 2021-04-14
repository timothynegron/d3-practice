// ┌─────────────────────────────────┐
// │   Adding D3 Bar with D3 object  │	
// └─────────────────────────────────┘

d3.select("#rec") // selects element html tag by id
    .append("svg") // add an <svg> html element
    .append("rect") // add <rect> svg element
    .attr("width", 50) // set the attribute of width
    .attr("height", 200) // set the attribute of height
    .style("fill", "green"); // add some style

// ┌────────────────────────────────────┐
// │   Adding D3 Circle with D3 object  │	
// └────────────────────────────────────┘

d3.select("#cir") // selects element html tag by id
    .append("svg") // add an <svg> html element
    .attr("width",150) // set the attribute of width
    .attr("height",100) // set the attribute of height
    .append("circle") // add <circle> svg element
    .attr("cx",90) // set x coordinate
    .attr("cy",65) // set y coordinate
    .attr("r",25) // set size of circle
    .style("fill","green") // add some style

// ┌──────────────────────────────────┐
// │   Adding D3 Text with D3 object  │	
// └──────────────────────────────────┘

d3.select("#tex")
    .append("svg")
    .attr("width",450)
    .attr("height",50)
    .append("text")
    .text("Adding text with D3 right here.")
    .attr("y",25)
    .attr("x",0)
    .style("fill", "red");

// ┌─────────────────────────────┐
// │   Using variables with svg  │	
// └─────────────────────────────┘

const width = 200;
const height = 100;
const padding = 2;
let dataset = [5, 10, 15, 20, 25];
let svg = d3.select("#drawing")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

// d for dataset
svg.selectAll("#drawing")
    .data(dataset)
    .enter() // Create if don't exist
    .append("rect")
    .attr("x", function(d, i){
        // i is indexes
        // d is dataset
        return i * (width/dataset.length);
    })
    .attr("y", function(d){
        // Multiplying dataset by 4 to get bigger bars
        return height - (d * 4);
    })
    .attr("width", (width/dataset.length) - padding)
    .attr("height", function(d){
        return d * 4
    });