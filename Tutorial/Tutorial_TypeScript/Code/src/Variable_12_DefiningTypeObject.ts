// TUTORIAL12_Type

type Fox={
    Species:string,
    LifeSpan:number,
    WhatDoesTheFoxSay: (Sound:string)=>void
}

let Dog:Fox = {
    Species:'Dog',
    LifeSpan:18,
    WhatDoesTheFoxSay: (Sound:string)=>{console.log(Sound)}
}