const { Fragment } = require("react")

const CarteForm = (props) => {
    return <Fragment>
        <form>
            <input
                name="Rareter"
                placeholder="Rareter.."
                onChange={props.setInput }></input>
            <input
                name="Nom"
                placeholder="Nom.."
                onChange={props.setInput }></input>
            <input
                type="number"
                name="Cout"
                placeholder="Cout.."
                min="0"
                max="20"
                onChange={props.setInput }></input>
            <input
                type="number"
                name="Attack"
                placeholder="Attack.."
                min="0"
                max="15"
                onChange={props.setInput }></input>
            <input
                type="number"
                name="Vie"
                placeholder="Vie.."
                min="1"
                max="15"
                onChange={props.setInput }></input>
            <button type="button" onClick={props.ajouterCarte}>Submit</button>
        </form>
    </Fragment>
} 

export default CarteForm;