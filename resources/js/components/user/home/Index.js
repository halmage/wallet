import React from 'react'

/* Importando modelos */
import HomeCardToPay from './HomeCardToPay'
import HomeCardLoadWallet from './HomeCardLoadWallet'
import HomeCardCheckBalance from './HomeCardCheckBalance';

const Index = () => {
	return(
		<>
			<div className="container">
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Benvenido</div>
			                <div className="card-body">			                
			                    <div className="row">			                    	
			                    	<div className="col-md-12 text-center offset-3">			                    		
			                    		<HomeCardLoadWallet/>
			                    	</div>
			                    	<div className="w-100 py-2"></div>
			                    	<div className="col-md-6 text-center">
			                    		<HomeCardToPay/>
			                    	</div>
			                    	<div className="col-md-6 text-center">
			                    		<HomeCardCheckBalance/>
			                    	</div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</>
	)
}
export default Index