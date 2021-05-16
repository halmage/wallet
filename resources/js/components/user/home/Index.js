import React from 'react'

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
			                    		<div className="card" style={{width: "18rem"}}>
										  <div className="card-body">
										    <h5 className="card-title">Recargar Billetera</h5>
										    <i className="bi bi-wallet2"></i>
										    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										    <a href="#" className="btn btn-block btn-success">Recargar</a>
										  </div>
										</div>
			                    	</div>
			                    	<div className="w-100 py-2"></div>
			                    	<div className="col-md-6 text-center">
			                    		<div className="card" style={{width: "18rem"}}>
										  <div className="card-body">
										    <h5 className="card-title">Pagar</h5>
										    <i className="bi bi-cash"></i>
										    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										    <a href="#" className="btn btn-block btn-dark">Pagar</a>
										  </div>
										</div>
			                    	</div>
			                    	<div className="col-md-6 text-center">
			                    		<div className="card" style={{width: "18rem"}}>
										  <div className="card-body">
										    <h5 className="card-title">Consultar saldo</h5>
										    <i className="bi bi-list-ul"></i>
										    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										    <a href="#" className="btn btn-block btn-primary">Consultar</a>
										  </div>
										</div>
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