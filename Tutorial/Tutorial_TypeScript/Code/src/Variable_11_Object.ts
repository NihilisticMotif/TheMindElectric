// TUTORIAL11_A_Object

// Object Variable
let pixel:{
    Artist:string,
    readonly R:number,
    // readonly make the variable inside object become immutable.
    G:number,
    B:number,
} = {
    Artist:"CheChe",
    R:200,
    G:200,
    B:100,
}
// Pixel.R=180 // Immutable
// Pixel.G=180 // Mutable

//************************************************************************************************************

// TUTORIAL11_B_MethodOfObject

let fox:{
    Species:string,
    LifeSpan:number,
    WhatDoesTheFoxSay: (Sound:string)=>void
} = {
    Species:'Cat',
    LifeSpan:20,
    WhatDoesTheFoxSay: (Sound:string)=>{console.log(Sound)}
}

//************************************************************************************************************

// TUTORIAL11_C_DateVariable

// Date Variable
// https://stackoverflow.com/questions/45485073/how-do-i-express-a-date-type-in-typescript
const d: Date = new Date();