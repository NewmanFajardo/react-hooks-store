import React from 'react';
import MenuLi from './menuLi';
import { Link } from "react-router-dom";


export default function Menu(){
    return (
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
          <Link to={`/`} className="simple-text logo-mini">
            <div className="logo-image-small">
              <img src="../assets/img/logo-small.png" alt=" " />
            </div>
          </Link>
          <Link to={`/`} className="simple-text logo-normal">
            Store
          </Link>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <MenuLi
              iconClass="nc-icon nc-bank"
              textName="Inicio"
              direction="home"
              active="active"
            />
            <MenuLi
              iconClass="nc-icon nc-pin-3"
              textName="Sucursales"
              direction="branchoffice"
              active=""
            />
            <MenuLi
              iconClass="nc-icon nc-badge"
              textName="Empleados"
              direction="#"
              active=""
            />
            <MenuLi
              iconClass="nc-icon nc-app"
              textName="Envios"
              direction="#"
              active=""
            />
            <MenuLi
              iconClass="nc-icon nc-paper"
              textName="Inventarios"
              direction="#"
              active=""
            />
            <MenuLi
              iconClass="nc-icon nc-tv-2"
              textName="Productos"
              direction="#"
              active=""
            />
            <MenuLi
              iconClass="nc-icon nc-cart-simple"
              textName="Ventas"
              direction="#"
              active=""
            />
            <MenuLi
              iconClass="nc-icon nc-chart-pie-36"
              textName="Estadisticas"
              direction="#"
              active=""
            />
          </ul>
        </div>
      </div>
    );
}

