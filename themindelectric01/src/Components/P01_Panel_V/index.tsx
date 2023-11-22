/*
//****************************************************************************
// UI
//****************************************************************************

// Example No.1
P01id_Left       | P01id_Right
+----------------+--------------------+
|                |   Data             |
| Utility 00     |   Visualization    |
|----------------|                    |
|                |                    |
|                |--------------------|
|                |                    |
| Utility 01     |   Utility 02       |
|                |                    |
|                |                    |
+----------------+--------------------+

// Example No.2
P01id_Left       | P01id_Right
+----------------+--------------------+
|                |   Data             |
| Utility 00     |   Visualization    |
|                |--------------------|
|                |                    |
|                |                    |
|----------------|                    |
| Utility 01     |   Utility 02       |
|                |                    |
|                |                    |
+----------------+--------------------+

// Example No.3
P01id_Left   | P01id_Left
+------------+------------------------+
|            |       Data             |
| Utility 00 |       Visualization    |
|            |------------------------|
|            |                        |
|            |                        |
|------------|                        |
| Utility 01 |       Utility 02       |
|            |                        |
|            |                        |
+------------+------------------------+

*/

// React
import { useState , useEffect } from 'react';

// Components
import C_Panel from './Coms/C_Panel'

// Type

// CSS
import './index.css'

// Utility
import _ from 'lodash';

const P01_Panel = (
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
    // In this case, it initialize width of Both Panels
    const [SS_IsFirst,setSS_IsFirst]=useState<boolean>(true)

    // SS_Delta = P01id_Right.width - P01id_Resize.width
    // SS_DeltaMemory == false : Forget SS_Delta
    // SS_DeltaMemory == true  : Remember SS_Delta
    // We do this because we do not want to update SS_Delta during mouse moving event.
    const [SS_Delta,setSS_Delta]=useState<number>(0)
    const [SS_DeltaMemory,setSS_DeltaMemory]=useState<boolean>(false)

    // SS_Width = Width of Left panel
    const [SS_Width,setSS_Width]=useState<number>(400)

    // SS_InnerDown = Is Mouse Click down in let_Resize
    // SS_OuterDown = Is Mouse Click down in this components
    // SS_InnerMemory = Is Mouse Click start at let_Resize
    const [SS_InnerDown, setSS_InnerDown] = useState<boolean>(false);
    const [SS_OuterDown, setSS_OuterDown] = useState<boolean>(false);
    const [SS_InnerMemory,setSS_InnerMemory] = useState<boolean>(false);
    const [SS_Is2Panels,setSS_Is2Panels] = useState<boolean>(true)
//****************************************************************************
    useEffect(()=>{
//****************************************************************************
        // let_Resize is in between Left and Right Panels.
        let let_Resize=document.getElementById('P01id_Resize')
        
        // Left Panel
        let let_Left=document.getElementById('P01id_Left')
        // Right Panel
        let let_Right=document.getElementById('P01id_Right')  

        // Minimum Width of Both Panels
        let let_MinimumWidth=100
        if(SS_Is2Panels===true){
//****************************************************************************
        // Initialize width of Both Panels
        if(SS_IsFirst===true){
            let_Left!.setAttribute("style","width:400px");
            let_Right!.setAttribute("style", "flex: 1");
            setSS_IsFirst(false)
        }
        // Update width of Right Panel By ChatGPT
        else{
            let_Right!.setAttribute("style", "flex: 1");
        }

//****************************************************************************
        // Setting Minimum Width of P01id_Left and P01id_Right
        if(let_Left!.offsetWidth<let_MinimumWidth || let_Right!.offsetWidth<let_MinimumWidth){
            let let_LW:number
            let let_RW:number
            if(let_Left!.offsetWidth<let_Right!.offsetWidth){
                let_LW=let_MinimumWidth
                let_RW=let_Right!.offsetWidth
            }
            else {
                let_LW=let_Left!.offsetWidth
                let_RW=let_MinimumWidth
            }
            let_Left!.setAttribute("style" ,"width:"+let_LW.toString()+'px');
            let_Right!.setAttribute("style","width:"+let_RW.toString()+'px');
            setSS_DeltaMemory(false)
            setSS_InnerDown(false)
            setSS_OuterDown(false)
        }

//****************************************************************************
        // Update Width of Left Panel
        if(SS_InnerMemory){
            if(SS_Width<let_MinimumWidth){
                let_Left!.setAttribute("style","width:"+let_MinimumWidth.toString()+"px");
            }
            else{
                let_Left!.setAttribute("style","width:"+SS_Width.toString()+"px");
            }
        }
        else{
            setSS_DeltaMemory(false)
        }
        }
//****************************************************************************
    },[SS_Width,SS_InnerDown,SS_OuterDown]
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
        let let_X:number = e.clientX;
        if(SS_DeltaMemory===false){
            let let_LeftWidth:number=document.getElementById('P01id_Left')!.offsetWidth
            setSS_Delta(let_X-let_LeftWidth)
            setSS_DeltaMemory(true)
        }
        setSS_Width(let_X-SS_Delta)
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

return(

<div id='P01id_Div'
    onMouseDown={f_OuterDown} 
    onMouseUp={f_OuterUp}
    onMouseMove={f_MouseMove}
    onMouseLeave={f_OuterLeave}
    >

<div id='P01id_Left' 
    >
<C_Panel Name={'Left'}/>
{
// <h1>SS_Delta: {SS_Delta}</h1>
// <h1>SS_Width: {SS_Width}</h1>
// <h1>SS_InnerDown: {SS_InnerDown.toString()}</h1>
// <h1>SS_OuterDown: {SS_OuterDown.toString()}</h1>
// <h1>SS_InnerMemory: {SS_InnerMemory.toString()}</h1>
}

</div>

<div id='P01id_Resize' 
    onMouseDown ={f_InnerDown}
    onMouseUp   ={f_InnerUp}
    onMouseLeave={f_InnerLeave}
    >
</div>

<div id='P01id_Right'>
<C_Panel Name={'Right'}/>
</div>

</div>
)
}

export default P01_Panel