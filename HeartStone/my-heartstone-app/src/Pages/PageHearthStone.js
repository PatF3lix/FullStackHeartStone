
import React, { useState, useEffect, Fragment} from 'react';
import { Button } from 'react-bootstrap';
import Tableaux from '../Components/Tableaux';

// Ce composant est le Controleur de la PageHearthStone, il est responsable du CRUD vers le servers API et la validation de input.

const PageHearthStone = () => {
    const [cartes, setCartes] = useState([]);
    const [carteAjouter, setCarteAjouter] = useState({ Rareter: 'COMMON', Nom: '', Cout: 0, Attack: 0, Vie: 1 });
    const [carteUpdater, setCarteUpdater] = useState({ Id: 0, Rareter: '', Nom: '', Cout: 0, Attack: 0, Vie: 0 });
    const [erreur, setErreur] = useState(false);
    const [appActiver, setAppActiver] = useState(false);

    const validationInputAjouter = (e) => {
        const { name, value } = e.target;
        console.log(value);
        if (( name === 'Cout' || name ===  'Attack' || name ===  'Vie')) {
            setCarteAjouter(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
            return;
        }
        setCarteAjouter(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validationInputUpdate = (e) => {
        const { name, value } = e.target;
        console.log(value);
        if (( name === 'Id' || name === 'Cout' || name ===  'Attack' || name ===  'Vie')) {
            setCarteUpdater(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
            return;
        }
        setCarteUpdater(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //GET
    const getTouteLesCarteHandler = (async () => {
        try {
            const response = await fetch('http://localhost:4000/api/GetCartes');
            if (!response.ok) {
                throw new Error('Une erreur est survenu lors de lopération getCartes');
            } 
            const data = await response.json();
            const cartesDsLaDb = data.map(carteData => {
                return {
                    Id: carteData.Id,
                    Rareter: carteData.Rareter,
                    Nom: carteData.Nom,
                    Cout: carteData.Cout,
                    Vie: carteData.Vie,
                    Attack: carteData.Attack
                };
            });
            setCartes(cartesDsLaDb);
        } catch (error) {
            console.log(error.message);
        }
    });
    //Use Effect est utiliser pour la mise à jour de la page à travers les action crud, entreprise atravers le déroulement de l'application 
    useEffect(() => {
        getTouteLesCarteHandler()
    })

    //PUT
    const ajouterCarteHandler = async () => {
        try {

            const nouvelCarte = await fetch('http://localhost:4000/api/AjouterCarte', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },body: JSON.stringify(carteAjouter)
            }).then(response => response.json());
            console.log(nouvelCarte);
        } catch (error) {
            console.log(error.message);
        }
    };

    //DELETE
    const deleteCarte = async (Id) => {
        try {
            const carteDeleter = await fetch(`http://localhost:4000/api/DeleteCarte/${Id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());
            console.log(carteDeleter);
        } catch (error) {
            console.log(error.message);
        }
    };

    // UPDATE
    const updateCarte = async () => {
        try {
            var carteTrouver = cartes.find((carte) => { return carte.Id === carteUpdater.Id });
            console.log(carteTrouver)
            if (carteTrouver === undefined) {
                setErreur(true);
                return
            } else {
                const carteModifier = await fetch(`http://localhost:4000/api/UpdateCarte/${carteUpdater.Id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...carteUpdater })
                }).then(response => response.json());
                console.log(carteModifier);
                setErreur(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    var contenu;

    if (appActiver === false) {
        contenu = <div>
            <u>
                <h1 style={{ paddingBottom: '50px' }}>HearthStone</h1>
            </u>
            <Button
                type="button"
                size='lg'
                onClick={() => { setAppActiver(true)}}>
                Démarrer l'application HearthStone</Button>
        </div>
    } else {
        contenu =
            <div>
        <u>
            <h1 style={{ paddingBottom: '50px' }}>HearthStone</h1>
        </u>
        <div>
            <h2>Liste de Cartes HeartStone dans La DB</h2>
            <Tableaux
                cartes={cartes}
                setErreur={setErreur}
                erreur={erreur}
                ajouterCarte={ajouterCarteHandler}
                deleteCarte={deleteCarte}
                updateCarte={updateCarte}
                validationInputAjouter={validationInputAjouter}
                validationInputUpdate={validationInputUpdate}/>
            </div>
        </div>
    }
    return(<Fragment>
        {contenu}
    </Fragment>)
}

export default PageHearthStone;