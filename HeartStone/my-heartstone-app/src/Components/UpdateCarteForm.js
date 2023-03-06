import { Button } from 'react-bootstrap';
import MyCard from '../UI/MyCard';
import classes from './CarteForm.module.css';
const { Fragment } = require("react")

// Ce composant est responsable du Form pour la mise à jour d'une carte.

const UpdateCarteForm = (props) => {

    return <Fragment>
        <MyCard>
            { props.erreur === true ?<div class="alert alert-warning" role="alert">
                Oups! Une erreur est survenu!<br></br>
                Le Id inséré ne correspond pas aux Id d'une carte pésente dans la base de donner!<br></br>
                Veuilliez essayer à nouveau! Merci!
                </div>
        : null}
            <form><label>
                Id:
            </label>
                <input
                    className={classes.input}
                    type="number"
                    name="Id"
                    placeholder="Id.."
                    min="1"
                    onChange={props.validationInputUpdate}></input>
                <label>
                Rareter:
            </label>
                <input
                    className={classes.input}
                    name="Rareter"
                    placeholder="Rareter.."
                    onChange={props.validationInputUpdate}></input>
                <label>
                Nom:
            </label>
                <input
                    className={classes.input}
                    name="Nom"
                    placeholder="Nom.."
                    onChange={props.validationInputUpdate}></input>
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
                    onChange={props.validationInputUpdate}></input>
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
                    onChange={props.validationInputUpdate}></input>
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
                    onChange={props.validationInputUpdate }></input>
                <Button className={classes.button} type="button" onClick={props.updateCarte}>Update</Button>
            </form>
        </MyCard>
    </Fragment>
} 

export default UpdateCarteForm;