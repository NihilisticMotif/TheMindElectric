// TUTORIAL06_AnyType 
// Avoid using "Any" Data Type as much as possible. 

/*
// in tsconfig.json

*/
let AnyOneHere
let EveryWhereAtTheEndOfTime: any = 'Pomni'

//// Error
//function Print(Name){
//    console.log(Name)
//}

function ReLU(Z: number){
    if(Z<0)
        return 0
    else
        return Z
}

function Hello(Name: string){
    console.log('Hello '+Name)
}
