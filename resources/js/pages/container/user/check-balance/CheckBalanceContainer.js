import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

/* Importando componentes */
import CheckBalancePresenter from '../../../presenter/user/check-balance/CheckBalancePresenter';

const CheckBalanceContainer = () => {

	/* Redireccionando pagina */
	const history = useHistory('')
	const [state,setState] = useState(false);
	const [balance,setBalance] = useState(null);

	const handleAddSubmit = (data,e) => {
		axios.post(`http://localhost:8000/api/transaction/check-balance`,{		 	
		 	data:{
				document:data.document,
				telephone:data.telephone		
		 	}
		}).then(result => {		
			axios.get(`http://localhost:8000/api/transaction/your-balance/${result.data.user.id}`)
			.then(result => {					
			 	setBalance(result.data.balance)				 		 	
			 	setState(true)
	        }).catch(e => {
	            console.log(e);
	        });		 	
		 			 	
        }).catch(e => {
            console.log(e);
        });	
	}

	return(
		<>
			<CheckBalancePresenter onAddSubmit = {handleAddSubmit}
								   state = {state}
                                   balance = {balance}/>
		</>
	)
}
export default CheckBalanceContainer