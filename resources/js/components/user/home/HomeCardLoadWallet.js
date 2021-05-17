import React from 'react'
import {Link} from 'react-router-dom'

const HomeCardLoadWallet = () => {
	return(
		<>
			<div className="card" style={{width: "18rem"}}>
			  <div className="card-body">
			    <h5 className="card-title">Recargar Billetera</h5>
			    <i className="bi bi-wallet2 home-icon-style"></i>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <Link to="/load-wallet" className="btn btn-block btn-success">Recargar</Link>
			  </div>
			</div>
		</>
	)
}
export default HomeCardLoadWallet