import React from 'react'

/* Importando componentes */
import PayForm from './PayForm'
import PayConfirmationForm from './PayConfirmationForm';

const Index = ({onAddSubmitPay,onAddSubmitConfirmation,state}) => {	
	return(
		<>
			<div className="container">
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Sesión de Pago</div>
			                <div className="card-body">	
			                	{
			                		state ? (
			                			<>
			                				<PayConfirmationForm onAddSubmitConfirmation = {onAddSubmitConfirmation}/>
			                			</>
			                		):(
			                			<>
			                				<PayForm onAddSubmitPay = {onAddSubmitPay}/>
			                			</>
			                		)
			                	}
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</>
	)
}
export default Index