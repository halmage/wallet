import React from 'react'

/* Importando componentes */
import CheckBalancePresenter from '../../../presenter/user/check-balance/CheckBalancePresenter';

const CheckBalanceContainer = () => {

	const handleAddSubmit = (data,e) => {
		console.log(data)
		axios.post(`http://localhost:8000/api/transaction/load-wallet`,{		 	
		 	data:{
				document:data.document,
				telephone:data.telephone		
		 	}
		}).then(result => {		 
			alert("Su recarga fu exitosa")			
		 			 	
        }).catch(e => {
            console.log(e.message);
        });	
	}

	return(
		<>
			<CheckBalancePresenter onAddSubmit = {handleAddSubmit}/>
		</>
	)
}
export default CheckBalanceContainer