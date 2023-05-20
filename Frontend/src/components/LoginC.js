import React, {Component, useState, state} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
//import '../css/estilos.css';
//import '../css/registro.css';

export const LoginC = () => {
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
	

	const expresiones = {
		password: /^.[a-zA-Z0-9_.+-]{1}(.{2,10})$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			password.valido === 'true' &&
			correo.valido === 'true'
		){
			cambiarFormularioValido(true);
			cambiarPassword({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

    const handleReset = () => {
		cambiarPassword("");
		cambiarCorreo("");
		window.location.href = '/registro';
	  };


	return (
		<main>
			<center>
			
			<br/>
			<Formulario action="" onSubmit={onSubmit}>
                <ContenedorBotonCentrado><h1>Ingresar</h1></ContenedorBotonCentrado>

                <Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="soyalguien1@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>

				
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
				</ContenedorBotonCentrado>

                <ContenedorBotonCentrado>
				<ContenedorTerminos>
					<Label>
					    ¿Aun no tienes una cuenta? Tranquilo registrate aqui
					</Label>
					
					<Boton type="reset" onClick={handleReset}>Registrar</Boton>
				</ContenedorTerminos>
                </ContenedorBotonCentrado>
			</Formulario>
			</center>
			
		</main>
	);
}
 
//export default register;