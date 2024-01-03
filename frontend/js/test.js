var ctx = document.getElementById('priceChart').getContext('2d');
var slider = document.getElementById('priceSlider');

// Initial price values
var minPrice = 50;
var maxPrice = 200;

var priceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Price Range'],
        datasets: [{
            label: 'Minimum Price',
            data: [minPrice],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: 'Maximum Price',
            data: [maxPrice],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'category',
                labels: ['Price Range'],
                offset: true,
            },
            y: {
                beginAtZero: true,
                max: 250
            }
        },
        plugins: {
            dragData: {
                onDrag: function (e, datasetIndex, index, value) {
                    if (datasetIndex === 0) {
                        minPrice = value;
                    } else {
                        maxPrice = value;
                    }

                    // Update input values or perform any other actions
                    updateInputs();

                    // Prevent the drag event from propagating to the chart.js library
                    e.preventDefault();
                }
            }
        }
    }
});

// Add an event listener to the range slider
slider.addEventListener('input', function () {
    // Calculate the new price values based on the slider value
    var sliderValue = parseFloat(slider.value);
    var newMinPrice = minPrice + (sliderValue - 50);
    var newMaxPrice = maxPrice + (sliderValue - 50);

    // Update the chart with the new price values
    priceChart.data.datasets[0].data[0] = newMinPrice;
    priceChart.data.datasets[1].data[0] = newMaxPrice;
    priceChart.update();

    // Update the input values
    minPrice = newMinPrice;
    maxPrice = newMaxPrice;
    updateInputs();
});

// Function to update input values
function updateInputs() {
    document.getElementById('minPrice').value = minPrice;
    document.getElementById('maxPrice').value = maxPrice;
}