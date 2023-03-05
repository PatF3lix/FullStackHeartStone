import { Button, Table } from 'react-bootstrap';
import React, { useState} from 'react';
import CarteForm from './CarteForm';

const Tableaux = (props) => {
    const [updateClicker, setUpdateClicker] = useState(false);

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
                                        <Button type="button" onClick={() => {props.updateHandler(carte.Id)}}>Update</Button>
                                        &nbsp;
                                        <Button type="button" onClick={() => {props.deleteCarte(carte.Id)}}>Delete</Button>
                                    </td>
                                </tr>
                            )}))
                            :
                    null
                }
                </tbody>
        </Table>
        <br>
        </br>
        <Button onClick={() => {setUpdateClicker(true)}} size="lg">Ajouter Une Carte</Button>
        {updateClicker == true ?
            <div>
                <br>
                </br>
                <CarteForm setInput={props.setInput} ajouterCarte={props.ajouterCarte} />
            </div> : null}
    </div>)
}
export default Tableaux;