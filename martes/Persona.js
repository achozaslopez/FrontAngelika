var Persona = /** @class */ (function () {
    function Persona(nombre, edad, telefono) {
        this.telefono = telefono;
        this.edad = 0;
        this.nombre = "";
        this.edad = edad;
        this.nombre = nombre;
    }
    Object.defineProperty(Persona.prototype, "g_edad", {
        get: function () {
            return this.edad;
        },
        set: function (edad) {
            this.edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var p = new Persona("Pepe", 20, "12345678");
p.g_edad = 21;
console.log(p.g_edad);
