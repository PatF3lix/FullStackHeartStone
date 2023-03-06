import { Button } from 'react-bootstrap';
import MyCard from '../UI/MyCard';
import classes from './CarteForm.module.css';
const { Fragment } = require("react")

// Ce composant est responsable du Form pour la creation d'une nouvelle carte.

const CarteForm = (props) => {
    return <Fragment>
        <MyCard>
            <form>
                <label>
                    Rareter:
                </label>
                <input
                    className={classes.input}
                    name="Rareter"
                    placeholder="Rareter.."
                    onChange={props.validationInputAjouter}></input>
                <label>
                    Nom:
                </label>
                <input
                    className={classes.input}
                    name="Nom"
                    placeholder="Nom.."
                    onChange={props.validationInputAjouter}></input>
                <label>
                    Cout:
                </label>
                <input
                    className={classes.input}
                    type="number"
                    name="Cout"
                    placeholder="Cout.."
                    min="0"
                    max="20"
                    onChange={props.validationInputAjouter}></input>
                <label>
                    Attack:
                </label>
                <input
                    className={classes.input}
                    type="number"
                    name="Attack"
                    placeholder="Attack.."
                    min="0"
                    max="15"
                    onChange={props.validationInputAjouter}></input>
                <label>
                    Vie:
                </label>
                <input
                    className={classes.input}
                    type="number"
                    name="Vie"
                    placeholder="Vie.."
                    min="1"
                    max="15"
                    onChange={props.validationInputAjouter }></input>
                <Button className={classes.button} type="button" onClick={props.ajouterCarte}>Ajouter</Button>
            </form>
        </MyCard>
    </Fragment>
} 

export default CarteForm;