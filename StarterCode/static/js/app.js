// 1 function the populates the metadata ,
//data columns= samples.json name, metadata, sample
//"metadata":[{"id", "ethnicity", "gender", "age","location", "bbtype", "wfreq"}, 
//"sample"sample:{"id": "941", "otu_ids", "sample_values","otu_labels}
function init() {
    d3.json("samples.json").then((data) => {
        var sample_names = data.names;

        sample_names.forEach((sample) => {
            d3.select("#selDataset")
            .append("option")
            .text(sample)
            .property("value", sample);
        });

        var sample_one = sample_names[0];
        barChart(sample_one);
        bubbleChart(sample_one);
        metadataChart(sample_one);
        gaugeChart(sample_one);
    });
}

init();

// 2 function that builds the bar chart

function barChart(sample) {
    d3.json("samples.json").then((data) => {
        var sample_values = data.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values;
        var otu_ids = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_ids;
        var otu_labels = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_labels;

        var barData = [{
                x: sample_values.slice(0, 10).reverse(),
                y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
        }];

        var barLayout = {
            title: "Top 10 Bacterial Cultures Found",
            xaxis: { title: "Sample Values"},
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
        };

        Plotly.newPlot("bar", barData, barLayout);    
    });
}
/*      bubbleChart(sample_one);
        metadataChart(sample_one);
        gaugeChart(sample_one);
*/

/*// 3 function that builds the bubble chart
// 4 function that initializes the dashboard
// 5 function that updates the dashboard
// 6 call the initialize function
*/


/*
function barChart(sample) {
    d3.json("samples.json").then((data) => {
        var sample_values = data.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values;
        var otu_ids = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_ids;
        var otu_labels = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_labels;

        var barData = [{
                x: sample_values.slice(0, 10).reverse(),
                y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
        }];

        var barLayout = {
            title: "Top 10 Bacterial Cultures Found",
            xaxis: { title: "Sample Values"},
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
        };

        Plotly.newPlot("bar", barData, barLayout);    
    });
}
*/

/*
function optionChanged(newSample) {
    barChart(newSample);
    bubbleChart(newSample);
    metadataChart(newSample);
    gaugeChart(newSample);
}
*/




