type Charector = {
    Name:string,
    Action:()=>void
}
type Story={
    StoryTitle:string,
    Plot:()=>void
}

type MainCharactor=Charector&Story

let WillWood: MainCharactor = {
    Name:'SuperMan',
    StoryTitle:'DC',
    Action:()=>{console.log('With great power comes great responsibility')},
    Plot:()=>{console.log(`
So, God forbid I'm seen just as an average human being
I mean, imagine if antagonists lacked any evil scheme
I'm the gap between a tragedy and comedy
Don't come at me
I'm the main character, and you have to like me`)
// https://stackoverflow.com/questions/35225399/typescript-angular-multiline-string
}
}