import Huesped from './huesped.js';

export default class Reservacion {
    constructor(nume_habitacion, fecha_llegada, noches, huespedes) {
        this.nume_habitacion = nume_habitacion;
        this.fecha_llegada = fecha_llegada;
        this.noches = noches;
        this.huespedes = [];
    }

    getFechaFormatoCorto() {
        return `${this.fecha_llegada.getDate()}/${this.fecha_llegada.getMonth()}/${this.fecha_llegada.getFullYear()}`;
    }
    addHuesped(element) {
        return this.huespedes.push(element);
    }
    getNumHuespedes() {
        return `Num. de Huespedes: ${this.huespedes.length}`;
    }
    getResumen() {
        var listaHuesped = "";
        this.huespedes.forEach(huesped => {
            return listaHuesped += "\n" + huesped.getDescripcion();
        })
        console.log(listaHuesped);
        console.log(`Habitacion: ${this.nume_habitacion},numero de noches:${this.noches} ,Fecha de llegada: ${this.getFechaFormatoCorto()},${listaHuesped}`);
    }
}
