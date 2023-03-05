
import React, { useCallback, useState, useRef, useEffect, Fragment } from 'react';
import Tableaux from '../Components/Tableaux';
import CarteForm from '../Components/CarteForm';



const PageHearthStone2 = () => {
    const [cartes, setCartes] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErreur] = useState(null);
    const [carteChoisi, setCarteChoisi] = useState({ Rareter: '', Nom: '', Cout: 0, Attack: 0, Vie: 0 });
    const [carteRecuParApi, setCarteRecuParApi] = useState({ Id: 0, Rareter: '', Nom: '', Cout: 0, Attack: 0, Vie: 0 });

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
    const getTouteLesCarteHandler = useCallback(async () => {
        setIsLoading(true);
        setErreur(null);
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
            setErreur(error.message);
        }
        setIsLoading(false);
    }, []);

        //http://localhost:4000/api/AjouterCarte
    const ajouterCarteHandler = useCallback(async () => {
        const nouvelCarte = await fetch('http://localhost:4000/api/AjouterCarte', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({...carteChoisi})
        }).then(response => response.json())
    });

    //http://localhost:4000/api/DeleteCarte/:id
    const deleteCarte = async (Id) => {
        try {
            console.log(`http://localhost:4000/api/DeleteCarte/${Id}`);
            const carteDeleter = await fetch(`http://localhost:4000/api/DeleteCarte/${Id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            if(carteDeleter.ok) {
                const idCarteDeleter = await carteDeleter.json();
                console.log('Une Carte a été retirer')
            } else {
                console.log('une erreur est survenu la carte nest pas deleter');
            }
        } catch (error) {
            setErreur(error.message);
        }
    };

    // http://localhost:4000/api/UpdateCarte/1
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
            setErreur(error.message);
        }
    };

    return(<Fragment>
        <u>
            <h1 style={{ paddingBottom: '50px' }}>Application HearthStone</h1>
        </u>
        <section>
                <b>
                    <u>
                        <p>Appuyer sur le bouton pour afficher les Cartes HearthStone de la Db</p>
                    </u>
                </b>
                <button onClick={getTouteLesCarteHandler}>Clicker pour afficher les Cartes HeartStone de la Db</button>
        </section>
        <div>
            <Tableaux cartes={cartes} deleteCarte={deleteCarte} updateCarte={updateCarte}/>
        </div>
        <div>
            <h2>Ajouter Une nouvel Carte</h2>
            <CarteForm setInput={validationInput} ajouterCarte={ajouterCarteHandler}/>
        </div> 
    </Fragment>)
}

export default PageHearthStone2;


    //http://localhost:4000/api/GetCarte/:id
    // const getCarteHandler = useCallback(async () => {
    //     console.log('inside getCarte');
    // });