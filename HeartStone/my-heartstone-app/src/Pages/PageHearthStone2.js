
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

    //http://localhost:4000/api/GetCarte/:id
    const getCarteHandler = useCallback(async () => {
        console.log('inside getCarte');
    });

    //http://localhost:4000/api/DeleteCarte/:id
    const deleteHandler = (props) => {
        console.log('inside delete');
    };

    // http://localhost:4000/api/UpdateCarte/1
    const updateHandler = (props) => {
        console.log('inside update');
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
        <Tableaux cartes={cartes} deleteCarte={deleteHandler} updateCarte={updateHandler}  />
        <div>
            <h2>Ajouter Une nouvel Carte</h2>
            <CarteForm setInput={validationInput} ajouterCarte={ ajouterCarteHandler } />
        </div> 
    </Fragment>)
}

export default PageHearthStone2;