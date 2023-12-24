// ➡️ inferencia
// como a y b infiere que son numbers
const a = 1;
const b = 2;
const c = a + b;

let cadenadetext = "hola";

cadenadetext.toLocaleLowerCase();

// ❌ cadenadetext = 2
// ❌ cadenadetext.propiedadInexistente

// ➡️ any
let obj: any = { x: 0 };
obj.foot();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// ➡️ functions
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar("Pepe");
// saludar(2)

//primer forma para tipado en objetos
function gretting({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`);
}
//segunda forma
function gretting2(persona: { name: string; age: number }) {
  const { name, age } = persona; // <-- hay que sacarlo
  console.log(`Hola ${name}, tienes ${age} años`);
}

//esto puede dar un error
// gretting({name: 2, age: "Pepe"})
gretting({ name: "pepe", age: 3 });

//inferir el tipo de dato de retorno
function gretting3({ name, age }: { name: string; age: number }): number {
  console.log(`Hola ${name}, tienes ${age} años`);
  return age;
}

// let username:string
// ❌ username = gretting3()

//No es correcto colocarle Function porque es una forma muy general
//de decirle que cualquier funcion nos puede pasar
// ❌ const sayHiFromFunction = (fn: Function) => {
//   return fn("miguel")
// }

//cuando una funcion no tiene un return se dice que devuelve void
//void es como decir que no me importa lo que devuelve la function
const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn("miguel");
};

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
  // return name
};

sayHiFromFunction(sayHi);

//Hay que evitar esto a toda costa porque esto typescript lo puede
// inferir sin necesidad de pasar el tipo de dato
// ✅ Aki hay dos formas de tipar las arrow functions es preferible
//utilizar la primer forma porque asi visualmente queda todo en un solo sitio
const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// ➡️ never se utiliza para funciones que sabemos que nunca van
//a devolver nada y que nunca llega el return implicito de la funcion
function throwError(message: string): never {
  throw new Error(message);
}

// ➡️ inferencia functiones anonimas segun el contexto
const avengers = ["Spidey", "Hulk", "Avengers"];

//aki infiere que avenger es un string, entonces dice
//okey como estas usando un array de strings yo se que te llegara un string
avengers.forEach((avenger) => {
  console.log(avenger.toUpperCase());
});

//Objetos
// ➡️ Type Alias
// type Hero = {
//   name:string,
//   age:number,
// }

// let hero: Hero = {
//   name: "thor",
//   age: 1500,
// }

// ❌ hero.power = 100

// function createHero(name:string, age:number): Hero {
//   return {name, age}
// }
// function createHero(hero: Hero): Hero {
//   const {name, age} = hero
//   return {name, age}
// }

// const thor = createHero({name: "Thor", age: 1500})

// ➡️ Optional properties

// type Hero = {
//   name:string,
//   age:number,
//   isActive: boolean;
// }

// type Hero = {
//   readonly id?: string;
//   name: string;
//   age: number;
//   isActive?: boolean; // <-- propiedad opcional si este debe ser un boolean
// };

// let hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { id: crypto.randomUUID(), name, age, isActive: true };
// }

// const thor = createHero({ name: "Thor", age: 1500 });
// console.log(thor.isActive); // --> true

// thor.id?.toString() // <-- optional chaining si thor tiene el id hace el toString

// thor.id = 134534534534534534534534534534 // no lo puede asignar porque solo es de lectura

// ➡️ Templates union types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type Hero = {
//   readonly id?: HeroId,
//   name: string,
//   age: number,
//   isActive?: boolean // <-- propiedad opcional si este debe ser un boolean
// };

// let hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   // return { id: crypto.randomUUID(), name, age, isActive: true };
//   return { id: "123-123-123-123-123", name, age, isActive: true };
//   // ❌ return { id: "123", name, age, isActive: true };
// }

// const thor = createHero({ name: "Thor", age: 1500 });
// console.log(thor.isActive); // --> true
// thor.id ?? "No tiene id"

// type HexadecimalColor = `#${string}`
// ❌ const color : HexadecimalColor = "0033ff"
// const color2 = '#0033ff'

// ➡️ Union Types

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
//esto es un union type estamos diciendo que puede ser el primero, el segundo, el tercero y asi
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galatic"
  | "universal"
  | "multiversal";

// let ann:number | string
// ann = 1
// ann = "hola"

let ann: string | 2;
// ann = 3
// ann = 2

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean; // <-- propiedad opcional si este debe ser un boolean
  powerScale?: HeroPowerScale;
};

let hero: Hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHero({ name: "Thor", age: 1500 });
thor.powerScale = "local";
