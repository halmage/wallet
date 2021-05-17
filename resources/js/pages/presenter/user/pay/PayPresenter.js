import React from 'react'

/* Importando componentes */
import Index from '../../../../components/user/pay/Index'

const PayPresenter = ({onAddSubmitPay,onAddSubmitConfirmation,state}) => {

	return(
		<>
			<Index onAddSubmitPay = {onAddSubmitPay}
			       onAddSubmitConfirmation = {onAddSubmitConfirmation}
			       state = {state}/>
		</>		
	)
}
export default PayPresenter
