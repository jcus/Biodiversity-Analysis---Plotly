# Belly Button Biodiversity Analysis- Plot.ly :medical_symbol:


![Bacteria by filterforge.com](Images/microbes-sem.jpg)

# Summary :medical_symbol:

From an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. In the aforementioned study, the dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. 

The microbes inhabiting human navels and the factors support this dashboard allows specific study participants to be selected, in order to view their individual demographic information, a list of their navel microbial species and relative abundances, and their weekly navel washing frequency.


# Process :medical_symbol:
Use D3 library to import and process the Json format data. Through Plotly to generate the required visualizations of the sample metadata, i.e., and individual's demographic information. Also with JavaScript to display and present interactive visualization of each key-value pair value pair from the belly metadata of button biodiversity as JSON object within a web page. 

## Step 1: Plotly

1. Use the D3 library to read original data in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use `sample_values` as the values for the bar chart.

* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

  ![bar Chart](Images/hw01.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Update all of the plots any time that a new sample is selected.

Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

![hw](Images/hw02.png)


## Advanced Challenge (Optional)

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* Modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)


## Step 2: Deployment

* Deploy app to a free static page hosting service and a thorough README.md file, such as GitHub Pages. 


## Hints

* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.


- - -
![Bacteria by filterforge.com](Images/bacteria.jpg)
## References

Data Set Used:
Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

[Ploty Chart References] (https://plotly.com/javascript/)

[D3 Data-Driven Documents] (https://d3js.org/)


## Technologies Used
PyCharm
JavaScript - Plotly, D3
HTML5
CSS3
Bootstrap

- - -
