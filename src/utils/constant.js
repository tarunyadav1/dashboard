import RevenueIcon from '../assets/images/revenues.svg';
import TransactionIcon from '../assets/images/transactions.svg';
import LikeIcon from '../assets/images/likes.svg';
import UsersIcon from '../assets/images/users.svg';

const CARD_DATA = [
    {
        title: 'Total Revenues',
        amount: '$2,129,430',
        color: 'light-blue',
        icon: RevenueIcon
    },
    {
        title: 'Total Transactions',
        amount: '1,520',
        color: 'peach',
        icon: TransactionIcon
    },
    {
        title: 'Total Likes',
        amount: '9,721',
        color: 'light-pink',
        icon: LikeIcon
    },
    {
        title: 'Total Users',
        amount: '892',
        color: 'light-purple',
        icon: UsersIcon
    }
];

const LINE_CHART_DATA = [
    {
        name: 'Week 1',
        user: 4000,
        Guest: 6000,
        amt: 2400
    },
    {
        name: 'Week 2',
        user: 3000,
        Guest: 1000,
        amt: 2210
    },
    {
        name: 'Week 3',
        user: 2000,
        Guest: 9800,
        amt: 2290
    },
    {
        name: 'Week 4',
        user: 2780,
        Guest: 3908,
        amt: 2000
    }
];

export { CARD_DATA, LINE_CHART_DATA };
