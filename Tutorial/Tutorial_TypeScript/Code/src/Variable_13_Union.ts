// TUTORIAL13_Union

function StringToNumber(Number: string | number):number{
    if (typeof Number=== 'number'){
        return Number
    }
    else{
        // https://stackoverflow.com/questions/54649465/how-to-do-try-catch-and-finally-statements-in-typescript
        // https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript
        try{
            return parseFloat(Number)
        }
        catch{
            return 0
        }
    }
}

console.log(StringToNumber(7))
console.log(StringToNumber('7'))
console.log(StringToNumber('7h'))