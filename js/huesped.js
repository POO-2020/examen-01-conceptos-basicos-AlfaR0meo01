export default class Huesped{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    getDescripcion(){
        return `Huesped: ${this.nombre}, Sexo: ${this.genero}`;
    }    
}


