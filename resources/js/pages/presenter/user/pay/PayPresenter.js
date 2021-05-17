import React from 'react'

/* Importando componentes */
import Index from '../../../../components/user/pay/Index'

const PayPresenter = ({onAddSubmit}) => {

	return(
		<>
			<Index onAddSubmit = {onAddSubmit}/>
		</>		
	)
}
export default PayPresenter
