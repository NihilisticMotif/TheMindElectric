function Print(Message: string|null|undefined):void{
    if (typeof Message === 'string')
        console.log(Message)
    else
        console.log('Nothing')
}