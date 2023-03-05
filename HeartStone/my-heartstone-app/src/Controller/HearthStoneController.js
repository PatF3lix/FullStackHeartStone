import React, { useCallback, useState, useRef, useEffect, Fragment } from 'react';
import Card from '../UI/Card';
import ListCartesHearthStone from '../Components/ListCartesHearthStone';
import CardHearthStone from '../UI/CardHearthStone';
import CarteForm from '../Components/CarteForm';

const HearthStoneController = () => {
    const [cartes, setCartes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErreur] = useState(null);
    const [carteChoisi, setCarteChoisi] = useState({ Rareter: '', Nom: '', Cout: 0, Attack: 0, Vie: 0 });
    const [carteRecuParApi, setCarteRecuParApi] = useState({ Id: 0, Rareter: '', Nom: '', Cout: 0, Attack: 0, Vie: 0 });
    
    // binding this with on change let u get the value in the input fields entered by the user 
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
        console.log(nouvelCarte);
        setCarteRecuParApi(nouvelCarte);
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
    
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender) {
            initialRender.current = false;
        } else {
            getTouteLesCarteHandler();
        }
    }, [getTouteLesCarteHandler, ajouterCarteHandler]);

    let contenu = <p></p>;
    if (cartes.length > 0) {
        contenu = <ListCartesHearthStone updateHandler={updateHandler} deleteHandler={deleteHandler} CarteHearthStone={cartes}/>
    };

    if (isLoading) {
        contenu = <p>Loading...</p>
    };

    if (error) {
        contenu = <p>{error}</p>
    };

    return <Fragment>
        <Card>
            <CarteForm setInput={validationInput} ajouterCarte={ ajouterCarteHandler } ></CarteForm>
        </Card>
        <Card>
            <section>
                <b>
                    <u>
                        <p>Appuyer sur le bouton pour afficher les Cartes HearthStone de la Db</p>
                    </u>
                </b>
                <button onClick={getTouteLesCarteHandler}>Clicker pour afficher les Cartes HeartStone de la Db</button>
        </section>
        </Card>
        {<CardHearthStone>
            {contenu}
        </CardHearthStone>}
    </Fragment>
};

export default HearthStoneController;