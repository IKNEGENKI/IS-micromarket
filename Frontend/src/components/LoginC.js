import React, {Component, useState, state, useEffect} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import Swal from 'sweetalert2';
import axios from 'axios';
//import '../css/estilos.css';
//import '../css/estilos.css';
//import '../css/registro.css';

export const LoginC = () => {
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
	const URL_CLIENTE = "http://127.0.0.1:8000/api/loginCliente";
	const [cliente, setCliente] = useState([]);
	const endpoint = "http://127.0.0.1:8000/api/getCliente"

	const expresiones = {
		password: /^.[a-zA-Z0-9_.+-]{1}(.{2,10})$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}

	const getCliente = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			console.log(data)
			setCliente(data)
		})
	}

	useEffect( ()=>{
        //getNegocio();
		getCliente();
    }, []);

	const onSubmit = async(e) => {
		e.preventDefault();

		if(
			password.valido === 'true' &&
			correo.valido === 'true'
		){
			const newCliente = {
				correo: correo.campo,
				password: password.campo,
			}

			const postCliente = async (url, newCliente) => {
				const response = await fetch(url, {

					method: 'POST',
					body: JSON.stringify(newCliente),
					headers: {
					  'Access-Control-Allow-Origin': '*',
					  'Content-Type': 'application/json',
					}
				});
				return response;
			}
			
			const respuestaJson = await postCliente(URL_CLIENTE, newCliente);

			console.log("Response:------> " + respuestaJson.status);
			if(correo.campo === 'admin1@gmail.com' && password.campo === 'admin123'){
				console.log("Eres admin");
				const logged = true;
				Swal.fire({
					icon: 'success',
					title: '¡Genial!',
					text: '¡Bienvenido vendedor!',
					footer: '<a href="admi/homeA">Haz click aqui</a>'
				})
			}else{
				if(respuestaJson.status === 200 ){
					cambiarFormularioValido(true);
					cambiarPassword({campo: '', valido: null});
					cambiarCorreo({campo: '', valido: null});

					Swal.fire({
						icon: 'success',
						title: '¡Genial!',
						text: '¡Puedes ingresar!',
						
						//footer: '<a href="">Why do I have this issue?</a>'
					})
				}else{
					if(respuestaJson.status === 401){
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'El usuario o la contraseña son incorrectos',
						//footer: '<a href="">Why do I have this issue?</a>'
					})
				}
				}
			}
			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

    const handleReset = () => {
		cambiarPassword("");
		cambiarCorreo("");
		window.location.href = '/registrar';
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
						<b>Error:</b> Por favor rellena los datos.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit" onClick={onSubmit}>Enviar</Boton>
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