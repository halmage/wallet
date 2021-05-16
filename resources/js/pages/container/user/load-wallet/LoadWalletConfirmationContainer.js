import React from 'react'

/* Importando componentes */
import LoadWalletConfirmationPresenter from '../../../presenter/user/load-wallet/LoadWalletConfirmationPresenter'

const LoadWalletConfirmationContainer = ({data}) => {
	return(
		<>
			<LoadWalletConfirmationPresenter data = {data}/>
		</>
	)
}
export default LoadWalletConfirmationContainer