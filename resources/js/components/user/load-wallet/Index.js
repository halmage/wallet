import React from 'react'

/* Importando componentes */
import LoadWalletForm from './LoadWalletForm'

const Index = ({onAddSubmit}) => {	
	return(
		<>
			<div className="container">
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Recargar billetera</div>
			                <div className="card-body">			                
			                    <LoadWalletForm onAddSubmit = {onAddSubmit}/>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</>
	)
}
export default Index