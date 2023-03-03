import React, { useCallback, useState, useRef, useEffect } from 'react';
import Card from '../UI/Card';
import Carte from './'
import axios from 'axios';

const HearthStoneController = () => {
    const [cartes, setCartes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErreur] = useState(null);
    
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
            console.log(data);
            const cartesDsLaDb = data.results.map(carteData => {
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
    
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender) {
            initialRender.current = false;
        } else {
            getTouteLesCarteHandler();
        }
    }, [getTouteLesCarteHandler]);

    let contenu = <p></p>;
    if (cartes.length > 0) {
        contenu = <ListeCarte cartes={cartes}/>
    }

    if (isLoading) {
        contenu = <p>Loading...</p>
    }

    if (error) {
        contenu = <p>{error}</p>
    }

    //http://localhost:4000/api/AjouterCarte
    const ajouterCarteHandler = () => {
        axios.post('http://localhost:4000/postCarte', {
            Carte: carte
        })
    };

    //http://localhost:4000/api/GetCarte/:id
    const getCarteHandler = () => {
        console.log('inside getCarte');
    };

    //http://localhost:4000/api/DeleteCarte/:id
    const deleteHandler = () => {
        console.log('inside delete');
    };

    // http://localhost:4000/api/UpdateCarte/1
    const updateHandler = () => {
        console.log('inside update');
    };

    return <Card>
        <section>
            <b>
                <u>
                    <p>Appuyer sur le bouton pour afficher les Cartes HearthStone de la Db</p>
                </u>
            </b>
            <button onClick={getTouteLesCarteHandler}>Clicker pour afficher les Cartes HeartStone de la Db</button>
        </section>
        <section>
            {contenu}
        </section>
    </Card>
};

export default HearthStoneController;