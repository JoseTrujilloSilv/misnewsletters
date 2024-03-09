let array = ["perro", "gato", "caballo", "cerdo", "pájaro", "pez", "elefante", "jirafa", "tigre","rojo", "azul", "verde", "amarillo", "blanco", "negro", "marrón", "rosa", "morado","casa", "coche", "árbol", "sol", "luna", "estrella", "montaña", "río", "mar"];

let position = array.indexOf('asdassadsa');

console.log(position)

if (position !== -1) {
    console.log('La palabra esta en el array');
}else{
    console.log('La palabra no existe');
}

