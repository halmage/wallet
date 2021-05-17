import React from 'react'

/* Importando componentes */
import CheckBalanceForm from './CheckBalanceForm'
import YourBalance from './YourBalance';

const Index = ({onAddSubmit,state,balance}) => {	
	return(
		<>
			<div className="container">
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Consultar saldo</div>
			                <div className="card-body">			                
			                    {
			                        state ? (
			                            <>
			                                <YourBalance balance = {balance}/>
			                            </>
			                        ):(
			                            <>
			    				            <CheckBalanceForm onAddSubmit={onAddSubmit}/>
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