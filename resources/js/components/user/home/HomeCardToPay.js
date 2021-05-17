import React from 'react'
import {Link} from 'react-router-dom'

const HomeCardToPay = () => {
	return(
		<>
			<div className="card" style={{width: "18rem"}}>
			  <div className="card-body">
			    <h5 className="card-title">Pagar</h5>
			    <i className="bi bi-cash"></i>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <Link to="/pay" className="btn btn-block btn-dark">Pagar</Link>
			  </div>
			</div>
		</>
	)
}
export default HomeCardToPay