import React from 'react'

/* Importando componentes */
import Index from '../../../../components/user/load-wallet/Index'

const LoadWalletPresenter = ({onAddSubmit}) => {
	return(
		<Index onAddSubmit={onAddSubmit}/>
	)
}
export default LoadWalletPresenter