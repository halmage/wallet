import React from 'react'

/* Importando componentes */
import PayPresenter from '../../../../pages/presenter/user/pay/PayPresenter'

const PayContainer = () => {

	const handleAddSubmit = (data,e) => {
		axios.post(`http://localhost:8000/api/transaction/pay`,{		 	
		 	data:{
				document:data.document,
				telephone:data.telephone,
				transaction:data.transaction,
				type_transaction:"pago"			
		 	}
		}).then(result => {		 
			console.log(result)	 	
        }).catch(e => {
            console.log(e.message);
        });	
	}

	return(
		<>
			<PayPresenter onAddSubmit = {handleAddSubmit}/>
		</>		
	)
}
export default PayContainer
