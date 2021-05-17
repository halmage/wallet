import React from 'react'

/* Importando componentes */
import Index from '../../../../components/user/check-balance/Index'

const CheckBalancePresenter = ({onAddSubmit,state,balance}) => {
	return(
		<>
			<Index onAddSubmit = {onAddSubmit}
			       state = {state}
			       balance = {balance}/>
		</>
	)
}
export default CheckBalancePresenter