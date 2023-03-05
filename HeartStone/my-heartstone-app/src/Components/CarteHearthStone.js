import React from 'react';
import classes from './CarteHearthStone.module.css';

const CarteHearthStone = (props) => {
    return (
        <li key={props.Id} className={classes.carte}>
            <h2>{props.Nom}</h2>
            <h3>{props.Id }</h3>
            <h3>{props.Rareter }</h3>
            <p>Cout: { props.Cout}</p>
            <p>Attack: { props.Attack}</p>
            <p>Vie: {props.Vie}</p>
            <button type="button" onClick={() => this.props.updateHandler(props.Id) }>Update</button>
            <button type="button" onClick={() => this.props.deleteHandler(props.Id) }>Delete</button>
        </li>
    )
};

export default CarteHearthStone;