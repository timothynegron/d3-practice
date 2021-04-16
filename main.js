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

// ┌────────────────────────────────┐
// │   Using variables with d3 svg  │	
// └────────────────────────────────┘

const width = 200;
const height = 100;
const padding = 2;
const dataset = [5, 10, 15, 20, 25];
const svg = d3.select("#drawing")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

// d for dataset
svg.selectAll("rect")
    .data(dataset)
    .enter() // Create if rect don't exist
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

// ┌────────────────────────────────────────────┐
// │   Using variables with d3 svg continuation │	
// └────────────────────────────────────────────┘

const width2 = 300; // Width of box
const height2 = 350; // Height of box
const padding2 = 2;
const dataset2 = [10, 20, 30, 40, 50, 60, 70]
const svg2 = d3.select("#drawing2").append("svg")
                .attr("width", width2)
                .attr("height", height2);

svg2.selectAll("rect")
    .data(dataset2)
    .enter()
    .append("rect")
    .attr("x", function(d, i){ // Function will get called for each index
        return i * (width2 / dataset2.length)
    })
    .attr("y", function(d){
        return height2 - (d * 5);
    })
    .attr("width", width2 / dataset2.length - padding2)
    .attr("height", function(d){
        return d*5;
    })
    .attr("fill", function(d){
        return "rgb(" + (d*3) + ", 0, 0)"
    });
