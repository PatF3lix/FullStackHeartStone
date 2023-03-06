import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavigationPrincipale from "../NavigationPrincipale/NavigationPrincipale";

// Ce Module est responsable pour le Layout qui seras afficher pour tout les page de cette application.

const RootLayout = () => {
    return <Fragment>
        <NavigationPrincipale />
        <main>
            <Outlet />
        </main>
    </Fragment>
};

export default RootLayout;