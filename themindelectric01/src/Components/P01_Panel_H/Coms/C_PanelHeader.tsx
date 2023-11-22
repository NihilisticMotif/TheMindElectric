// React
//import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type

// CSS
import './C_PanelHeader.css';

const C_PanelHeader = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // PERPERTY
    Name,
    Key,
    LoverKey,
    ResizeName,
    IsUp,
    // HOOK
    setSS_IsFirst,
    SS_Is2Panels,
    setSS_Is2Panels,
    setSS_Is2PanelsTO
}:{
    // TYPE
    // PERPERTY
    Name:string
    Key:string
    LoverKey:string
    ResizeName:string
    IsUp:boolean
    // HOOK
    setSS_IsFirst:(S:boolean)=>void
    SS_Is2Panels:boolean
    setSS_Is2Panels:(S:boolean)=>void
    setSS_Is2PanelsTO:(S:boolean)=>void
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
//****************************************************************************
// FUNCTION_00: Close Button
//****************************************************************************
    function f_Close():void{
        document.getElementById(Key)!.classList.remove('P01id_CHeader');
        document.getElementById(Key)!.classList.add('P01id_None');
        let let_ID=document.getElementById(Name)
        let_ID!.setAttribute("style","width:0px")
        //let_ID!.setAttribute("style","visibility: hidden")
        let let_Resize=document.getElementById(ResizeName)
        let_Resize!.setAttribute("style","width:0px")
        setSS_Is2Panels(false)
    }
//****************************************************************************
// FUNCTION_01: Close Button No.2
//****************************************************************************
    function f_CloseKeyboard():void{
        setSS_Is2PanelsTO(false)
        document.getElementById('P01id_Down')!.classList.remove('P01id_Down');
        document.getElementById('P01id_Down')!.classList.add('P01id_None');
        document.getElementById('P01id_Resize')!.classList.remove('P01id_Resize');
        document.getElementById('P01id_Resize')!.classList.add('P01id_None');
        let let_C = document.getElementById('P01id_Panel')
        document.getElementById('P01id_Up')!.setAttribute("style","height:"+(let_C!.offsetHeight).toString()+'px')
        
        // Make Keyboard Button Exist
        document.getElementById('P01id_Keyboard')!.classList.remove('P01id_None');
        document.getElementById('P01id_Keyboard')!.classList.add('P01id_Keyboard');
    }

//****************************************************************************
// FUNCTION_02: Open Button
//****************************************************************************
    function f_Open():void{
        document.getElementById(LoverKey)!.classList.remove('P01id_None');
        document.getElementById(LoverKey)!.classList.add('P01id_CHeader');
        let let_Resize=document.getElementById(ResizeName)
        let_Resize!.setAttribute("style","width:5px")
        setSS_IsFirst(true)
        setSS_Is2Panels(true)
    }
//****************************************************************************
// JAX_00:
//****************************************************************************

    let JSX_LeftHeader =<>
            <h1>The Ruler of Everything</h1>
            <button className='P01id_Button' onClick={f_Open}>Open New Tab</button>
            </>
    
    if(IsUp===false){
        JSX_LeftHeader =<>
            <h1>The Ruler of Everything</h1>
            <button className='P01id_Button' onClick={f_CloseKeyboard}>Close</button>
            <button className='P01id_Button' onClick={f_Open}>Open New Tab</button>
            </>
    }

    if(SS_Is2Panels===true){
        JSX_LeftHeader =<>
            <h1>The Ruler of Everything</h1>
            <button className='P01id_Button' onClick={f_Close} >Close</button>
            </>
    }

return(
<div className='P01id_CHeader' id={Key}>
{JSX_LeftHeader}
</div>
    )
}

export default C_PanelHeader