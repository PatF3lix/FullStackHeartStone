import React, { Fragment, useState } from 'react';

const TaskList = () => {
    const [carte, setCarte] = useState('');

    const deleteHandler = () => {
        console.log('inside delete');

    };

    const updateHandler = () => {
        console.log('inside update');

    };

    const getCarteHandler = () => {
        console.log('inside getCarte');
    };

    const getTouteLesCarteHandler = () => {
        console.log('inside getTouteLesCartes');
    };

    return <Fragment>
        <h3>Liste de Cartes</h3>
        <div className='ui input'>
            <input value={carte} onChange={e => setCarte(e.target.value)} placeholder='votre carte...' />
            {console.log(carte)}
        </div>
        <button className='ui primary button basic'>Submit</button>
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <div className="meta">
                        Friends of Veronika
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={updateHandler}>Update</div>
                            <div className="ui basic red button" onClick={deleteHandler}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default TaskList;