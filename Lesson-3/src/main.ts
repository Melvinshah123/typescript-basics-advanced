let stringArr = ['one','two','Dave'];

let guitars = ['Strat','Les Paul',5150];

let mixedData = ['EVH','1984',true];

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands:string[] =[];
bands.push('Van Halen')

//tuple
let myTuple:[string,number,boolean] = ['Dave', 42 , true]

let mixed = ['John' , 1 , false]

myTuple[2] = false
myTuple[1] = 22 


//Objects
let myObj:object 
myObj = []
console.log(typeof myObj)

myObj = bands
myObj = {}

const exampleObj ={
    prop1: 'Dave',
    prop2: true
}

exampleObj.prop2 = false

type Guitarist = {
    name: string,
    active: boolean,
    albums: (string|number)[]
}

let evh: Guitarist = {
    name:"Eddie",
    active: false,
    albums:[1984 , 5150 , 'OUBI2']
}

let jp: Guitarist = {
    name:"Jimmy",
    active: true,
    albums:['I' , 'II' , 'IV']
}

const greetGuitarist = (guitarist:Guitarist) => {
    return `Hello ${guitarist.name}!`;
}

console.log(greetGuitarist(jp));

//interfaces
interface Guitarist1  {
    name: string,
    active: boolean,
    albums: (string|number)[]
}

let evh1: Guitarist1 = {
    name:"Eddie",
    active: false,
    albums:[1984 , 5150 , 'OUBI2']
}

let jp1: Guitarist1 = {
    name:"Jimmy",
    active: true,
    albums:['I' , 'II' , 'IV']
}

const greetGuitarist1 = (guitarist:Guitarist1) => {
    return `Hello ${guitarist.name}!`;
}