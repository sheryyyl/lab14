'use strict';

let canvasElem = document.getElementById('chart');

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

function renderChart() {  
    let state = new AppState();  
    state.loadItems();  

    let productNames = [];  
    let productClicks = [];  
    let productViews = [];  

    for (let i = 0; i < state.allProducts.length; i++) {  
        productNames.push(state.allProducts[i].name);  
        productClicks.push(state.allProducts[i].timesClicked);  
        productViews.push(state.allProducts[i].timesShown);  
    }  

    let chartObj = {  
        type: 'bar',  
        data: {  
            labels: productNames,  
            datasets: [{  
                label: '# of votes',  
                data: productClicks,  
                borderWidth: 5,  
                backgroundColor: ['#ff006e'],  
                borderColor: ['#ff006e']  
            }, {  
                label: '# of views',  
                data: productViews,  
                borderWidth: 5,  
                backgroundColor: ['#8388ec'],  
                borderColor: ['#8388ec']  
            }]  
        },  
        option: {
            indexAxis: 'y',  
            scales: {  
                y: {  
                    beginAtZero: true,  
                    ticks: {color: 'black'}  
                },  
                x: {  
                    ticks: { color: 'black' }  
                }  
            }  
        }  
    };

    new Chart(canvasElem, chartObj);
}  

renderChart();
