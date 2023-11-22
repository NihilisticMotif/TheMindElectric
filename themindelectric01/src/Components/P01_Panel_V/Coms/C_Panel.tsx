
// React
import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type

// CSS
import './C_Panel.css';

const C_Panel = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
Name
// PERPERTY
// HOOK
}:{
// TYPE
// PERPERTY
Name:string
// HOOK
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    // In this case, it initialize height of Both Panels
    const [SS_IsFirst,setSS_IsFirst]=useState<boolean>(true)

    // SS_Delta = P01id_Up.height - P01id_Resize.height
    // SS_DeltaMemory == false : Forget SS_Delta
    // SS_DeltaMemory == true  : Remember SS_Delta
    // We do this because we do not want to update SS_Delta during mouse moving event.
    const [SS_Delta,setSS_Delta]=useState<number>(0)
    const [SS_DeltaMemory,setSS_DeltaMemory]=useState<boolean>(false)

    // SS_Height = Height of Up panel
    const [SS_Height,setSS_Height]=useState<number>(400)

    // SS_InnerDown = Is Mouse Click down in let_Resize
    // SS_OuterDown = Is Mouse Click down in this components
    // SS_InnerMemory = Is Mouse Click start at let_Resize
    const [SS_InnerDown, setSS_InnerDown] = useState<boolean>(false);
    const [SS_OuterDown, setSS_OuterDown] = useState<boolean>(false);
    const [SS_InnerMemory,setSS_InnerMemory] = useState<boolean>(false)

    let P01id_C:string = 'P01id_C'+Name
    let P01id_Up:string = 'P01id_Up'+Name
    let P01id_Resize:string='P01id_CResize'+Name
    let P01id_Down:string = 'P01id_Down'+Name

//****************************************************************************
    useEffect(()=>{
//****************************************************************************
        let let_C = document.getElementById(P01id_C)

        // let_Resize is in between Left and Down Panels.
        let let_Resize=document.getElementById(P01id_Resize)
        
        // Up Panel
        let let_Up=document.getElementById(P01id_Up)
        // Down Panel
        let let_Down=document.getElementById(P01id_Down)  

        // Minimum Width of Both Panels
        let let_MinimumHeight=100

//****************************************************************************
        // Initialize width of Both Panels
        // https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space
        if(SS_IsFirst===true){
            let let_DownHeight=let_C!.offsetHeight-let_Up!.offsetHeight-5
            let_Up!.setAttribute("style","height:400px");
            let_Down!.setAttribute("style", "height:"+let_DownHeight.toString()+'px');
            setSS_IsFirst(false)
        }
        else{
            let let_DownHeight=let_C!.offsetHeight-let_Up!.offsetHeight-5
            let_Down!.setAttribute("style", "height:"+let_DownHeight.toString()+'px');
        }

//****************************************************************************
        // Setting Minimum Height of P01id_Up and P01id_Down
        // By ChatGPT
        if (
                let_Up!.offsetHeight < let_MinimumHeight ||
                let_Up!.offsetHeight > let_C!.offsetHeight - 100 - 5
        )   {
            let let_UH = Math.max(let_MinimumHeight, Math.min(let_Up!.offsetHeight, let_C!.offsetHeight - 100 - 5));
            let let_DH = let_C!.offsetHeight - let_UH - 5;
            let_Up!.setAttribute("style", "height:" + let_UH.toString() + "px");
            let_Down!.setAttribute("style", "height:" + let_DH.toString() + "px");
            setSS_DeltaMemory(false);
            setSS_InnerDown(false);
            setSS_OuterDown(false);
        }

//****************************************************************************
        // Update Width of Up Panel
        if(SS_InnerMemory){
            if(SS_Height<let_MinimumHeight){
                let_Up!.setAttribute("style","height:"+let_MinimumHeight.toString()+"px");
            }
            else{
                let_Up!.setAttribute("style","height:"+SS_Height.toString()+"px");
            }
        }
        else{
            setSS_DeltaMemory(false)
        }
//****************************************************************************
    },[SS_Height,SS_InnerDown,SS_OuterDown]
    )
//****************************************************************************

//****************************************************************************
// FUNCTION_00: Detect Mouse Click in P01id_Resize
//****************************************************************************
    function f_InnerDown():void{
        setSS_InnerDown(true);
        setSS_InnerMemory(true)
    };

    function f_InnerUp():void{
        setSS_InnerDown(false);
        setSS_InnerMemory(false)
        setSS_DeltaMemory(false)
    };

//****************************************************************************
// FUNCTION_01: Detect Mouse Click outside P01id_Resize
//****************************************************************************
    function f_OuterDown():void{
        setSS_OuterDown(true);
    };

    function f_OuterUp():void{
        setSS_OuterDown(false);
        setSS_InnerMemory(false)
        setSS_DeltaMemory(false)
    };

//****************************************************************************
// FUNCTION_02: Detect Mouse Move
//****************************************************************************
    function f_MouseMove(e: React.MouseEvent<HTMLDivElement>):void{
        let let_Y:number = e.clientY;
        if(SS_DeltaMemory===false){
            let let_UpHeight:number=document.getElementById(P01id_Up)!.offsetHeight
            setSS_Delta(let_Y-let_UpHeight)
            setSS_DeltaMemory(true)
        }
        setSS_Height(let_Y-SS_Delta)
    };

//****************************************************************************
// FUNCTION_03: Detect Mouse Move outside of P01id_Resize
//****************************************************************************
    function f_InnerLeave():void{
        if(SS_InnerMemory===false){
            setSS_InnerDown(false)
        }
    }

//****************************************************************************
// FUNCTION_04: Detect Mouse Move outside of P01id_Div
//****************************************************************************
    function f_OuterLeave():void{
        setSS_InnerDown(false)
        setSS_OuterDown(false)
        setSS_InnerMemory(false)
    }
//****************************************************************************
// JAX_00:
//****************************************************************************
// <div className='P01id_Space'>
// </div>

return(
<div className='P01id_C' id={P01id_C}
    onMouseDown={f_OuterDown} 
    onMouseUp={f_OuterUp}
    onMouseMove={f_MouseMove}
    onMouseLeave={f_OuterLeave}>

<div className='P01id_Up' id={P01id_Up}>

</div>

<div className='P01id_CResize' id={P01id_Resize}
    onMouseDown ={f_InnerDown}
    onMouseUp   ={f_InnerUp}
    onMouseLeave={f_InnerLeave}>
</div>

<div className='P01id_Down' id={P01id_Down}>
</div>

</div>
    )
}

export default C_Panel