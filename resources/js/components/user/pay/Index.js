import React from 'react'

/* Importando componentes */
import PayForm from './PayForm'

const Index = ({onAddSubmit}) => {	
	return(
		<>
			<div className="container">
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Recargar billetera</div>
			                <div className="card-body">			                
			                    <PayForm onAddSubmit = {onAddSubmit}/>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</>
	)
}
export default Index