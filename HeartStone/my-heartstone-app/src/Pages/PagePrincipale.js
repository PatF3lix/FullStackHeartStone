import { Fragment } from "react";
import reactImg from '../Resource/HearthStone.jpeg';
import { Link } from "react-router-dom";
import MyCard from "../UI/MyCard";

const PagePrincipale = () => {
    return <Fragment>
        <MyCard>
            <div>
                <u>
                    <h1 style={{ paddingBottom: '50px' }}>Bienvenue Chez HearthStone inc.</h1>
                </u>
                <img src={reactImg} alt="reactImg" />
                <div>
                <h5>Bonjour à vous chers.ères lecteurs.trices!<br></br>
                    Bienvenue à notre Application Web Front End React!<br></br>
                    Ceci est une Application FullStack, supporté par la base de donner Sql Server,<br></br>
                    et consomer par notre API (REST), pour ensuite offrir les services CRUD<br></br>
                    qui seront consomés par notre application Front-End React.<br></br>
                    Une Interface Graphique démontant la consomation de c'est service<br></br>
                    Pour explorer notre interface graphic,<br></br>
                    veuilliez vous dirigez vers la barre de navigation, aux haut de la page et selectioner Application HearthStone</h5>
                </div>
                <div>  
                    <h5>Pour consulter la documentation de notre application API HearthStone, veuilliez selection le lien suivant:</h5>
                    <Link style={{fontSize: 20}} to="https://documenter.getpostman.com/view/24381246/2s93JnVSdu">Documentation PostMan</Link>
                </div>
            </div>
        </MyCard>
    </Fragment>
};

export default PagePrincipale;