import { faker } from '@faker-js/faker';
import uk from '../../assets/icons/united-kingdom.png';
import us from '../../assets/icons/united-states.png';
import germany from '../../assets/icons/germany.png';
import canada from '../../assets/icons/canada.png';
import france from '../../assets/icons/france.png';
import shoes from '../../assets/Images/blue-shoe.jpg';
import mug from '../../assets/Images/black-mug.jpg';
import chair from '../../assets/Images/black-chair.jpg';
import charger from '../../assets/Images/bang-sound.jpg';
import camera from '../../assets/Images/photo-tools.jpg';
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
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


export const salesByCountryTable = [
  {
    country: {
      img: us,
      countryName: 'United States',
    },
    sales: 720,
    bounce: 20
  },
  {
    country: {
      img: uk,
      countryName: 'United Kingdom'
    },
    sales: 620,
    bounce: 30
  },
  {
    country: {
      img: germany,
      countryName: 'Germany'
    },
    sales: 520,
    bounce: 40
  },
  {
    country: {
      img: canada,
      countryName: 'Canada'
    },
    sales: 420,
    bounce: 50
  },
  {
    country: {
      img: france,
      countryName: 'France'
    },
    sales: 320,
    bounce: 60
  }
];
export const productsTable = [
  {
    product: {
      img: shoes,
      productName: 'Nike v22 Running',
      orders: '8, 320'
    },
    value: '130,922',
    adsSpent: '9,500',
    refunds: 13
  },
  {
    product: {
      img: mug,
      productName: 'Business Kit (Mug + Notebook)',
      orders: '12,821'
    },
    value: '80,250',
    adsSpent: '4,200',
    refunds: 40
  }, {
    product: {
      img: chair,
      productName: 'Black Chair',
      orders: '2,421'
    },
    value: '40,600',
    adsSpent: '9,430',
    refunds: 54
  }, {
    product: {
      img: charger,
      productName: 'Wireless Charger',
      orders: '5,921'
    },
    value: '91,300',
    adsSpent: '7,364',
    refunds: 5
  },
  {
    product: {
      img: camera,
      productName: 'Mountain Trip Kit (Camera + Backpack)',
      orders: '921'
    },
    value: '140,925',
    adsSpent: '20,531',
    refunds: 121
  },
];
export const salesByCountryCols = [
  {
    Header: 'Country',
    accessor: (row) => {
      const { img, countryName } = row.country;
      return (
        <div className='flex gap-2 pl-2'>
          <img src={img} alt={countryName} width={24} />
          <span className='text-lg font-medium'>{countryName}</span>
        </div>
      )
    },
  },
  {
    Header: 'Sales',
    accessor: 'sales',
    Cell: ({ row }) => {
      return (
        <span className='text-lg font-medium'>{row.sales}</span>
      )
    },
  },
  // Add other columns as needed...

  {
    Header: 'Bounce',
    accessor: 'bounce',
    Cell: ({ row }) => {
      return (
        <span className='text-lg font-medium'>{row.bounce}</span>
      )
    },
  },
];

export const productsCols = [
  {
    Header: 'PRODUCT',
    accessor: (row) => {
      const { img, productName, orders } = row.product;

      return (
        <div className='flex gap-4 pl-2 items-center py-2'>
          <img src={img} alt={productName} width={48} height={48} className='rounded-full' />
          <div className='flex flex-col'>
            <span className='text-lg font-medium'>{productName}</span>
            <span className='text-base text-[#4caf50]'>{orders} <span className='text-gray-400'>Order</span></span>
          </div>
        </div>
      );
    },
  },
  {
    Header: 'VALUE',
    accessor: (row) => {
      return (
        <span className='text-gray-400'>${row.value}</span>
      )
    },
  },
  // Add other columns as needed...

  {
    Header: 'ADS SPENT',
    accessor: (row) => {
      return (
        <span className='text-gray-400'>${row.adsSpent}</span>
      )
    },
  },
  {
    Header: 'REFUNDS',
    accessor: (row) => {
      return (
        <div className='flex items-center justify-center'>
          <span className='text-gray-400'>{row.refunds}</span>
          {row.refunds > 50 ? <RiArrowUpSLine size={20} className='text-red-500 ' /> : <RiArrowDownSLine className='text-[#4caf50]' size={20} />}
        </div>
      )
    },
  },
];