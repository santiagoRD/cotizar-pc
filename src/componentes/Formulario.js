import React, { Component } from "react";
import "../css/formulario.css";

export default class Formulario extends Component {

//Manejo de los datos del formulario
//1. Crear los Refs
    placaRef = React.createRef();
    cpuRef = React.createRef();
    gpuRef = React.createRef();
    ramRef = React.createRef();
    chasisWhiRef = React.createRef();
    chasisBlaRef = React.createRef();
    refrigeracionLiRef = React.createRef();
    refrigeracionTraRef = React.createRef();

    //2.Crear la funcion que se ejecuta al enviar el formulario
    calcularPc = (e) =>{
        e.preventDefault();

        const chasis = this.chasisWhiRef.current.checked ? 'blanco' : 'negro';
        const  refigeracion = this.refrigeracionLiRef.current.checked ? 'liquida' : 'tradicional';

        //3. Crear el objeto 
        const infoPc ={
            placa: this.placaRef.current.value,
            cpu: this.cpuRef.current.value,
            gpu: this.gpuRef.current.value,
            ram: this.ramRef.current.value,
            chasis: chasis,
            refrigeracion: refigeracion
        }

        //4. Enviarlo al componente principal
        this.props.calcularPc(infoPc);
    }
  render() {
    return (
      <form className="app__formulario" onSubmit={this.calcularPc}>
        <div className="campo">
          <label>MotherBoard:</label>
          <select name="motherboard" ref={this.placaRef}> {/* Conectamos los Refs Creados arriba, a los campos del formulario */}
            <option value="Gigabyte H310M DS2">Gigabyte H310M DS2</option>
            <option value="MSI H310M Pro-VD">MSI H310M Pro-VD</option>
            <option value="Asus H310M-D Prime">Asus H310M-D Prime</option>
          </select>
        </div>
        <div className="campo">
          <label>CPU:</label>
          <select name="cpu" ref={this.cpuRef}>
            <option value="Intel Core i7-8700">Intel Core i7-8700</option>
            <option value="Intel Core i5-8600K">Intel Core i5-8600K</option>
            <option value="AMD Ryzen 5 2600X">AMD Ryzen 5 2600X</option>
            <option value="AMD Ryzen 7 2700X">AMD Ryzen 7 2700X</option>
          </select>
        </div>

        <div className="campo">
          <label>GPU:</label>
          <select name="cpu" ref={this.gpuRef}>
            <option value="Titan RTX">Titan RTX</option>
            <option value="GeForce RTX 2080 Ti">GeForce RTX 2080 Ti</option>
            <option value="GeForce GTX 1080 Ti">GeForce GTX 1080 Ti</option>
            <option value="Titan X">Titan X</option>
            <option value="GeForce GTX 1080">GeForce GTX 1080</option>
            <option value="Radeon RX Vega 56">Radeon RX Vega 56</option>
            <option value="GeForce GTX 1070 Ti">GeForce GTX 1070 Ti</option>
          </select>
        </div>

        <div className="campo">
          <label>Memoria RAM:</label>
          <select name="cpu" ref={this.ramRef}>
            <option value="HyperX DDR4 4G">HyperX DDR4 4G</option>
            <option value="HyperX DDR4 8G">HyperX DDR4 8G</option>
            <option value="HyperX DDR4 16G">HyperX DDR4 16G</option>
          </select>
        </div>

        <div className="campo">
          <label>Chasis:</label>
          <input type="radio" name="chasis" value="blanco" ref={this.chasisWhiRef}/>
          Blanco
          <input type="radio" name="chasis" value="negro" ref={this.chasisBlaRef}/>
          Negro
        </div>

        <div className="campo">
          <label>Refrigeracion:</label>
          <input type="radio" name="refrigeracion" value="líquida" ref={this.refrigeracionLiRef}/>
          Líquida
          <input type="radio" name="refrigeracion" value="tradicional" ref={this.refrigeracionTraRef}/>
          Tradicional
        </div>

        <button type="submit" className="boton">
          Calcular
        </button>
      </form>
    );
  }
}
