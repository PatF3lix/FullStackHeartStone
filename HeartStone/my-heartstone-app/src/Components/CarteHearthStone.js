import React from 'react';
import classes from './CarteHearthStone.module.css';

const CarteHearthStone = (props) => {
    return <Fragment>
        <li className={classes.carte}>
            <h2>Nom: { props.Nom}</h2>
            <h3>Rareter: {props.Rareter }</h3>
            <p>Cout: { props.Cout}</p>
            <p>Attack: { props.Attack}</p>
            <p>Vie: { props.Vie}</p>
        </li>
    </Fragment>
};

export default CarteHearthStone;