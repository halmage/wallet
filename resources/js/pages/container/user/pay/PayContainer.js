import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

/* Importando componentes */
import PayPresenter from '../../../../pages/presenter/user/pay/PayPresenter'

const PayContainer = () => {

	const [state,setState] = useState(false);
	const history = useHistory('')
	
	const handleAddSubmitPay = (data,e) => {
		axios.post(`http://localhost:8000/api/transaction/pay`,{		 	
		 	data:{
				document:data.document,
				telephone:data.telephone,
				transaction:data.transaction,
				type_transaction:"pago"			
		 	}
		}).then(result => {		 
			setState(true) 	
        }).catch(e => {
            console.log(e.message);
        });	
	}

	const handleAddSubmitConfirmation = (data,e) => {
		axios.post(`http://localhost:8000/api/transaction/paymer-confirmation`,{		 	
		 	data:{
				token:data.token		
		 	}
		}).then(result => {		 
			alert("Su pago fue exitoso")			
		 	/* Redireccionando a la pagina user */
		 	history.push("/home");	
        }).catch(e => {
            console.log(e.message);
        });	
	}

	return(
		<>
			<PayPresenter onAddSubmitPay = {handleAddSubmitPay}
						  onAddSubmitConfirmation = {handleAddSubmitConfirmation}
						  state = {state}/>
		</>		
	)
}
export default PayContainer
