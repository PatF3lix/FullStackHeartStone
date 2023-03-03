import { Fragment } from "react";
import NavigationPrincipale from "../NavigationPrincipale/NavigationPrincipale";

const PageErreur = () => {
    return <Fragment>
        <NavigationPrincipale />
        <main>
            <h1>Une erreur est survenu!</h1>
            <p>Nous n'avons pas été capable de trouver la page recherchée!</p>
        </main>
    </Fragment>
};

export default PageErreur;