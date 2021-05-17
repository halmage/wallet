import React from 'react'
import {Link} from 'react-router-dom'

const HomeCardCheckBalance = () => {
	return(
		<>
			<div className="card" style={{width: "18rem"}}>
			  <div className="card-body">
			    <h5 className="card-title">Consultar saldo</h5>
			    <i className="bi bi-list-ul"></i>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <Link to="/check-balance" className="btn btn-block btn-primary">Consultar</Link>
			  </div>
			</div>
		</>
	)
}
export default HomeCardCheckBalance