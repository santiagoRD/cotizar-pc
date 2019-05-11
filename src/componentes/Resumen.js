import React, { Component } from 'react'
import '../css/resumen.css';

export default class Resumen extends Component {

    mostrarSummary = () => {
        const {placa, cpu, gpu, ram, chasis, refrigeracion} = this.props.datos;
        const precio = this.props.precio;

        if(!placa || !cpu || !gpu || !ram || !chasis || !refrigeracion) return null;

        return(
            <div className="resumen">
                <h2>Specs del PC</h2>
                <li>Placa : <span>{placa}</span></li>
                <li>CPU : <span>{cpu}</span></li>
                <li>GPU : <span>{gpu}</span></li>
                <li>RAM : <span>{ram}</span></li>
                <li>Chasis : <span>{chasis}</span></li>
                <li>Refrigeracion : <span>{refrigeracion}</span></li>
                <h3>Precio: <span>$ {precio}</span></h3>
            </div>
        )
    }
  render() {
    return (
      <div>
        {this.mostrarSummary()}
      </div>
    )
  }
}
