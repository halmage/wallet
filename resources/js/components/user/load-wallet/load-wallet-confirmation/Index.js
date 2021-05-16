import React from 'react'

const Index = ({data}) => {	
	return(
		<>
			<div className="container">
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Confirmacion de Recargar billetera</div>
			                <div className="card-body">			                
			                    <h2>{data.document}</h2>
			                    <h2>{data.celular}</h2>
			                    <h2>{data.valor}</h2>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</>
	)
}
export default Index