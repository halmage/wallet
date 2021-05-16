import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const LoadWalletForm = ({onAddSubmit}) => {
	const {register, formState: { errors }, handleSubmit} = useForm()
	return(
		<>
			<form className="col-md-8 offset-2" onSubmit={handleSubmit(onAddSubmit)}>
				  <div className="form-group">
				    <label>Documento</label>
				    <input type="text" 
				    	   className="form-control" 
				    	   id="document"
				    	   {...register("document",{required: true, pattern: /^[0-9]+$/i, minLength: 5, maxLength: 8})}/>
				    <small className="form-text text-muted">
				    	{errors.document?.type === 'required' && "El documento es requerido"}
				    	{errors.document?.type === 'pattern' && "El documento tiene que ser numerico"}
				    	{errors.document?.type === 'minLength' && "El documento que tener 5 o 8 caracteres"}
				    	{errors.document?.type === 'maxLength' && "El documento que tener 5 o 8 caracteres"}
				    </small>
				  </div>

				  <div className="form-group">
				    <label>Telefono</label>
				    <input type="text" 
				    	   className="form-control" 
				    	   id="telephone"
				    	   {...register("telephone",{required: true, pattern: /^[0-9]+$/i, minLength:11, maxLength:11})}/>
				    <small className="form-text text-muted">
				    	{errors.telephone?.type === 'required' && "El documento es requerido"}
				    	{errors.telephone?.type === 'pattern' && "El telefono tiene que ser numerico"}
				    	{errors.telephone?.type === 'minLength' && "El telefono que tener 11 caracteres"}
				    	{errors.telephone?.type === 'maxLength' && "El telefono que tener 11 caracteres"}
				    </small>
				  </div>

				  <div className="form-group">
				    <label>Cantidad de Deseas Recargar</label>
				    <input type="number" 
				    	   className="form-control" 
				    	   id="transition"
				    	   {...register("transition",{required: true, pattern: /^[0-9]+$/i})}/>
				    <small className="form-text text-muted">
				    	{errors.transition?.type === 'required' && "El documento es requerido"}
				    	{errors.transition?.type === 'pattern' && "El telefono tiene que ser numerico"}
				    </small>
				  </div>

				  <div className="text-center">
						<Link to="/home" 
							  className="btn btn-dark mx-2 col-4">
							Volver
						</Link>
						<button type="submit" 
						        className="btn btn-primary col-4"> 
						        Recargar 
						</button>
				  </div>				  
			</form>
		</>
	)
}
export default LoadWalletForm