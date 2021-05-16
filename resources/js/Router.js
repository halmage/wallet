import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

/* Importando pages container de User */
import HomeContainer from './pages/container/user/home/HomeContainer'

const Router = () => {
	return(
		<BrowserRouter>
			<Switch>
				//Ruta de User
				<Route path="/home" component={HomeContainer}/>
			</Switch>
		</BrowserRouter>
	)
}
export default Router