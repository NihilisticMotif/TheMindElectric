// React
import { useState } from 'react';

// Components

// Type
import TS_ColumnName from '../../Type/TS_ColumnName';

// CSS

//****************************************************************************

// Define what is Column
const C_DefineColumn = (
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
    setSS_Reset      // from ../index.js, f_Rename, f_Delete | Reset and Update Page
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
    const [SS_Display,setSS_Display]= useState<TS_Display>(0)

//****************************************************************************
// FUNCTION_00: Select function that will appear in C01_Table with IsSelect 
//****************************************************************************
    let JSX_SelectButton:JSX.Element
    const C02id_CheckButton:string = 'C02id_CheckButton'+ThisColumn.Key.toString()

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
        JSX_SelectButton=<td><button className='C02id' onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "red"}}>X</button></td>
    }
    else{
        JSX_SelectButton=<td><button className='C02id' onClick={f_Select} id={C02id_CheckButton} style={{backgroundColor: "white"}}>X</button></td>
    }

//****************************************************************************
// FUNCTION_01: Change Mode of C_DefineColumn Components for Rename and Delete 
//****************************************************************************
    function f_Cancel():void{setSS_Display(0)}
    const C02id_Rename:string= 'C02id_Rename'+ThisColumn.Key.toString()
    function f_OpenRename():void{setSS_Display(1)}
    function f_Rename():void{
        let let_NewName:string= (document.getElementById(C02id_Rename)as HTMLInputElement).value 
        // Check if the name is duplicate
        if(SS_Columns.map(Column=>Column.Name).includes(let_NewName)===false){
            let ss_Columns = [...SS_Columns];
            // Replace the previous name (the name with selected key) with new name
            for(let i:number=0;i<ss_Columns.length;i++){
                if(ss_Columns[i].Key===ThisColumn.Key){
                    ss_Columns.splice(i, 1,{
                    Key: ThisColumn.Key,
                    Name: let_NewName, 
                    IsSelect: ThisColumn.IsSelect,
                    IsVisible: true
                });
                }
            }
            setSS_Columns(ss_Columns);
            setSS_Reset(Math.random())
            // https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
        }
    }
    function f_OpenDelete():void{
        setSS_Display(2)
    }
    function f_Delete():void{
        // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
        let ss_Columns = [...SS_Columns];
        // Delete the column with selected key
        for(let i:number=0;i<ss_Columns.length;i++){
            if(ss_Columns[i].Key===ThisColumn.Key){
                ss_Columns.splice(i, 1);
            }
        }
        setSS_Columns(ss_Columns);
        setSS_Reset(Math.random())
    }

    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Column:JSX.Element=
<>
<div>
{JSX_SelectButton}
<td><button className='C02id' onClick={f_OpenRename}>Rename</button></td>
<td><button className='C02id' onClick={f_OpenDelete}>Delete</button></td>
<td><button className='C02id' onClick={f_OpenSetting}>...</button></td>
<td><h1 className='C02id'>{ThisColumn.Name}</h1></td>
</div>
</>
    // Default Column JSX
    if (SS_Display===0){
    // Rename Column JSX
    }else if (SS_Display===1){
        JSX_Column=
<>
<div>
<td><h1 className='C02id'>"{ThisColumn.Name}"" to </h1><input className='C02id' id={C02id_Rename}></input></td>
<td><button className='C02id' onClick={f_Rename}>OK</button></td>
<td><button className='C02id' onClick={f_Cancel}>Cancel</button></td>
</div>
</>
    // Delete Column JSX
    }else if (SS_Display===2){
        JSX_Column=
<>
<div>
<td><h1 className='C02id'>Do you sure that you want to delete "{ThisColumn.Name}"</h1></td>
<td><button className='C02id' onClick={f_Delete}>OK</button></td>
<td><button className='C02id' onClick={f_Cancel}>Cancel</button></td>
</div>
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

    function f_Inspection():void{
        alert('Index')
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<div className='C02id' key={ThisColumn.Key}>
{JSX_Column}
</div>
)
}
//****************************************************************************
export default C_DefineColumn