import React from "react";
import CarteHearthStone from "./CarteHearthStone";
import classes from './ListeCartesHearthStone.module.css';

const ListCartesHearthStone = (props) => {
    return (
        <ul className={classes['cartes-list']}>
            {props.CarteHearthStone.map((carte) => (
                <CarteHearthStone
                    updateHandler={props.updateHandler}
                    deleteHandler={props.deleteHandler}
                    Id={carte.Id}
                    Rareter={carte.Rareter}
                    Nom={carte.Nom}
                    Cout={carte.Cout}
                    Attack={carte.Attack}
                    Vie={carte.Vie} />
            ))}
        </ul>
    );
};

export default ListCartesHearthStone;