import React from 'react'
import {Link} from 'react-router-dom'

/* Importando componentes */
import CheckBalanceForm from './CheckBalanceForm.js'

const Index = ({balance}) => {	
	return(
		<>
			<div className="text-center">
			    <h1 className="display-5">tu saldo</h1>
				<h2>{balance}</h2>
				<Link to="/home" className="btn btn-primary">Entendido</Link>
			</div>			                    
		</>
	)
}
export default Index