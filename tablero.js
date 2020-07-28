/**
 * Determina cuál es el ganador en un tablero de tres
 * en raya (si hay alguno). Los posibles resultados son:
 * 0 -> no hay ganador
 * 1 -> gana O
 * 2 -> gana X
 * @param {array} tablero Matriz de 3x3 números
 */
function hayGanador(tablero) {

    // Comprobar filas (horizontal)
    for (let i = 0; i < tablero.length; i++) {
        if(tablero[i][0]==tablero[i][1] && tablero[i][0]==tablero[i][2])
            return tablero[i][0];      
    }
    return 0; //TODO: provisional, revisar este resultado    
}


module.exports = {
    hayGanador
}