import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const PayConfirmationForm = ({onAddSubmitConfirmation}) => {
	const {register, formState: { errors }, handleSubmit} = useForm()
	return(
		<>
			<form className="col-md-8 offset-2" onSubmit={handleSubmit(onAddSubmitConfirmation)}>				  

				  <div className="form-group">
				    <label>Ingrese el token enviado a su correo</label>
				    <input type="number" 
				    	   className="form-control" 
				    	   id="token"
				    	   {...register("token",{required: true, pattern: /^[0-9]+$/i, minLength: 6, maxLength: 6})}/>
				    <small className="form-text text-muted">
				    	{errors.token?.type === 'required' && "El token es requerido"}
				    	{errors.token?.type === 'pattern' && "El token tiene que ser numerico"}
				    	{errors.token?.type === 'minLength' && "El token que tiene que ser de 6 caracteres"}
				    	{errors.token?.type === 'maxLength' && "El token que tiene que ser de 6 caracteres"}
				    </small>
				  </div>

				  <div className="text-center">
						<Link to="/home" 
							  className="btn btn-dark mx-2 col-4">
							Volver
						</Link>
						<button type="submit" 
						        className="btn btn-primary col-4"> 
						        Confirmar 
						</button>
				  </div>				  
			</form>
		</>		
	)
}
export default PayConfirmationForm
