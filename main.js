import Huesped from './js/huesped.js';
import Reservacion from './js/reservacion.js';
import Hotel from './js/hotel.js'


//var huesped = new Huesped('felipe de jesus rodriguez ontiveros', 'hombre');
var hotel = new Hotel("motel bates");
var cliente1 = new Huesped('deltaz', 'hombre');
var cliente2 = new Huesped('charlie', 'hombre');
var cliente3 = new Huesped('zulu', 'hombre');
var cliente4 = new Huesped('bravo', 'hombre');
var reservacion1 = new Reservacion(27, new Date(2020, 1, 25), 3);
var reservacion2 = new Reservacion(28, new Date(2020, 1, 23), 8);
reservacion1.addHuesped(cliente1);
reservacion1.addHuesped(cliente2);
reservacion2.addHuesped(cliente3);
reservacion2.addHuesped(cliente4);
hotel.reservaciones.push(reservacion1);
hotel.reservaciones.push(reservacion2);
hotel.getResumen();