import { Fragment } from "react";
import { NavLink } from 'react-router-dom';
import classes from './NavigationPrincipale.module.css';

// Ce composant est responsable pour la bar de navigation qui ce retrouve sur tout les Page de cette application.

const NavigationPrincipale = () => {
    return <Fragment>
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink style={{fontSize: 20}} to={'/'} className={({ isActive }) =>
                            isActive ? classes.active : undefined} end={true}>PagePrincipale
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={{fontSize: 20}} to={'/HearthStone'} className={({ isActive }) =>
                            isActive ? classes.active : undefined} end={true}>Application HearthStone
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </Fragment>
};

export default NavigationPrincipale;