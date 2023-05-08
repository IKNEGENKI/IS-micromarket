import React from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import {AiFillFileAdd} from "react-icons/ai"
import {VscNotebook} from "react-icons/vsc"
import {BsFillTrash3Fill} from "react-icons/bs"
import {BsShop} from "react-icons/bs"
import {HiClipboardDocumentList} from "react-icons/hi2"
import {MdSell} from "react-icons/md"
import {BiHomeHeart} from "react-icons/bi"
import { FaStore } from "react-icons/fa" ;   
import { TiThMenu } from "react-icons/ti";
import { BsPersonCircle } from "react-icons/bs";
import '../css/ClienteNavbar.css'
export const ClienteNavbar = ({ toggleNavbar }) => {

  return (
    <html lang="en">
<head>
    <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    
   
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
    
    <title>SuperMarket TITA</title> 
</head>
<body>
<nav class="sidebar  nav-container  ">
    <div className='row'>
        
            
                
        <div class="text row justify-content-between align-items-center">
  <div class="col">
    <span class="super">Super</span>
    <span class="market">Market</span>
    <span class="name">TITA</span>
  </div>
  <div class="col-auto">
    <a onClick={toggleNavbar} class="icono"><BsPersonCircle /></a>
  </div>
</div>

               
            

        

        <div class="menu-bar ">
            <div class="menu">

            <li class="nav-link">
                        
                        <a href="#">
                            < NavLink to="/Abarrotes" >
                              
                                <a class="text nav-text" id="cat">ABARROTES</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/Bebidas" >
                              
                                <a class="text nav-text" id="cat">BEBIDAS</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/BebidasA" >
                              
                                <a class="text nav-text" id="cat">BEBIDAS ALCOHOLICAS</a>
                            </NavLink>
                        
                        </a>
                        <a href="#">
                            < NavLink to="/CuidadoP" >
                              
                                <a class="text nav-text" id="cat">CUIDADO PERSONAL</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/Enlatados" >
                                
                                <a class="text nav-text" id="cat">ENLATADOS</a>
                                 
                            </NavLink>
                        </a>
                        <a href="#" id="cat">
                            < NavLink to="/Farmacos" >
                              
                                <a class="text nav-text" id="cat">FARMACOS</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/Lacteos" >
                              
                                <a class="text nav-text" id="cat">LACTEOS</a>
                            </NavLink>
                        </a>
                    </li>
                
                   
                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="/Farmacos" >
                              
                                <a class="text nav-text" id="cat">FARMACOS</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/Golosinas" >
                              
                                <a class="text nav-text"id="cat">GOLOSINAS</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/FiamyEmb" >
                              
                                <a class="text nav-text" id="cat">FIAMBRES Y EMBUTIDOS</a>
                            </NavLink>
                        </a>
                        
                        <a href="#">
                            < NavLink to="/LimpiezaH" >
                              
                                <a class="text nav-text" id="cat">LIMPIEZA DEL HOGAR</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/Panaderia" >
                              
                                <a class="text nav-text" id="cat">PANADERIA</a>
                            </NavLink>
                        </a>
                        <a href="#">
                            < NavLink to="/Snacks" >
                              
                                <a class="text nav-text" id="cat">SNACKS</a>
                            </NavLink>
                        </a>
                        < NavLink to="/Varios" >
                              
                                <a class="text nav-text" id="cat">VARIOS</a>
                            </NavLink>
                    </li>
                
                
            </div>

        </div>
        </div>
    </nav>

    <script src="../src/index.js"></script>

</body>
</html>  
  )
}
