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
        sales: 720,
        value: '230,900',
        bounce: 20
    },
    {
        country: {
            img: uk,
            countryName: 'United Kingdom'
        },
        sales: 620,
        value: '230,900',

        bounce: 30
    },
    {
        country: {
            img: germany,
            countryName: 'Germany'
        },
        sales: 520,
        value: '230,900',

        bounce: 40
    },
    {
        country: {
            img: canada,
            countryName: 'Canada'
        },
        sales: 420,
        value: '230,900',

        bounce: 50
    },
    {
        country: {
            img: france,
            countryName: 'France'
        },
        sales: 320,
        value: '230,900',
        bounce: 60
    }
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
        Header: 'Value',
        accessor: 'value',
        Cell: ({ row }) => {
            return (
                <span className='text-lg font-medium'>{row.value}</span>
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