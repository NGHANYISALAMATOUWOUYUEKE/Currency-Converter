//Data for the chart


let savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
// console.log(savedTasks)
const labels = savedTasks.map(task => task.currency2)
const value = savedTasks.map(task => task.ans)
const data = {
    labels: labels,
    datasets: [{
        label: 'Sample Data',
        data: value,
        fill: false,
        borderColor: 'blue',
        tension: 0.1
    }]

};


//confirguration for the chart
const config = {
    type: 'line',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: false //set to true if you want the scale to start from zero
            }
        },
        // plogins:{
        //     tooltip:{
        //         enabled:true
        //     }
        // }
        maintainAspectRatio: false
    }
};


//Render the chart in an html canvas element with id="myChart"

let myChart = new Chart(
    document.getElementById('mychart'),
    config
);
function setChartType(chartType) {
    myChart.destroy();
    config.type = chartType; //Update the chart type
    myChart = new Chart(document.getElementById('mychart'), config);//reinitialise the chart
}

//add an event listener to the buttons


document.querySelector('.chart_types').addEventListener('click', function (event) {
    if (event.target.localName === 'button') {
        const chartType = event.target.getAttribute('data-chart-type');
        setChartType(chartType);
    }
})