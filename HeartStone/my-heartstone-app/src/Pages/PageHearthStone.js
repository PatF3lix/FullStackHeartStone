
import React, { useCallback, useState, useRef, useEffect, Fragment } from 'react';
import Tableaux from '../Components/Tableaux';
import CarteForm from '../Components/AddCarteForm';

const PageHearthStone2 = () => {
    const [cartes, setCartes] = useState([]);
    const [carteAjouter, setCarteAjouter] = useState({ Rareter: 'COMMON', Nom: '', Cout: 0, Attack: 0, Vie: 1 });
    const [carteUpdater, setCarteUpdater] = useState({ Id: 0, Rareter: '', Nom: '', Cout: 0, Attack: 0, Vie: 0 });

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

    //http://localhost:4000/api/GetCartes
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

    useEffect(() => {
        getTouteLesCarteHandler()
    })

    //http://localhost:4000/api/AjouterCarte
    const ajouterCarteHandler = useCallback(async () => {
        try {
            const nouvelCarte = await fetch('http://localhost:4000/api/AjouterCarte', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },body: JSON.stringify(carteAjouter)
            }).then(response => response.json());
        } catch (error) {
            console.log(error.message);
        }
    });

    //http://localhost:4000/api/DeleteCarte/:id
    const deleteCarte = async (Id) => {
        try {
            // console.log(`http://localhost:4000/api/DeleteCarte/${Id}`);
            const carteDeleter = await fetch(`http://localhost:4000/api/DeleteCarte/${Id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());
        } catch (error) {
            console.log(error.message);
        }
    };

    // http://localhost:4000/api/UpdateCarte/:id
    const updateCarte = async (props) => {
        try {
            const carteModifier = await fetch(`http://localhost:4000/api/UpdateCarte/${carteUpdater.Id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...carteUpdater })
            }).then(response => response.json())
        } catch (error) {
            console.log(error.message);
        }
    };

    return(<Fragment>
        <u>
            <h1 style={{ paddingBottom: '50px' }}>Application HearthStone</h1>
        </u>
        <div>
            <h2>Liste de Cartes HeartStone dans La DB</h2>
            <Tableaux
                cartes={cartes}
                ajouterCarte={ajouterCarteHandler}
                deleteCarte={deleteCarte}
                updateCarte={updateCarte}
                validationInputAjouter={validationInputAjouter}
                validationInputUpdate={validationInputUpdate}
            />
        </div>  
    </Fragment>)
}

export default PageHearthStone2;


    //http://localhost:4000/api/GetCarte/:id
    // const getCarteHandler = useCallback(async () => {
    //     console.log('inside getCarte');
    // });