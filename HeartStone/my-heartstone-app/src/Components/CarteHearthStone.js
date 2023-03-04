import React from 'react';
import classes from './CarteHearthStone.module.css';

const CarteHearthStone = (props) => {
    return (
        <li className={classes.carte}>
            <h2>{ props.Nom}</h2>
            <h3>{props.Rareter }</h3>
            <p>Cout: { props.Cout}</p>
            <p>Attack: { props.Attack}</p>
            <p>Vie: { props.Vie}</p>
        </li>
    )
};

export default CarteHearthStone;