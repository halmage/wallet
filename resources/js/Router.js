import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

/* Importando page User Home */
import HomeContainer from './pages/container/user/home/HomeContainer'

/* Importando pages User para racargar billetera */
import LoadWalletContainer from './pages/container/user/load-wallet/LoadWalletContainer'

/* Importando pages User para consultar billetera */
import CheckBalanceContainer from './pages/container/user/check-balance/CheckBalanceContainer'

/* Importando pages User para pagar */
import PayContainer from './pages/container/user/pay/PayContainer'

const Router = () => {
	return(
		<BrowserRouter>
			<Switch>
				// Ruta de User
				<Route exact path="/home" component={HomeContainer}/>

				// Ruta de User para recargar billetera
				<Route path="/load-wallet" component={LoadWalletContainer}/>

				// Ruta de User para consultar billetera
				<Route path="/check-balance" component={CheckBalanceContainer}/>

				// Ruta de User para consultar billetera
				<Route path="/pay" component={PayContainer}/>

			</Switch>
		</BrowserRouter>
	)
}
export default Router