

export const SalesByAgeData = {

    labels: salesByAgeLabels,
    datasets: [
        {
            label: 'Dataset 1',
            data: generateLData(salesByAgeLabels, 0, 60),
            backgroundColor: "#344767",
            barPercentage: 0.8, // Determines the width of the bar relative to the space available (between 0 and 1)
            categoryPercentage: 1,
            borderRadius: 4,

        },
    ],
};
export const SalesByAgeOptions = {

    indexAxis: 'y',
    elements: {
        bar: {
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            border: { dash: [4, 4] }, // for the grid lines
            grid: {
                color: '#e9eaed', // for the grid lines

            },
        },
        x: {
            grid: {
                display: false, // This will hide the vertical grid lines
            },
        },
    },
};