console.log("Hola mundo");

let casa:string; //Fuertemente tipadas
const Pi = 3.14;//Constante

var tren;//Variable de ambito local
let coche:string;
coche = "ford";
casa = "25";

const cadena = `Aqui el coche ${coche} corre a ${casa}`;//Templates
console.log(cadena.length);

//Tipos de variables
let num:number;
let cad:string;
let boo:boolean;
let nulo:null;//Activar strictNullChecks en tsconfig.json
let nodefinido:undefined;//Activar strictNullChecks en tsconfig.json
let nodevuelvenada:void;

num=3;

let tt:[number,string]=[1,"hh"]