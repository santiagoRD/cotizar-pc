import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import '../css/app.css';
import {calcularAdicionComponente} from '../helper';

export default class App extends Component {


  //5.Crear el state
  state ={
    precio: '',
    info: {}
  }

  //6.Crear la funcion que recibe los datos del Componente Formulario

  calcularPc = (infoPc) => {
    //Destructuring de los datos del pc
    const {placa, cpu, gpu, ram, chasis, refrigeracion} = infoPc;

    //Calculos

    const infoPlacas = [{
      nombre: 'Gigabyte H310M DS2',
      precio: 500
    },
    {
      nombre:'MSI H310M Pro-VD',
      precio: 350
    },
    {
      nombre:'Asus H310M-D Prime',
      precio: 400
    }
  ]

  const infoProcesadores =[{
    nombre:'Intel Core i7-8700',
    precio: 900
  },
  {
    nombre: 'Intel Core i5-8600K',
    precio: 600
  },
  {
    nombre:'AMD Ryzen 5 2600X',
    precio: 750
  },
  {
    nombre:'AMD Ryzen 7 2700X',
    precio: 810
  }
]

const infoGraficas =[{
  nombre: 'Titan RTX',
  precio: 1200
},
{
  nombre: 'GeForce RTX 2080 Ti',
  precio: 2500
},
{
  nombre: 'GeForce GTX 1080 Ti',
  precio: 800
},
{
  nombre: 'Titan X',
  precio: 870
},
{
  nombre: 'GeForce GTX 1080',
  precio: 600
},
{
  nombre: 'Radeon RX Vega 56',
  precio: 980
},
{
  nombre: 'GeForce GTX 1070 Ti',
  precio: 700
}
]

const infoRam = [{
  nombre: 'HyperX DDR4 4G',
  precio: 300
},
{
  nombre:'HyperX DDR4 8G',
  precio: 625
},
{
  nombre: 'HyperX DDR4 16G',
  precio: 1200
}]

const infoChasis = [{
  nombre: 'blanco',
  precio: 150
},
{
  nombre: 'negro',
  precio: 200
}]

const infoRefrigeracion = [{
  nombre: 'liquida',
  precio: 450
},
{
  nombre: 'tradicional',
  precio: 150
}]


let resultado = 1000;

//calcular precio placa


resultado +=  calcularAdicionComponente(infoPlacas, placa) + calcularAdicionComponente(infoProcesadores, cpu) + calcularAdicionComponente(infoGraficas, gpu) + calcularAdicionComponente(infoRam,ram) + calcularAdicionComponente(infoChasis, chasis) + calcularAdicionComponente(infoRefrigeracion, refrigeracion);

console.log(resultado);

    //Crear objeto para el resumen
    const datosPc ={
      placa: placa,
      cpu: cpu,
      gpu: gpu,
      ram: ram,
      chasis: chasis,
      refrigeracion: refrigeracion
    }

    //Setear el state

    this.setState({
      precio: resultado,
      info: datosPc
    })
  }
  

  render() {
    return (
      <div className="app__contenedor">
        <Header 
          titulo = "Cotizador de PC's"
        />
        <div className="app__contenedor-form">
          <Formulario 
            calcularPc = {this.calcularPc}
          />
          <Resumen 
            datos = {this.state.info}
            precio = {this.state.precio}
          />
        </div>
        
      </div>
    )
  }
}
