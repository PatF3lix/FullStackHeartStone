import React, { Fragment, useState } from 'react';
import HearthStoneController from '../Controller/HearthStoneController';

const PageHearthStone = () => {
    const [carte, setCarte] = useState('');
    return <Fragment>
        <u>
            <h1 style={{ paddingBottom: '50px' }}>Application HearthStone</h1>
        </u>
        <h3>Liste de Cartes</h3>
        <HearthStoneController/>
        {/* <div className='ui input'>
            <input value={carte} onChange={e => setCarte(e.target.value)} placeholder='votre carte...' />
            {console.log(carte)}
        </div>
        <button onClick={HearthStoneController.ajouterCarteHandler} className='ui primary button basic'>Submit</button>
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <div className="meta">
                        Friends of Veronika
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={HearthStoneController.updateCarte}>Update</div>
                            <div className="ui basic red button" onClick={HearthStoneController.deleteCarte}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </Fragment>
};

export default PageHearthStone;