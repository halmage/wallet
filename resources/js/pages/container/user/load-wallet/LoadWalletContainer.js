import React from 'react'
import {useHistory} from 'react-router-dom'

/* Importando componentes */
import LoadWalletPresenter from '../../../presenter/user/load-wallet/LoadWalletPresenter'
import LoadWalletConformationPresenter from '../../../presenter/user/load-wallet/LoadWalletConfirmationPresenter'

const LoadWalletContainer = () => {

	/* Redireccionando pagina */
	const history = useHistory()

	const handleAddSubmit = (data,e) => {
		axios.post(`http://localhost:8000/api/transaction/load-wallet`,{		 	
		 	data:{
				document:data.document,
				telephone:data.telephone,
				transaction:data.transaction,
				type_transaction:"recarga"			
		 	}
		}).then(result => {		 
			alert("Su recarga fu exitosa")			
		 	/* Redireccionando a la pagina user */
		 	history.push("/home");		 	
        }).catch(e => {
            console.log(e.message);
        });	
	}

	return(
		<>
			<LoadWalletPresenter onAddSubmit = {handleAddSubmit}/>
		</>
	)
}
export default LoadWalletContainer
