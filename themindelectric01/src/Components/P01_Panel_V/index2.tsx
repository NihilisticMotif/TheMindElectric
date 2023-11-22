// React
import { useState , useEffect , useRef , useCallback } from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type

// CSS
import './index.css'

// Utility
import _ from 'lodash';

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
    const [SS_Delta,setSS_Delta]=useState<number>(0)
    const [SS_PosX,setSS_PosX]=useState<number>(0)

    const [SS_Width,setSS_Width]=useState<number>(400)
    const [SS_IsFirst,setSS_IsFirst]=useState<boolean>(true)
    const [SS_UpdateDelta,setSS_UpdateDelta]=useState<boolean>(true)
    // By ChatGPT
    const [SS_InnerDown, setSS_InnerDown] = useState(false);
    const [SS_OuterDown, setSS_OuterDown] = useState(false);
    let let_ColorMouse:string='red'

    useEffect(()=>{
        let let_ThisResize=document.getElementById('P01id_Resize')
        let let_ThisPanel=document.getElementById('P01id_Body')
        let let_ThisCanvas=document.getElementById('P01id_Canvas')

        if(SS_IsFirst===true){
            let_ThisPanel!.setAttribute("style","width:400px");
            let_ThisCanvas!.setAttribute("style","width:100%");
            setSS_IsFirst(false)
        }
        else{
            let let_FullSetWidth:number=document.getElementById('P01id_Div')!.offsetWidth
            let let_OffSetWidth:number=document.getElementById('P01id_Body')!.offsetWidth
            let let_Width=let_FullSetWidth-let_OffSetWidth-5
            let_ThisCanvas!.setAttribute("style","width:"+let_Width.toString()+'px');
        }

        if(SS_InnerDown && SS_OuterDown){
            let_ColorMouse='red'
            // https://www.w3schools.com/jsref/prop_style_color.asp
            let_ThisResize!.style.backgroundColor = let_ColorMouse
            let_ThisPanel!.setAttribute("style","width:"+SS_Width.toString()+"px");
        }
        else{
            let_ColorMouse='blue'
            let_ThisResize!.style.backgroundColor = let_ColorMouse
            setSS_UpdateDelta(true)
        }
    },[SS_Width,SS_InnerDown]
    )
//****************************************************************************
// FUNCTION_00: By default JSX and function are in the same group.
//****************************************************************************

//****************************************************************************
// FUNCTION_01: Detect Mouse Click
//****************************************************************************
    function f_InnerDown():void{
        setSS_InnerDown(true);
    };

    function f_InnerUp():void{
        setSS_InnerDown(false);
        setSS_UpdateDelta(true)
    };

//****************************************************************************
// FUNCTION_01: Detect Mouse Click
//****************************************************************************
    function f_OuterDown():void{
        setSS_OuterDown(true);
    };

    function f_OuterUp():void{
        setSS_OuterDown(false);
        setSS_UpdateDelta(true)
    };

//****************************************************************************
// FUNCTION_02: Detect Mouse Move
//****************************************************************************
    function f_MouseMove(e: React.MouseEvent<HTMLDivElement>):void{
        let let_X:number = e.clientX;
        //setSS_PosX(let_X)
        if(SS_UpdateDelta===true){
            let let_OffSetWidth:number=document.getElementById('P01id_Body')!.offsetWidth
            setSS_Delta(let_X-let_OffSetWidth)
            setSS_UpdateDelta(false)
        }
        setSS_Width(let_X-SS_Delta)
    };

//****************************************************************************
// FUNCTION_02: Detect Mouse Move
//****************************************************************************

    function f_MouseLeave(e: React.MouseEvent<HTMLDivElement>):void{
        let let_X:number = e.clientX;
        setSS_PosX(let_X)
        // let let_X:number = e.clientX;
        // if(SS_InnerDown){
        //     setSS_UpdateDelta(true)
        //     f_MouseMove(e)
        // }
    }

//****************************************************************************
// FUNCTION_03
//****************************************************************************
    function f_OutsideMouse(e: React.MouseEvent<HTMLDivElement>):void{
        let let_X:number = e.clientX;
        if(let_X<SS_Width){

        }
    }

//****************************************************************************
// JAX_00:
//****************************************************************************

return(
<div id='P01id_Div'
    onMouseDown={f_OuterDown} 
    onMouseUp={f_OuterUp}
    onMouseMove={f_MouseMove}
    >
<   div id='P01id_Body' 
    >
<h1>SS_Delta: {SS_Delta}</h1>
<h1>SS_Width: {SS_Width}</h1>
<h1>SS_PosX: {SS_PosX}</h1>
<h1>SS_InnerDown: {SS_InnerDown.toString()}</h1>
<h1>SS_OuterDown: {SS_OuterDown.toString()}</h1>
</div>

<   div id='P01id_Resize' 
    onMouseDown={f_InnerDown} 
    onMouseUp={f_InnerUp}
    onMouseMove={f_MouseMove}
    >
</div>

<div id='P01id_Canvas'>

</div>

</div>
)
}

export default P01_LeftPanel