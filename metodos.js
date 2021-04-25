function letras(cadena) {
    var todoJunto = "";
    for (i = 0; i < cadena.length; i++) {
        if (cadena[i] != " ")
            todoJunto += cadena[i];
    }// fin del for para juntar las palabras
    return todoJunto.length;
} // fin del metodo para el número de letras

function palabras(cadena) {
    var normal = cadena.toLowerCase().split(" ");
    return normal.length;
} // fin del metodo para el largo de la cadena

function vocales(cadena) {

    var num_vocales = 0;
    for (i = 0; i < cadena.length; i++) {
        if (cadena[i] == 'a') num_vocales += 1;
        else if (cadena[i] == 'e') num_vocales += 1;
        else if (cadena[i] == 'i') num_vocales += 1;
        else if (cadena[i] == 'o') num_vocales += 1;
        else if (cadena[i] == 'u') num_vocales += 1;
        // fin del conteo de vocales
    } //fin del ciclo de conteo
    return num_vocales;
} // funcion que te da el numero de vocales

function consonantes(cadena) {

    var normal = letras(cadena);
    var normal_int = parseInt(normal);
    var num_vocales = vocales(cadena);
    var num_consonantes = normal_int - num_vocales;

    return num_consonantes;

} // funcion que te da el numero de consonantes


function palindromo(cadena) {

    var normalizada = cadena.toLowerCase();
    var todoJunto = "";
    for (i = 0; i < normalizada.length; i++) {
        if (normalizada[i] != " ")
            todoJunto += normalizada[i];
    }//fin del ciclo para juntarlo

    var longitud = todoJunto.length;
    var condicion = false;
    //let reverso1 = todoJunto.reverse();
    var reverso = new Array();
    var mensaje_pos = "es palindromo"
    var mensaje_neg = "no es palindromo"
    let contrario_index;

    for (index = 0; index < longitud ; index++){
        let temp = todoJunto[index];
        contrario_index = longitud-index-1;
        reverso[contrario_index] = temp;
    };

    for (let i = 0; i < longitud; i++) {
        if (todoJunto[i] == reverso[i]){
            condicion = true;
        }
        else{condicion = false;}
    };

    if (condicion){
        return mensaje_pos
    }
    else {return mensaje_neg}

}; // fin de la funcion de palindromo

module.exports.palindromo = palindromo;
module.exports.num_Palabras = palabras;
module.exports.num_Letras = letras;
module.exports.num_Vocales = vocales;
module.exports.num_Consonantes = consonantes;