import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavigationPrincipale from "../NavigationPrincipale/NavigationPrincipale";

const RootLayout = () => {
    return <Fragment>
        <NavigationPrincipale />
        <main>
            <Outlet />
        </main>
    </Fragment>
};

export default RootLayout;