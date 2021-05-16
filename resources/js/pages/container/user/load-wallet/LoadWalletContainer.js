import React from 'react'

/* Importando componentes */
import LoadWalletPresenter from '../../../presenter/user/load-wallet/LoadWalletPresenter'

const LoadWalletContainer = () => {

	const handleAddSubmit = (data,e) => {
		console.log(data)
	}

	return(
		<>
			<LoadWalletPresenter onAddSubmit = {handleAddSubmit}/>
		</>
	)
}
export default LoadWalletContainer
