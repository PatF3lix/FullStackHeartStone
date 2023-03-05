import { Fragment } from 'react';
import classes from './CardHearthStone.module.css';

const CardHearthStone = (props) => {
    return <Fragment>
        <div className={classes.card}>
            {props.children}
        </div>
    </Fragment>
};

export default CardHearthStone;