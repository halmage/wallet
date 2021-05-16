import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

/* Importando pages container de User */
import HomeContainer from './pages/container/user/home/HomeContainer'
import LoadWalletContainer from './pages/container/user/load-wallet/LoadWalletContainer'


const Router = () => {
	return(
		<BrowserRouter>
			<Switch>
				//Ruta de User
				<Route exact path="/home" component={HomeContainer}/>
				<Route path="/load-wallet" component={LoadWalletContainer}/>
			</Switch>
		</BrowserRouter>
	)
}
export default Router