// React

// Components

// Type
import TS_ColumnName from '../../T02_ColumnName/An_Index';
import {U_RenameColumnName} from '../../T02_ColumnName/U_RenameColumnName'
import {D_DeleteColumnName} from '../../T02_ColumnName/D_DeleteColumnName'
import {U_UpdateDisplay} from '../../T02_ColumnName/U_UpdateDisplay'
import { U_IsSelect } from '../../T02_ColumnName/U_IsSelect';
// CSS

//****************************************************************************

// Define what is Column
const C_DefineColumnButton = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // PROPERTY
    ThisColumn,
    // HOOK: setState()
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    SS_Columns,         // from ../index.js, f_Rename, f_Delete | List of All Column that IsVisible !== undefined
    setSS_Columns,      // from ../index.js, f_Rename, f_Delete | Update SS_Column
    setSS_Reset,        // from ../index.js, f_Rename, f_Delete | Reset and Update Page
}:{
    // TYPE
    // PROPERTY
    ThisColumn:TS_ColumnName,

    // HOOK: setState()
    SS_Columns:TS_ColumnName[],
    setSS_Columns:(S:TS_ColumnName[])=>void,
    setSS_Reset:(S:number       )=>void,
}) => 
{

//****************************************************************************
// HOOK
//****************************************************************************

    // Set Mode of this component for Rename and/or Delete itself
    //      0|  // Default JSX Column | f_Cancel     => let_DefaultDisplay(0) => Open Default JSX Column
    //      1|  // Rename JSX Column  | f_OpenRename => let_DefaultDisplay(1) => Open Rename JSX Column 
    //      2|  // Delete JSX Column  | f_OpenDelete => let_DefaultDisplay(2) => Open Delete JSX Column 
    //      3   // UnSelect
    let let_DefaultDisplay:0|1|2|3
    if(ThisColumn.Display===undefined){
        let_DefaultDisplay=0
    }else{
        let_DefaultDisplay=ThisColumn.Display
    }

//****************************************************************************
// FUNCTION_00: Change Mode of C_DefineColumn Components for Rename and Delete 
//****************************************************************************
    function f_Display(
            D:0|1|2|3,
            s_Columns:TS_ColumnName[],
            setS_Columns:(S:TS_ColumnName[])=>void):void{
        let let_UpdateColumns:TS_ColumnName[]=U_UpdateDisplay(ThisColumn,s_Columns,D)
        setS_Columns(let_UpdateColumns)    
    }

    function f_UpdateDisplay(D:0|1|2|3){
        let ss_Columns:TS_ColumnName[]=[...SS_Columns]
        f_Display(D,ss_Columns,setSS_Columns)
        setSS_Reset(Math.random())
    }

    function f_Cancel():void{
        f_UpdateDisplay(0)
        setSS_Reset(Math.random())
    }

//****************************************************************************
// FUNCTION_01: Rename Column
//****************************************************************************
    const C01id_Rename:string='C01id_Rename'+ThisColumn.Key.toString()
    function f_OpenRename():void{
        f_UpdateDisplay(1)
    }
    function f_Rename():void{
        let let_NewName:string= (document.getElementById(C01id_Rename)as HTMLInputElement).value 
        let ss_Columns:TS_ColumnName[]=[...SS_Columns]
        let let_UpdateColumns:TS_ColumnName[]=U_RenameColumnName(ThisColumn,ss_Columns,let_NewName)
        setSS_Columns(let_UpdateColumns);
        setSS_Reset(Math.random())
        // https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
    }

//****************************************************************************
// FUNCTION_02: Delete Column
//****************************************************************************
    function f_OpenDelete():void{
        f_UpdateDisplay(2)
    }
    function f_Delete():void{
        // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
        let ss_Columns = [...SS_Columns];
        let let_UpdateColumns=D_DeleteColumnName(ThisColumn,ss_Columns)
        setSS_Columns(let_UpdateColumns);
        setSS_Reset(Math.random())
    }

//****************************************************************************
// FUNCTION_03: Unselect Column
//****************************************************************************
    const C02id_CheckButton:string = 'C01id_CheckButton'+ThisColumn.Key.toString()
    function f_OpenUnselect():void{
        f_UpdateDisplay(3)
    }

    function f_UnSelect():void{
        // https://react.dev/learn/responding-to-events#preventing-default-behavior
        // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
        let ss_Columns:TS_ColumnName[]= [...SS_Columns];
        let let_UpdateColumn:TS_ColumnName[]=U_IsSelect(ss_Columns,false,undefined,ThisColumn)
        setSS_Columns(let_UpdateColumn);
        setSS_Reset(Math.random())
        // https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
    }

//****************************************************************************
// JSX_00: JSX_Column (Button)
//****************************************************************************
    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Column:JSX.Element=<h1></h1>
    // Default Column JSX
    if (let_DefaultDisplay===0){
    JSX_Column=
<>
<button className={'C01id'} onClick={f_OpenUnselect} id={C02id_CheckButton} style={{backgroundColor: "white"}}>X</button>
<button className={'C01id'} onClick={f_OpenRename}>Rename</button>
<button className={'C01id'} onClick={f_OpenDelete}>Delete</button>
<button className={'C01id'} onClick={f_OpenSetting}>...</button>
</>
    }else if (let_DefaultDisplay===1){
        JSX_Column=
<>
<button className={'C01id'} onClick={f_Rename}>OK</button>
<button className={'C01id'} onClick={f_Cancel}>Cancel</button>
</>
    // Delete Column JSX
    }else if (let_DefaultDisplay===2){
        JSX_Column=
<>
<button className={'C01id'} onClick={f_Delete}>OK</button>
<button className={'C01id'} onClick={f_Cancel}>Cancel</button>
</>
    // Unselect Column JSX
    }else if (let_DefaultDisplay===3){
        JSX_Column=
<>
<button className={'C01id'} onClick={f_UnSelect}>OK</button>
<button className={'C01id'} onClick={f_Cancel}>Cancel</button>
</>
    }

//****************************************************************************
// FUNCTION_02: Utility, Will Develop Later
//****************************************************************************
    function f_OpenSetting():void{
        let ss_Columns:TS_ColumnName[] = [...SS_Columns];
        //alert(JSON.stringify(list))
        alert(ss_Columns.length)
        // https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string

        // * [C]: Create Copy Column
        // * [R]: Filter Data
        // * [R]: Inspect Column
        // * [R]: Data Visualization with Filter Condition
        // * [U]: Transform Column
        // * [U]: Replace Data
        // * [U]: Delete Data with Filter Condition
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<div 
    className={'C01id'} 
    key={ThisColumn.Key} 
>
{JSX_Column}
</div>
)
}
//****************************************************************************
export default C_DefineColumnButton