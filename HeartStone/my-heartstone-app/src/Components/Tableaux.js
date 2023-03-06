import { Button, Table } from 'react-bootstrap';
import React, { useState} from 'react';
import CarteForm from './AddCarteForm';
import UpdateCarteForm from './UpdateCarteForm';

// Ce composant est resposable de l'affichage du tableau de donnée de la base de donnée HearthStone et du contenu dynamic correspondant au event
// déclendhé par l'utilisateur. Button UpdateCarte et AjouterCarte. FormAjouterCarte et FormUpdateCarte.
const Tableaux = (props) => {
    const [etatInitiale, setEtatInitiale] = useState(true);
    const [updateClicker, setUpdateClicker] = useState(false);
    const [ajouterClicker, setAjouterClicker] = useState(false);

    const buttonAjouterHandler = () => {
        props.setErreur(false);
        setEtatInitiale(false);
        setUpdateClicker(false);
        setAjouterClicker(true);
    }

    const buttonUpdateHandler = () => {
        setEtatInitiale(false);
        setAjouterClicker(false);
        setUpdateClicker(true);
    }

    var contenu;

    if (etatInitiale === false && updateClicker === true && ajouterClicker === false) {
        contenu = <div>
                <br>
            </br>
            <h2>UpdateCarteForm</h2>
            <UpdateCarteForm
                validationInputUpdate={props.validationInputUpdate}
                updateCarte={props.updateCarte} erreur={props.erreur} />
            </div>
    } else if (etatInitiale === false && updateClicker === false && ajouterClicker === true) {
        contenu = <div>
                <br>
            </br>
            <h2>AjouterCarteForm</h2>
            <CarteForm
                validationInputAjouter={props.validationInputAjouter}
                ajouterCarte={props.ajouterCarte} />
            </div>
    } else {
        contenu = null;
    }

    return(<div style={{margin: "5rem"}}>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Rareter</th>
                    <th>Nom</th>
                    <th>Cout</th>
                    <th>Attack</th>
                    <th>Vie</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {props.cartes.length > 0 ?
                            (props.cartes.map((carte) => {
                                return(<tr key={carte.Id}>
                                    <td>{carte.Id}</td>
                                    <td>{carte.Rareter}</td>
                                    <td>{carte.Nom}</td>
                                    <td>{carte.Cout}</td>
                                    <td>{carte.Attack}</td>
                                    <td>{carte.Vie}</td>
                                    <td>

                                        <Button
                                            type="button"
                                            onClick={() => { props.deleteCarte(carte.Id) }}>
                                            Delete</Button>
                                    </td>
                                </tr>
                                    
                            )}))
                            :
                    null
                }
            </tbody>
        </Table>
        <div className='d-grid gap-2'>
            <Button
                type="button"
                className='btn btn-primary btn-lg btn-block'
                onClick={() => { buttonUpdateHandler() }}
                >Update</Button>
        </div>
        <div className='d-grid gap-2' style={{ paddingTop:'10px' }}>
            <Button
                type="button"
                className='btn btn-primary btn-lg btn-block'
                onClick={() => { buttonAjouterHandler() }}
                >Ajouter Une Carte</Button>
        </div>
        {contenu}
    </div>)
}
export default Tableaux;