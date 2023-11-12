// TUTORIAL10_Function 

/*
// in tsconfig.json
    ...,
    "noUnusedLocals": true,  
    // Warn that you define unused variable
    ...,
    "noUnusedParameters": true,   
    // Warn that you define the unused parameter in the function. 
    ...,
    "noImplicitReturns": true,   
    // Warn that you forget to specify what the output of the function should be.
    ...,
*/

function LeakyReLU(Z: number,a=0.001):number{
    if(Z<0)
        return a*Z
    else
        return Z
}

function GoodBye(Name: string):void{
    console.log('Good bye '+Name)
}