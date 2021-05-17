import React from 'react'

/* Importando componentes */
import CheckBalancePresenter from '../../../presenter/user/check-balance/CheckBalancePresenter';

const CheckBalanceContainer = () => {

	const handleAddSubmit = (data,e) => {
		console.log(data)
	}

	return(
		<>
			<CheckBalancePresenter onAddSubmit = {handleAddSubmit}/>
		</>
	)
}
export default CheckBalanceContainer