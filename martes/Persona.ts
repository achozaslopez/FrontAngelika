class Persona{
    private edad:number = 0;
    private nombre:string="";

    constructor(nombre:string,edad:number,private telefono:string){
        this.edad=edad;
        this.nombre=nombre;
    }

    get g_edad(){
        return this.edad;
    }

    set g_edad(edad:number){
        this.edad=edad;
    }
}

let p:Persona = new Persona("Pepe",20,"12345678");
p.g_edad=21;
console.log(p.g_edad);