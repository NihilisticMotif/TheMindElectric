// React
import { useState } from 'react';

// Components

// Type
import TS_ColumnName from '../../T02_ColumnName/An_Index';
import {U_RenameColumnName} from '../../T02_ColumnName/U_RenameColumnName'
import {D_DeleteColumnName} from '../../T02_ColumnName/D_DeleteColumnName'
import {U_UpdateDisplay} from '../../T02_ColumnName/U_UpdateDisplay'
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
    SS_Columns,       // from ../index.js, f_Rename, f_Delete | List of All Column that IsVisible !== undefined
    setSS_Columns,    // from ../index.js, f_Rename, f_Delete | Update SS_Column
    setSS_Reset,     // from ../index.js, f_Rename, f_Delete | Reset and Update Page
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
    type TS_Display=
            0|  // Default JSX Column | f_Cancel     => setSS_Display(0) => Open Default JSX Column
            1|  // Rename JSX Column  | f_OpenRename => setSS_Display(1) => Open Rename JSX Column 
            2   // Delete JSX Column  | f_OpenDelete => setSS_Display(2) => Open Delete JSX Column 
    let let_DefaultDisplay:0|1|2
    if(ThisColumn.Display===undefined){
        let_DefaultDisplay=0
    }else{
        let_DefaultDisplay=ThisColumn.Display
    }
    const [SS_Display,setSS_Display]= useState<TS_Display>(let_DefaultDisplay)

//****************************************************************************
// FUNCTION_00: Select function that will appear in C01_Table with IsSelect 
//****************************************************************************
    let JSX_SelectButton:JSX.Element
    const C02id_CheckButton:string = 'C01id_CheckButton'+ThisColumn.Key.toString()

    function f_Select():void{
        // https://react.dev/learn/responding-to-events#preventing-default-behavior
        // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
        
        let ss_Columns:TS_ColumnName[]= [...SS_Columns];
        for(let i:number=0;i<ss_Columns.length;i++){
            if(ss_Columns[i].Key===ThisColumn.Key){
                let let_IsSelect:boolean
                if(ThisColumn.IsSelect===false){
                    let_IsSelect=true
                }
                else{
                    let_IsSelect=false
                }
                ss_Columns[i].IsSelect=let_IsSelect
            }
        }
        setSS_Columns(ss_Columns);
        setSS_Reset(Math.random())
        // https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
    }

    if(ThisColumn.IsSelect===true){
        JSX_SelectButton=<button className={'C01id'} onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "red"}}>X</button>
    }
    else{
        JSX_SelectButton=<button className={'C01id'} onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "white"}}>X</button>
    }

//****************************************************************************
// FUNCTION_01: Change Mode of C_DefineColumn Components for Rename and Delete 
//****************************************************************************
    function f_Cancel():void{
        let ss_Celumns:TS_ColumnName[]=SS_Columns
        U_UpdateDisplay(ThisColumn,ss_Celumns,0)
        setSS_Reset(Math.random())
    }
    const C01id_Rename:string='C01id_Rename'+ThisColumn.Key.toString()
    function f_OpenRename():void{
        let ss_Celumns:TS_ColumnName[]=SS_Columns
        U_UpdateDisplay(ThisColumn,ss_Celumns,1)
        setSS_Reset(Math.random())
    }
    function f_Rename():void{
        let let_NewName:string= (document.getElementById(C01id_Rename)as HTMLInputElement).value 
        let ss_Columns:TS_ColumnName[]=[...SS_Columns]
        let let_UpdateColumns:TS_ColumnName[]=U_RenameColumnName(ThisColumn,ss_Columns,let_NewName)
        setSS_Columns(let_UpdateColumns);
        setSS_Reset(Math.random())
        // https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
    }
    function f_OpenDelete():void{
        let ss_Celumns:TS_ColumnName[]=SS_Columns
        U_UpdateDisplay(ThisColumn,ss_Celumns,2)
        setSS_Reset(Math.random())
    }
    function f_Delete():void{
        // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
        let ss_Columns = [...SS_Columns];
        let let_UpdateColumns=D_DeleteColumnName(ThisColumn,ss_Columns)
        setSS_Columns(let_UpdateColumns);
        setSS_Reset(Math.random())
    }

    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Column:JSX.Element=
<>
{JSX_SelectButton}
<button className={'C01id'} onClick={f_OpenRename}>Rename</button>
<button className={'C01id'} onClick={f_OpenDelete}>Delete</button>
<button className={'C01id'} onClick={f_OpenSetting}>...</button>
</>
    // Default Column JSX
    if (SS_Display===0){
    // Rename Column JSX
    }else if (SS_Display===1){
        JSX_Column=
<>
<button className={'C01id'} onClick={f_Rename}>OK</button>
<button className={'C01id'} onClick={f_Cancel}>Cancel</button>
</>
    // Delete Column JSX
    }else if (SS_Display===2){
        JSX_Column=
<>
<button className={'C01id'} onClick={f_Delete}>OK</button>
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