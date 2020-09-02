import React from 'react';
import { Link } from "react-router-dom";

export default function MenuLi({
    iconClass,
    textName,
    active,
    direction
}){
    return (
      <li className={active}>
        <Link to={`/${direction}`}>
          <i className={iconClass}></i>
          <p>{textName}</p>
        </Link>
      </li>
    );
}

