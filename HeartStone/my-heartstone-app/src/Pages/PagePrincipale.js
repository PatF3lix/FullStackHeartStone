import { Fragment } from "react";
import reactImg from '../Resource/HearthStone.jpeg';
import { Link } from "react-router-dom";

const PagePrincipale = () => {
    return <Fragment>
        <div>
            <u>
                <h1 style={{ paddingBottom: '50px' }}>Bienvenue Chez HearthStone inc.</h1>
            </u>
            <img src={reactImg} alt="reactImg" />
            <div>
                <Link to="https://documenter.getpostman.com/view/24381246/2s93JnVSdu">Documentation PostMan</Link>
            </div>
        </div>
    </Fragment>
};

export default PagePrincipale;