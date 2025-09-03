import clsx from 'clsx';
import { NavLink } from 'react-router';
import styles from './Navigation.module.scss';

const navItems = [
    {
        to: '/',
        title: 'Home',
    },
    {
        to: '/counter',
        title: 'counter',
    },
    {
        to: '/todo',
        title: 'todo',
    },
    {
        to: '/profile',
        title: 'profile',
    },
    {
        to: '/products',
        title: 'products',
    },
    {
        to: '/comments',
        title: 'comments',
    },
    {
        to: '/weather',
        title: 'weather',
    },
    {
        to: '/buttons',
        title: 'buttons',
    },
];

function Navigation() {
    return (
        <nav>
            <ul className={clsx(styles['nav-list'])}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink className={styles['nav-link']} to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
