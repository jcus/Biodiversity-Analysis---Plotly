// 1 function the populates the metadata ,
//data columns= samples.json name, metadata, sample
//"metadata":[{"id", "ethnicity", "gender", "age","location", "bbtype", "wfreq"}, 
//"sample"sample:{"id": "941", "otu_ids", "sample_values","otu_labels}
function init() 
{
    d3.json("samples.json").then((data) => {
        var sample_names = data.names;

        sample_names.forEach((sample) => {
            d3.select("#selDataset")
            .append("option")
            .text(sample)
            .property("value", sample);
        });

        var sample1 = sample_names[0];
        barChart(sample1);
        BubbleChart(sample1);
    //    metadataChart(sample1);
        gaugeChart(sample1);
    });
}
init();


function demoInfo(sample)
{
    //console.log(sample);
    // use d3.json inorder to get the data
    d3.json("samples.json").then((data) => {
        // grab all of the metadata
        let metaData = data.metadata;
        //console.log(metaData);

        // filter based on the value of the sample ( should return 1 result in an array based on the dataset)
        let result = metaData.filter(sampleResult => sampleResult.id == sample);
        //console.log(result);

        // access index 0 from the array
        let resultData = result[0];
        //console.log(resultData);

        // clear the metadata out-- clears the HTML out
        d3.select("#sample-metadata").html(""); 

        // use Object.entries to get the value key pairs
        Object.entries(resultData).forEach(([key, value]) =>{
            // add to the sample data / demographics section
            d3.select("#sample-metadata")
                .append("h5").text(`${key}: ${value}`);
        });

        // use the metadata to build the gauge
        buildGauge(result);
    });
}

// 2 function that builds the bar chart
function barChart(sample) 
{
    //console.log(sample);
    //let data = d3.json("samples.json");
    //console.log(data);

    d3.json("samples.json").then((data) => {
        var sample_values = data.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values;
        var otu_ids = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_ids;
        var otu_labels = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_labels;
        
        // build the bar chart
        // get the yTicks
        var barData = [{
                x: sample_values.slice(0, 10).reverse(),
                y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
        }];

        /*
        let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`);
        let xValues = sample_values.slice(0, 10);
        let textLabels = otu_labels.slice(0, 10);
        */

        var barLayout = {
            title: "Top 10 Bacterial Cultures Found",
            xaxis: { title: "Sample Values"},
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
        };
        /*let barLayout = {
            title: "Top 10 Bacterial Cultures Found"
        };
        */

        Plotly.newPlot("bar", barData, barLayout);   
        //Plotly.newPlot("bar", [barChart], layout);
    });


 // function that builds the bar chart
function buildBarChart(sample)
{
    d3.json("samples.json").then((data) => {
        // grab all of the samples
        let sampleData = data.samples;


        // filter based on the value of the sample ( should return 1 result in an array
        // based on the dataset)
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        
        // access index 0 from the array
        let resultData = result[0];


        // get the otu_ids, labels, and sample_values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
     
        // build the bar chart
        // get the yTicks
        let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`);
        let xValues = sample_values.slice(0, 10);
        let textLabels = otu_labels.slice(0, 10);


        let barChart = {
            y: yticks.reverse(),
            x: xValues.reverse(),
            text: textLabels.reverse(),
            type: "bar",
            orientation: "h"
        }


        let layout = {
            title: "Top 10 Belly Button Bacteria"
        };


        Plotly.newPlot("bar", [barChart], layout);
    });
}
 /////////   
 // 3 function that builds the bubble chart

    d3.json("samples.json").then((data) => {
        // grab all of the samples
        let sampleData = data.samples;

        // filter based on the value of the sample ( should return 1 result in an array
        // based on the dataset)
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        
        // access index 0 from the array
        let resultData = result[0];

        // get the otu_ids, labels, and sample_values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
     
        // build the bar chart
        // get the yTicks
        let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`);
        let xValues = sample_values.slice(0, 10);
        let textLabels = otu_labels.slice(0, 10);

        let barChart = {
            y: yticks.reverse(),
            x: xValues.reverse(),
            text: textLabels.reverse(),
            type: "bar",
            orientation: "h"
        }

        let layout = {
            title: "Top 10 Belly Button Bacteria"
        };

        Plotly.newPlot("bar", [barChart], layout);
    });
}


// 3 function that builds the bubble chart
function BubbleChart(sample)
{
    //console.log(sample);
    //let data = d3.json("samples.json");
    //console.log(data);
    d3.json("samples.json").then((data) => {
        // grab all of the samples
        let sampleData = data.samples;

        console.log(sample);
        // filter based on the value of the sample ( should return 1 result in an array
        // based on the dataset)
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);

        //console.log(resultData);
        // access index 0 from the array        
        let resultData = result[0];


        // get the otu_ids, labels, and sample_values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
     
        // build the bubble chart
        let bubbledata = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }

        console.log(bubbledata);

        let layout = 
        {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30}
        };
          

        Plotly.newPlot("bubble", [bubbledata], layout);
    });
}


// 4 function that initializes the dashboard
function initialize()
{
    //let data = d3.json("samples.json");
    //console.log(data);

    // access the dropdown selector from the index.html file
    var select = d3.select("#selDataset");

    // use d3.json inorder to get the data
    d3.json("samples.json").then((data) => {
        let sampleNames = data.names; // made an array of just the names
        //console.log(sampleNames);

        // use a foreach in order to create options for each sample in the selector
        sampleNames.forEach((sample) => {
            select.append("option")
                .text(sample)
                .property("value", sample);
        }); 
        
        // when initialized, pass in the information for the first sample
        let sample1 = sampleNames[0];

        // call the function to build the metadata
        demoInfo(sample1);
        // call function to build the bar chart
        BarChart(sample1);
        // call function to build the bubble chart
        BubbleChart(sample1);
        metadataChart(newSample);
        gaugeChart(newSample);
    });
}



// 5 function that updates the dashboard
function optionChanged(newSample)
{
    // call the update to the metadata
    demoInfo(newSample);
    // call function to build the bar chart
    barChart(newSample);
    // call function to build the bubble chart
    BubbleChart(newSample);
    metadataChart(newSample);
    gaugeChart(newSample);
}


// 6 call the initialize function
initialize();