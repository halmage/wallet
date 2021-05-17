import React from 'react'

/* Importando componentes */
import Index from '../../../../components/user/check-balance/Index'

const CheckBalancePresenter = ({onAddSubmit}) => {
	return(
		<>
			<Index onAddSubmit = {onAddSubmit}/>
		</>
	)
}
export default CheckBalancePresenter