import React, {Component, useState, state} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
//import '../css/estilos.css';
//import '../css/registro.css';

export const LoginC = () => {
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
    const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);
	

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ]{1,30}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ]{1,30}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			apellido.valido === 'true' &&
			nombre.valido === 'true' &&
			password.valido === 'true' &&
			correo.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarApellido({campo: '', valido: ''});
			cambiarNombre({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

    const handleReset = () => {

		cambiarApellido("");
		cambiarNombre("");
		cambiarPassword("");
		cambiarCorreo("");
		window.location.href = '/registro';
	  };


	return (
		<main>
			<center>
			<ContenedorBotonCentrado><h1>Ingresar</h1></ContenedorBotonCentrado>
			<br/>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="john123"
					name="apellido"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.apellido}
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
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
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>

				
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
				<ContenedorTerminos>
					<Label>
						¿Ya tienes una cuenta? Puedes ingresar aqui
					</Label>
					<ContenedorBotonCentrado>
					
					<Boton type="reset" onClick={handleReset}>Ingresar</Boton>
					</ContenedorBotonCentrado>
				</ContenedorTerminos>
			</Formulario>
			</center>
			
		</main>
	);
}
 
//export default register;