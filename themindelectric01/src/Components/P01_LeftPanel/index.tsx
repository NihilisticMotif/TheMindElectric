// React
import { useState , useEffect , useRef , useCallback } from 'react';

/*
To Do Now
1. Make Resize button more user friendly
2. P02_Footer
3. Create UI similar to Desmos

Reference:
1. https://react.dev/reference/react/useCallback
2. https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks
3. https://youtu.be/4qyuNBlc8ho?si=oHxlVrX-qQ3tCbnx
4. https://www.w3schools.com/cssref/pr_class_cursor.php
*/

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type

// CSS
import './index.css';

const P01_LeftPanel = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
}:{
// TYPE
// PERPERTY
// HOOK
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_MouseX,setSS_MouseX]=useState<number>(0)
    const [SS_Width,setSS_Width]=useState<number>(500)
    // By ChatGPT
    const [SS_IsMouseDown, setSS_IsMouseDown] = useState(false);

    let let_ColorOfTheWind:string='red'
    useEffect(()=>{
        // let let_e: React.MouseEvent<HTMLDivElement>
        // let let_X:number=let_e.clientX
        // let let_OffSetWidth:number=document.getElementById('P01id_Div')!.offsetWidth
        // if(let_OffSetWidth-let_X<5){}
        let let_ThisPanel=document.getElementById('P01id_Div')
        if(SS_IsMouseDown){
            let_ColorOfTheWind='red'
            // https://www.w3schools.com/jsref/prop_style_color.asp
            let_ThisPanel!.style.backgroundColor = let_ColorOfTheWind
        }
        else{
            let_ColorOfTheWind='blue'
            let_ThisPanel!.style.backgroundColor = let_ColorOfTheWind
            //let_ThisPanel!.setAttribute("style","width:"+SS_Width.toString()+"px");
        }
        //if(SS_IsMouseDown===true){
        //    let let_OffSetWidth:number=document.getElementById('P01id_Div')!.offsetWidth
        //    setSS_Width(let_OffSetWidth)
        //}
        //setSS_IsMouseDown(false)
        
        

    },[SS_Width,SS_IsMouseDown]
    )
//****************************************************************************
// FUNCTION_00: By default JSX and function are in the same group.
//****************************************************************************
    // /function f_Click(e: React.MouseEvent<HTMLDivElement>):void{
    // /    // By ChatGPT
    // /    const let_X:number = e.clientX;
// /
    // /    setSS_Width(let_X)
    // /    // https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height
    // /    // https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
    // /    // let let_OffSetWidth:number=document.getElementById('P01id_Div')!.offsetWidth
    // /    // if(let_OffSetWidth-mouseX<5){
    // /    //     setSS_Width(mouseX)
    // /    //     //alert(document.getElementById('P01id_Div')!.offsetWidth)
    // /    // }
    // /    //alert(let_ThisPanel!.offsetWidth)
    // /}

    function f_Click():void{
        
    }

//****************************************************************************
// FUNCTION_01: Detect Mouse Click
//****************************************************************************
    const f_MouseDown = () => {
        setSS_IsMouseDown(true);
    };

    const f_MouseUp = () => {
        setSS_IsMouseDown(false);
    };

//****************************************************************************
// JAX_00:
//****************************************************************************


return(
<   div id='P01id_Div' 
    onClick={f_Click}
    onMouseDown={f_MouseDown} 
    onMouseUp={f_MouseUp}
    >
<h1>xxwsx</h1>
</div>
)
}

export default P01_LeftPanel