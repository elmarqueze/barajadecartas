var movimientos = 0;
var grupoTarjetas = [["🤡", "💩"], ["🌈", "👽"], ["👾", "🤖"], ["🔥", "🧠"], ["🤬", "👹"], ["🐔", "🐷"]]; 
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3]),
    movimientosMax: 18
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4]),
    movimientosMax: 24
  }
];
