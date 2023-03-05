import { Button, Table } from 'react-bootstrap';
import React, { useState} from 'react';
import CarteForm from './AddCarteForm';
import CarteHearthStone from './CarteHearthStone';
import UpdateCarteForm from './UpdateCarteForm';

const Tableaux = (props) => {
    const [etatInitiale, setEtatInitiale] = useState(true);
    const [updateClicker, setUpdateClicker] = useState(false);
    const [ajouterClicker, setAjouterClicker] = useState(false);

    const buttonAjouterHandler = (props) => {
        setEtatInitiale(false);
        setUpdateClicker(false);
        setAjouterClicker(true);
        console.log('in button ajouter')

    }

    const buttonUpdateHandler = (props) => {
        console.log('in button update')
        setEtatInitiale(false);
        setAjouterClicker(false);
        setUpdateClicker(true);

    }

    var contenu;

    if (etatInitiale == false && updateClicker == true && ajouterClicker == false) {
        contenu = <div>
                <br>
            </br>
            <h2>UpdateCarteForm</h2>
                <UpdateCarteForm setInput={props.setInput} ajouterCarte={props.ajouterCarte} />
            </div>
    } else if (etatInitiale == false && updateClicker == false == ajouterClicker == true) {
        contenu = <div>
                <br>
            </br>
            <h2>AjouterCarteForm</h2>
                <CarteForm setInput={props.setInput} ajouterCarte={props.ajouterCarte} />
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
                    <th>Opérations</th>
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
            <button
                type="button"
                class="btn btn-primary btn-lg btn-block"
                onClick={() => { buttonUpdateHandler() }}
                >Update</button>
        </div>
        <div className='d-grid gap-2' style={{ paddingTop:'10px' }}>
            <button
                type="button"
                class="btn btn-primary btn-lg btn-block"
                onClick={() => { buttonAjouterHandler() }}
                >Ajouter Une Carte</button>
        </div>
        {contenu}
    </div>)
}
export default Tableaux;