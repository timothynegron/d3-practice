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

const width1 = 200;
const height = 100;
const padding = 2;
const dataset = [5, 10, 15, 20, 25];
const svg = d3.select("#drawing")
                .append("svg")
                .attr("width", width1)
                .attr("height", height);

// d for dataset
svg.selectAll("rect")
    .data(dataset)
    .enter() // Create if rect don't exist
    .append("rect")
    .attr("x", function(d, i){
        // i is indexes
        // d is dataset
        return i * (width1/dataset.length);
    })
    .attr("y", function(d){
        // Multiplying dataset by 4 to get bigger bars
        return height - (d * 4);
    })
    .attr("width", (width1/dataset.length) - padding)
    .attr("height", function(d){
        return d * 4
    });

// ┌────────────────────────────────────────────┐
// │   Using variables with d3 svg continuation │	
// └────────────────────────────────────────────┘

const width2 = 300; // Width of box
const height2 = 350; // Height of box
const padding2 = 2;
const dataset2 = [10, 20, 30, 40, 50, 60, 70];
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

// ┌──────────────────────────────────────────────┐
// │   Using variables with d3 svg color function │	
// └──────────────────────────────────────────────┘

const width3 = 300; // Width of box
const height3 = 350; // Height of box
const padding3 = 2;
const dataset3 = [15, 20, 35, 45, 50, 60, 65];
const svg3 = d3.select('#drawing3').append('svg')
                .attr('width', width3)
                .attr('height', height3);

function colorPicker(v){
    if(v<=20) {return "#666666";}
    else if (v>20) {return "#FF0033";}
}

svg3.selectAll("rect")
    .data(dataset3)
    .enter()
    .append("rect")
    .attr("x", function(d, i){ // Function will get called for each index
        return i * (width3 / dataset3.length)
    })
    .attr("y", function(d){
        return height3 - (d * 5);
    })
    .attr("width", width3 / dataset3.length - padding3)
    .attr("height", function(d){
        return d*5;
    })
    .attr("fill", function(d){
        return colorPicker(d)
    });

// ┌──────────────────────────────────────┐
// │   Using variables with d3 svg Labels │	
// └──────────────────────────────────────┘

const width4 = 400; // Width of box
const height4 = 350; // Height of box
const padding4 = 2;
const dataset4 = [15, 20, 35, 45, 50, 60, 65, 11, 30, 60, 50, 18, 7];
const svg4 = d3.select('#drawing4').append('svg')
                .attr('width', width4)
                .attr('height', height4);

function colorPicker(v){
    if(v<=20) {return "#666666";}
    else if (v>20) {return "#FF0033";}
}

svg4.selectAll("rect")
    .data(dataset4)
    .enter()
    .append("rect")
    .attr("x", function(d, i){return i * (width4 / dataset4.length)})
    .attr("y", function(d){return height4 - (d * 5);})
    .attr("width", width4 / dataset4.length - padding3)
    .attr("height", function(d){return d*5;})
    .attr("fill", function(d){return colorPicker(d)});


// Add another text svg object to add text
svg4.selectAll("text")
    .data(dataset4)
    .enter()
    .append("text")
    .text(function(d) {return d;})   
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
        return (i * (width4 / dataset4.length)) + (width4/dataset4.length - padding)/2;
    })
    .attr("y", function(d) {return height4-(d*5)+25;})
    .attr("font-family", "san-serif")
    .attr("font-size", 25)
    .attr("fill", "#FFFFFF")

// ┌───────────────────┐
// │   d3 Line Graph   │	
// └───────────────────┘

// Dimensions of graph
const height5 = 320;
const width5 = 500;

// Data
const monthlySales = [ 
    {"month":10, "sales": 100},
    {"month":20, "sales": 130},
    {"month":30, "sales": 250},
    {"month":40, "sales": 300},
    {"month":50, "sales": 265},
    {"month":60, "sales": 225},
    {"month":70, "sales": 180},
    {"month":80, "sales": 120},
    {"month":90, "sales": 145},
    {"month":100, "sales": 130}
];

// Create a Line Function to draw the graph
const lineFun = d3.svg.line()
                    .x(function(d) {return d.month*4;})
                    .y(function(d) {return height5-d.sales;})
                    .interpolate("basis"); // I believe only v3 supports interpolate

const svg5 = d3.select("#drawing5")
                .append("svg")
                .attr("width", width5)
                .attr("height", height5);

// Only version 3 supports .attr(obj) | Might be able to use .attrs(obj) with v6
const viz5 = svg5.append("path") // Path d operator uses coordinates to draw line (inspect)
                .attr({
                    d: lineFun(monthlySales),
                    "stroke": "purple",
                    "stroke-width": 2,
                    "fill": "none"
                });
// Add labels
const labels = svg5.selectAll("text")
                    .data(monthlySales)
                    .enter()
                    .append("text")
                    .text(function(d){return d.sales;})
                    .attr({
                        x: function(d){return d.month*4-25;},
                        y: function(d){return height5-d.sales},
                        "font-size": 14,
                        "font-family": "sans-serif",
                        "fill": "#666666",
                        "text-anchor": "start",
                        "dy": ".7em", // line height
                        "font-weight": function(d,i){
                            if(i===0 || i===(monthlySales.length - 1)){
                                return "bold";
                            }
                            else{
                                return "normal";
                            }
                        }
                    })

// ┌─────────────────────┐
// │   d3 Scatter Plot   │	
// └─────────────────────┘

// Used to look for clusters or out liars

// Dimensions of graph
const height6 = 320;
const width6 = 500;

// Data
const monthlySales6 = [ 
    {"month":10, "sales": 100},
    {"month":20, "sales": 130},
    {"month":30, "sales": 250},
    {"month":40, "sales": 300},
    {"month":50, "sales": 265},
    {"month":60, "sales": 225},
    {"month":70, "sales": 180},
    {"month":80, "sales": 120},
    {"month":90, "sales": 145},
    {"month":100, "sales": 130}
];

// KPI (qualitative attributes) are they good or are they bad
function salesKPI(d){
    if(d>=250) {return "#33CC66";} else
    if(d<250) {return "#666666";}
}

// Create our svg
const svg6 = d3.select("#drawing6")
                .append("svg")
                .attr({width: width6, height: height6});

// Add dots
const dots = svg6.selectAll("circle")
                .data(monthlySales6)
                .enter()
                .append("circle")
                .attr({
                    cx: function(d){return d.month*3;},
                    cy: function(d){return height6-d.sales;},
                    r: 5,
                    "fill": function(d){return salesKPI(d.sales);}
                })