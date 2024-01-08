import uk from '../../assets/icons/united-kingdom.png';
import us from '../../assets/icons/united-states.png';
import germany from '../../assets/icons/germany.png';
import canada from '../../assets/icons/canada.png';
import france from '../../assets/icons/france.png';

export const salesByCountryTable = [
    {
        country: {
            img: us,
            countryName: 'United States',
        },
        sales: 2500,
        value: '230,900',
        bounce: 29.9
    },
    {
        country: {
            img: uk,
            countryName: 'United Kingdom'
        },
        sales: 3900,
        value: '230,900',

        bounce: 40.22
    },
    {
        country: {
            img: germany,
            countryName: 'Germany'
        },
        sales: 1400,
        value: '230,900',

        bounce: 23.44
    },
    {
        country: {
            img: canada,
            countryName: 'Canada'
        },
        sales: 562,
        value: '230,900',

        bounce: 32.14
    },
];

export const salesByCountryCols = [
    {
        Header: 'Country',
        accessor: (row) => {
            const { img, countryName } = row.country;
            return (
                <div className='flex gap-2 pl-2 items-center py-2 lg:py-0'>
                    <img src={img} alt={countryName} className='h-6 w-6' />
                    <span className='lg:text-lg font-medium text-sm whitespace-normal'>{countryName}</span>
                </div>
            )
        },
    },


    {
        Header: 'Sales',
        accessor: 'sales',
        Cell: ({ row }) => {
            return (
                <span className=''>{row.sales}</span>
            )
        },
    },
    {
        Header: 'Value',
        accessor: 'value',
        Cell: ({ row }) => {
            return (
                <span className=''>${row.value}</span>
            )
        },
    },

    {
        Header: 'Bounce',
        accessor: 'bounce',
        Cell: ({ row }) => {
            return (
                <span className=''>{row.bounce}%</span>
            )
        },
    },
];


import { faker } from '@faker-js/faker';

const generateData = (labels, min, max) => {
    return labels.map(() => faker.number.int({ min: min, max: max }));
};
const days = ["M", "T", "W", "T", "F", "S", "S"];

export const websiteViewsData = {

    labels: days,
    datasets: [
        {
            label: 'Dataset 1',
            data: generateData(days, 0, 60),
            backgroundColor: "white",

            barPercentage: 0.1, // Determines the width of the bar relative to the space available (between 0 and 1)
            categoryPercentage: 1,
            borderRadius: 4,

        },
    ],
};
export const websiteViewsOptions = {

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
                color: "white",
                stepSize: 20,

            },
            border: {
                dash: [4, 4],
                color: "transparent",
            },
            grid: {
                color: "rgba(236,94,143)", // for the grid lines
            },
        },
        x: {
            ticks: {
                color: "white",
            },
            border: {
                dash: [4, 4],
                color: "transparent",
            }, // for the grid lines
            grid: {
                color: "rgba(236,94,143)",
            },
        },
    },
};
const DailySalesLabels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const DailySalesData = {
    labels: DailySalesLabels,
    datasets: [
        {
            label: "Google Ads",
            data: generateData(DailySalesLabels, 0, 600),
            borderColor: "white",
            backgroundColor: "white",
            borderWidth: 4, // Add this line

        },
    ],
};

export const DailySalesOptions = {
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
                stepSize: 200,
                color: "white",
            },
            border: {
                dash: [4, 4],
                color: 'transparent'
            }, // for the grid lines
            grid: {
                color: "#7bc17e", // for the grid lines

            },
        },
        x: {
            ticks: { color: "white", },
            border: {
                dash: [4, 4],
                color: 'transparent'
            }, grid: {
                display: false // for the grid lines

            },
        },
    },
};
export const CompletedTasksOptions = {
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
                stepSize: 200,
                color: "white",
            },
            border: {
                dash: [4, 4],
                color: 'transparent'
            }, // for the grid lines
            grid: {
                color: "#59595c", // for the grid lines

            },
        },
        x: {
            ticks: { color: "white", },
            border: {
                dash: [4, 4],
                color: 'transparent'
            }, grid: {
                display: false // for the grid lines

            },
        },
    },
};