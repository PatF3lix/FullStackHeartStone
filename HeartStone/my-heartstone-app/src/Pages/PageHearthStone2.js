
import React, { useCallback, useState, useRef, useEffect, Fragment } from 'react';
import Tableaux from '../Components/Tableaux';
import CarteForm from '../Components/CarteForm';

const PageHearthStone2 = () => {
    const [cartes, setCartes] = useState([]);
    const [carteChoisi, setCarteChoisi] = useState({ Rareter: '', Nom: '', Cout: 0, Attack: 0, Vie: 1 });
    const [carteRecuParApi, setCarteRecuParApi] = useState({ Id: 0, Rareter: 'COMMON', Nom: '', Cout: 0, Attack: 0, Vie: 0 });

    const validationInput = (e) => {
        const { name, value } = e.target;
        console.log(value);
        if ((name === 'Cout' || name ===  'Attack' || name ===  'Vie')) {
            setCarteChoisi(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
            return;
        }
        setCarteChoisi(prevState => ({
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
                },body: JSON.stringify(carteChoisi)
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
    const updateCarte = async (Id) => {
        try {
            const carteModifier = await fetch(`http://localhost:4000/api/UpdateCarte/${Id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...carteChoisi })
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
                deleteCarte={deleteCarte}
                updateCarte={updateCarte}
                setInput={validationInput}
                ajouterCarte={ajouterCarteHandler}
            />
        </div>  
    </Fragment>)
}

export default PageHearthStone2;


    //http://localhost:4000/api/GetCarte/:id
    // const getCarteHandler = useCallback(async () => {
    //     console.log('inside getCarte');
    // });