import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {App} from "../components/app.jsx";
import {Checkout} from "../components/checkout/checkout.jsx";
import {Information} from "../components/information/information.jsx";
import {Home} from "../components/home/home.jsx";
import {Payments} from "../components/payments/payments.jsx";
import {Success} from "../components/success/success.jsx";
import {NotFound} from "../components/not_found/not_found.jsx";
import {Layout} from "../layouts/layout";
import {AppContext} from '../context/app.context'
import {useInitialState} from "../hooks/useInitialState";

export const AppRouter= ()=> {
    const initialState= useInitialState()
    return (

        <AppContext.Provider value={initialState}>
            <BrowserRouter>

                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/checkout' component={Checkout}></Route>
                        <Route exact path='/checkout/information' component={Information}></Route>
                        <Route exact path='/checkout/payments' component={Payments}></Route>
                        <Route exact path='/success' component={Success}></Route>
                        <Route  component={NotFound}></Route>
                    </Switch>
                </Layout>






            </BrowserRouter>

        </AppContext.Provider>

    );
}