let myName: string = 'Melvin';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let mixed: string | number; //can hold either string or number 

myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = 1984;
mixed = "Van Halen"
mixed = 1983

//by default typescript assigns any type to the variable if the type is not assigned 
const sum = (a:number , b:string) => {
    return a + b; 
}

let re:RegExp = / \w + /g;