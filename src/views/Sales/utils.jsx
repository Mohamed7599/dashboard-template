import { faker } from '@faker-js/faker';
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const revenueData = {
  labels,
  datasets: [
    {
      label: "Google Ads",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#344767",
      backgroundColor: "#344767",
    },
    {
      label: "Facebook Ads",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#e91e63",
      backgroundColor: "#e91e63",
    },
  ],
};

export const revenueoptions = {
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
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)', // Color of x-axis grid lines
        borderDash: [5, 5], // Apply dashed lines to the x-axis grid
      },
    },
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)', // Color of y-axis grid lines
        borderDash: [5, 5], // Apply dashed lines to the y-axis grid
      },
    },
  },
};
