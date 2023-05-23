import React, {Component, useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/registro.css';
//import 'imagesLoad';
import { Modal } from 'react-bootstrap';
import configData from "../config/config.json";
import axios from 'axios';
import { useFormik, useField, useFormikContext } from "formik";
import Swal from 'sweetalert2';
import cors from 'cors';
//import cambiar from '../index';

export const Registro = () => {

    const $btnSignIn = document.getElementsByClassName('.sign-in-btn'),
     $btnSignUp = document.getElementsByClassName('.sign-up-btn'),
     $signIn = document.getElementsByClassName('.sign-in'),
     $signUp = document.getElementsByClassName('.sign-up');

    /*document.addEventListener('click', e => {
        if (e.target === $btnSignUp || e.target === $btnSignIn) {
            $SignUp.classList.toggle('active');
            $SignIn.classList.toggle('active')
        }
    })*/

    /*const onSubmit = (e) => {
        $btnSignIn.on("click", cambiar)
        $btnSignUp.on("click", cambiar)/*e => {
            if (e.target === $btnSignUp || e.target === $btnSignIn) {
                $SignIn.classList.toggle('active')
                $SignUp.classList.toggle('active')
            }*/
        //}
    //}

    const cambiar = (e) => {
        console.log("no funciono marce")
        if(window.performance.navigation.type == 1){
            console.log("holi no funciono")
            if (e.target === $btnSignUp || e.target === $btnSignIn) {
                console.log("si si funciono");
                $signIn.classList.toggle('active')
                $signUp.classList.toggle('active')
            }
        }else{
            console.log("si :)")
            if (e.target === $btnSignUp || e.target === $btnSignIn) {
                console.log("si si funciono");
                $signIn.classList.toggle('active')
                $signUp.classList.toggle('active')
            } 
        }
    }

    function visibleUp() {
        $signUp.classList.toggle('active')
        $signIn.classList.toggle('active')
    }

    function visibleIn() {
        $signIn.classList.toggle('active')
    }

    /*function cambiar (){
        const cambio = (click) => {
            if (click.target === $btnSignUp || click.target === $btnSignIn) {
                console.log("si si funciono");
                $signIn.classList.toggle('active')
                $signUp.classList.toggle('active')
            }
        }
    }*/

    return (
        <html>
            <head>
                <meta charSet='UTF-8'/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            </head>

            <body>
                <div class="container-form sign-up">
                    <div class="welcome-back">
                        <div class="message">
                            <h2>Bienvenido a PocketStore</h2>
                            <p>¿Ya tienes una cuenta? Ingresa a tu cuenta </p>
                            <button class="sign-up-btn">Ingresar</button>
                        </div>
                    </div>
                    <form class="formi">
                        <h2 class="create-account">Registro de cuenta</h2>
                        <input type="text" placeholder="Ramiro"></input>
                        <input type="text" placeholder="Ramirez"></input>
                        <input type="email" placeholder="soyalguien@gmail.com"></input>
                        <input type="password" placeholder="Contraseña1"></input>
                        <input type="button" value="Registrar"></input>
                    </form>
                </div>

                <div class="container-form sign-in">
                    <form class="formi">
                        <h2 class="create-account">Iniciar sesión</h2>
                        <input type="email" placeholder="soyalguien@gmail.com"></input>
                        <input type="password" placeholder="Contraseña1"></input>
                        <input type="button" value="Iniciar sesión"></input>
                    </form>
                    <div class="welcome-back">
                        <div class="message">
                            <h2>Bienvenido de nuevo</h2>
                            <p>¿No tienes cuenta? Puedes registrarte</p>
                            <button class="sign-in-btn">Registrar</button>
                        </div>
                    </div>
                </div>
                <script src="script.js"></script>
            </body>
        </html>
    );
}