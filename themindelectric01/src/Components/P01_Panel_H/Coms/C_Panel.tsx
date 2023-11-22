// React
import { useState , useEffect } from 'react';

// Components
import C_PanelHeader from './C_PanelHeader'

// Type

// CSS
import './C_Panel.css'

// Utility


const C_Panel = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
IsUp,
RandomKey,
// HOOK
setSS_Is2Panels2
}:{
// TYPE
// PERPERTY
IsUp:boolean;
RandomKey?:number;
// HOOK
setSS_Is2Panels2?:(S:boolean)=>void
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    // In this case, it initialize width of Both Panels
    const [SS_IsFirst,setSS_IsFirst]=useState<boolean>(true)

    // SS_Delta = P01id_Right.width - P01id_CResize.width
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

    const [SS_Is2Panels,setSS_Is2Panels]=useState<boolean>(true)
    const [SS_Is2PanelsTO,setSS_Is2PanelsTO]=useState<boolean>(true)

    let let_Name:string
    if(IsUp===true){
        let_Name='Up'
    }else{
        let_Name='Down'
    }
    let P01id_CPanel:string = 'P01id_CPanel'+let_Name
    let P01id_Left:string = 'P01id_Left'+let_Name
    let P01id_CResize:string='P01id_CResize'+let_Name
    let P01id_Right:string = 'P01id_Right'+let_Name
    let let_Key:number
    if(typeof RandomKey==='undefined'){
        let_Key=Math.random()
    }else{
        let_Key=RandomKey
    }
    let JSX_LeftHeader =<C_PanelHeader
            Key={P01id_CPanel+let_Key+'L'}
            LoverKey={P01id_CPanel+let_Key+'R'}
            Name={P01id_Left}
            ResizeName={P01id_CResize}
            setSS_IsFirst={setSS_IsFirst}
            SS_Is2Panels={SS_Is2Panels}
            setSS_Is2Panels={setSS_Is2Panels}
            IsUp={IsUp}
            setSS_Is2PanelsTO={setSS_Is2PanelsTO}
            />

    let JSX_RightHeader=<C_PanelHeader
            Key={P01id_CPanel+let_Key+'R'}
            LoverKey={P01id_CPanel+let_Key+'L'}
            Name={P01id_Right}
            ResizeName={P01id_CResize}
            setSS_IsFirst={setSS_IsFirst}
            SS_Is2Panels={SS_Is2Panels}
            setSS_Is2Panels={setSS_Is2Panels}
            IsUp={IsUp}
            setSS_Is2PanelsTO={setSS_Is2PanelsTO}
            />
    
//****************************************************************************
    useEffect(()=>{
//****************************************************************************
        // Left Panel
        let let_Left=document.getElementById(P01id_Left)
        // Right Panel
        let let_Right=document.getElementById(P01id_Right)  

        // Minimum Width of Both Panels
        let let_MinimumWidth=100

        if(let_Left!.offsetWidth===0){
            let_Right!.setAttribute("style", "width:100%");
        }
        if(let_Right!.offsetWidth===0){
            let_Left!.setAttribute("style", "width:100%");
        }
//****************************************************************************
        // Close Down Panel (Keyboard)
        if(typeof setSS_Is2Panels2 !== 'undefined'&& SS_Is2PanelsTO===false){
            setSS_Is2Panels2(false)
        }
//****************************************************************************
        // In case there are 2 sub panels
        if(SS_Is2Panels===true){
//****************************************************************************
        // Initialize width of Both Panels
        if(SS_IsFirst===true){
            // let_Left!.setAttribute("style","visibility: visible")
            // let_Right!.setAttribute("style","visibility:visible")
            let_Left!.setAttribute("style","flex:1");
            let_Right!.setAttribute("style", "flex: 1");
            setSS_IsFirst(false)
        }
        // Update width of Right Panel By ChatGPT
        else{
            let_Right!.setAttribute("style", "flex: 1");
        }

//****************************************************************************
        // Setting Minimum Width of P01id_Left and P01id_Right
        if((let_Left!.offsetWidth<let_MinimumWidth || let_Right!.offsetWidth<let_MinimumWidth)){
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
//****************************************************************************
    }
},[SS_Width,SS_InnerDown,SS_OuterDown,SS_Is2Panels,SS_Is2PanelsTO]
    )
//****************************************************************************

//****************************************************************************
// FUNCTION_00: Detect Mouse Click in P01id_CResize
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
// FUNCTION_01: Detect Mouse Click outside P01id_CResize
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
            let let_LeftWidth:number=document.getElementById(P01id_Left)!.offsetWidth
            setSS_Delta(let_X-let_LeftWidth)
            setSS_DeltaMemory(true)
        }
        setSS_Width(let_X-SS_Delta)
    };

//****************************************************************************
// FUNCTION_03: Detect Mouse Move outside of P01id_CResize
//****************************************************************************
    function f_InnerLeave():void{
        if(SS_InnerMemory===false){
            setSS_InnerDown(false)
        }
    }

//****************************************************************************
// FUNCTION_04: Detect Mouse Move outside of P01id_CPanel
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
<div className='P01id_CPanel' id={P01id_CPanel}
    onMouseDown={f_OuterDown} 
    onMouseUp={f_OuterUp}
    onMouseMove={f_MouseMove}
    onMouseLeave={f_OuterLeave}
    >

<div className='P01id_Left' id={P01id_Left} 
    >
{
JSX_LeftHeader
}

</div>

<div className='P01id_CResize' id={P01id_CResize} 
    onMouseDown ={f_InnerDown}
    onMouseUp   ={f_InnerUp}
    onMouseLeave={f_InnerLeave}
    >
</div>

<div className='P01id_Right' id={P01id_Right}>
{
JSX_RightHeader
}
</div>
</div>
)
}
export default C_Panel