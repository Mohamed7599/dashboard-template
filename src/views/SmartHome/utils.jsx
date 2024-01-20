import { faker } from '@faker-js/faker';
import React from 'react';
const generateData = (labels, min, max) => {
    return labels.map(() => faker.number.int({ min: min, max: max }));
};
const days = ["M", "T", "W", "T", "F", "S", "S"];

export const wheatherData = {

    labels: days,
    datasets: [
        {
            label: 'Dataset 1',
            data: generateData(days, 0, 35),
            backgroundColor: "#344767",

            barPercentage: 0.1, // Determines the width of the bar relative to the space available (between 0 and 1)
            categoryPercentage: 1,
            borderRadius: 4,

        },
    ],
};
export const wheatherOptions = {

    indexAxis: 'x',
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
            ticks:
            {
                stepSize: 5,
            },
            border: { dash: [4, 4] }, // for the grid lines
            grid: {
                color: '#e9eaed', // for the grid lines
            },
        },
        x: {
            border: { dash: [4, 4] }, // for the grid lines
            grid: {
                color: '#e9eaed', // for the grid lines
            },
        },
    },
};
export const consumptionData = {
    labels: ['Living Room', 'Kitchen', 'Attic', 'Garage', 'Basement',],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#e91e63',
                '#646c7b',
                '#2a84eb',
                '#5cb360',
                '#fe9e19',
            ],
            borderColor: [
                '#e91e63',
                '#646c7b',
                '#2a84eb',
                '#5cb360',
                '#fe9e19'
            ],
            borderWidth: 2,

        },
    ],
};
export const consumptionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.5,
    cutout: '95%', // Adjust this value as needed
    plugins: {
        legend: {
            display: false,

        },
    },
};

