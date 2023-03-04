import { Fragment } from 'react';
import classes from './CardHearthStone.module.css';

const CardHearthStone = (props) => {
    return <Fragment>
        <div className={classes.card}>
            {props.children}
            <button>Update</button>
            <button>Delete</button>
        </div>
    </Fragment>
};

export default CardHearthStone;