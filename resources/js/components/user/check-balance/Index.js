import React from 'react'

/* Importando componentes */
import CheckBalanceForm from './CheckBalanceForm.js'

const Index = ({onAddSubmit}) => {	
	return(
		<>
			<div className="container">
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Consultar saldo</div>
			                <div className="card-body">			                
			                    <CheckBalanceForm onAddSubmit = {onAddSubmit}/>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</>
	)
}
export default Index