import { faker } from '@faker-js/faker';
const generateLData = (labels, min, max) => {
  return labels.map(() => faker.number.int({ min: min, max: max }));
};

export const channelsData = {
  labels: ["Facebook", "Direct", "Organic", "Referral"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["#1a73e8", "#e91e63", "#344767", "#7b809a"],
      borderWidth: 1,
    },
  ],
};
export const channelsOptions = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: 12,
        },
        padding: 20,
        usePointStyle: true,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const revenueLabels = ["Jan", "Feb", "March", "April", "May", "June", "July"];
const salesByAgeLabels = ["16-20", "21-25", "26-30", "31-36", "37-42", "42-50", "50+"];

export const revenueData = {
  labels: revenueLabels,
  datasets: [
    {
      label: "Google Ads",
      data: generateLData(revenueLabels, 0, 700),
      borderColor: "#344767",
      backgroundColor: "#344767",
    },
    {
      label: "Facebook Ads",
      data: generateLData(revenueLabels, 0, 700),
      borderColor: "#e91e63",
      backgroundColor: "#e91e63",
    },
  ],
};

export const revenueOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 12,
        },
        padding: 10,
        usePointStyle: true,
      },
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
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        color: '#e9eaed', // for the grid lines

      },
    },
  },
};
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
