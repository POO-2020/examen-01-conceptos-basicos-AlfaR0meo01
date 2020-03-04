export default class Hotel{
    constructor(nombre, reservaciones){
        this.nombre = nombre;
        this.reservaciones = []
    }
    getNumHuespedes(){
        var numHuespedes=0;
        this.reservaciones.forEach(reservacion=>{
            numHuespedes+=reservacion.huespedes.length;
            
        });
        console.log(numHuespedes);
         
    }
    getResumen(){
        this.reservaciones.forEach(reservacion=>{
            reservacion.getResumen();
        })
    }
}

var hotel = new Hotel('motel bates',)