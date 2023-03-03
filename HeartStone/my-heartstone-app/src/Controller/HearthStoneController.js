import { Fragment, useState } from 'react';
import axios from 'axios';

const HearthStoneController = () => {
    const [carte, setCarte] = useState('');
    
    //http://localhost:4000/api/GetCarte/:id
    const getCarteHandler = () => {
        console.log('inside getCarte');
    };

    //http://localhost:4000/api/GetCartes
    const getTouteLesCarteHandler = () => {
        console.log('inside getTouteLesCartes');
    };

    //http://localhost:4000/api/AjouterCarte
    const ajouterCarteHandler = () => {
        axios.post('http://localhost:4000/postCarte', {
            Carte: carte
        })
    };

    //http://localhost:4000/api/DeleteCarte/:id
    const deleteHandler = () => {
        console.log('inside delete');
    };

    // http://localhost:4000/api/UpdateCarte/1
    const updateHandler = () => {
        console.log('inside update');
    };

    return <Fragment>

    </Fragment>
};

export default HearthStoneController;