const sumar = require("../index");
const assert = require("assert");

// old -> caja negra y caja blanca
// actualidad -> pruebas unitarias (probar una funcion NO mayor a una funcion o metodo)
//            -> pruebas funcionales(E2E) (revisar que el software funcione correctamente)
//            -> Coverage
//            -> pruebas de integracion (revisa que componentes funcionen correctamente)
//            -> pruebas de estres (entender los limites de la aplicacion, para poder realzar el escalamiento.)


// como se escribe una prueba?
// 50% => 1. prueba correcta y una prueba que falle.
// Asserts = Afirmacion

describe("Probar la suma de dos numeros", ()=>{
 //afirmamos que cinco mas cinco son 10
 it("cinco mas cinco es 10", ()=>{
    assert.equal(10, sumar(5,5));
 });
 // afirmamos que cinco mas cinco no son 55
 it("cinco mas cinco no son 55", ()=>{
    assert.notEqual(55, sumar(5,5));
 })
});