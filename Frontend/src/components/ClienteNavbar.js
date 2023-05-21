import React, { useState } from 'react'
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carrito from './Carrito';
import '../css/ClienteNavbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export const ClienteNavbar = ({ toggleNavbar }) => {
    const [showModal, setShowModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    return (
      <nav className="sidebar nav-container">
        <div className="row">
          <div className="text row justify-content-between align-items-center" style={{ backgroundColor: 'grey' }}>
            <div className="col">
              <span className="super">Super</span>
              <span className="market">Market</span>
              <span className="name">TITA</span>
            </div>
            <div className="col-auto">
              <a className="stock" type="button" onClick={toggleModal}>
                <ShoppingCartIcon />
              </a>
              {showModal && <Carrito onClose={toggleModal} />}
            </div>
            <div className="col-auto">
              <NavLink to="/home">
                <a onClick={toggleNavbar} className="icono">
                  <BsPersonCircle />
                </a>
              </NavLink>
            </div>
          </div>
  
          <div className="menu-bar">
            <div className="menu">
              <ul className="nav-link">
                <li className="nav-item">
                  <NavLink to="/" className="text nav-text" id="cat">
                    TODOS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/OfertasCli" className="text nav-text" id="cat">
                    OFERTAS
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle className="dropdown-toggle text nav-text" caret>
                      CATEGORÍAS
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>
                      <NavLink to="/Abarrotes">
                        <span>Abarrotes</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Bebidas">
                        <span>Bebidas</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/BebidasA">
                        <span>Bebidas Alcoholicas</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/CuidadoP">
                        <span>Cuidado Personal</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Enlatados">
                        <span>Enlatados</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Farmacos">
                        <span>Farmacos</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/FiamyEmb">
                        <span>Fiambres y Embutidos</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Golosinas">
                        <span>Golosinas</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Lacteos">
                        <span>Lacteos</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/LimpiezaH">
                        <span>Limpieza del Hogar</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Panaderia">
                        <span>Panaderia</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Snacks">
                        <span>Snacks</span>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/Varios">
                        <span>Varios</span>
                      </NavLink>
                    </DropdownItem>
                      {/* Agrega más elementos DropdownItem según tus categorías */}
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  };