// React
import { useState } from "react"

// Components
 

// Type
import TS_ColumnName from '../../T02_ColumnName/An_Index';
import { U_IsSelect } from "../../T02_ColumnName/U_IsSelect";

// CSS

const R_SelectAll = (
//****************************************************************************
// INPUT
//****************************************************************************
    // PARAMETER
{
    // PROPERTY
    SS_Filter,
    // HOOK
    SS_Columns,
    setSS_Columns,    
    setSS_IndexColumns, // Only use with Delete     
}:{ // TYPE

    // PROPERTY
    SS_Filter:string,
    // HOOK
    SS_Columns:TS_ColumnName[],
    setSS_Columns:(S:TS_ColumnName[])=>void,
    setSS_IndexColumns:(S:number[])=>void,
}
)=>{
//****************************************************************************
// HOOK
//****************************************************************************
    // IsDefaul = true => Show Default Mode
    // IsDefaul = false => Show Delete Warning Mode
    const [SS_IsDefault,setSS_IsDefault]= useState<boolean>(true)

    // SS_IsDeleteSelect = true => Will Delete all the SS_Columns.filter(Column=>Column.IsSelect === true)
    // SS_IsDeleteSelect = false => Will Delete all the SS_Columns.filter(Column=>Column.IsSelect === false)
    const [SS_IsDeleteSelect,setSS_IsDeleteSelect]=useState<boolean>(true)

//****************************************************************************
// FUNCTION_00: Reset and Update
//****************************************************************************
    function f_Update(ss_Columns:TS_ColumnName[]):void{
        setSS_Columns(ss_Columns);
    }

//****************************************************************************
// FUNCTION_01: Select All Columns
//****************************************************************************
    function f_SelectAll():void{
        let ss_Columns:TS_ColumnName[]= [...SS_Columns];
        let let_UpdateColumns:TS_ColumnName[]=U_IsSelect(ss_Columns,true)
        f_Update(let_UpdateColumns);
    }
//****************************************************************************
// FUNCTION_02: Select All Filtered Columns
//****************************************************************************
    function f_SelectAllFilter():void{
        let ss_Columns:TS_ColumnName[]= [...SS_Columns];
        let let_UpdateColumns:TS_ColumnName[]=U_IsSelect(ss_Columns,true,SS_Filter)
        f_Update(let_UpdateColumns);
    }
//****************************************************************************
// FUNCTION_03: Un Select AllColumns
//****************************************************************************
    function f_UnSelectAll():void{
        let ss_Columns:TS_ColumnName[]= [...SS_Columns];
        let let_UpdateColumns:TS_ColumnName[]=U_IsSelect(ss_Columns,false)
        f_Update(let_UpdateColumns);
    }

//****************************************************************************
// FUNCTION_04: Delete Columns
//****************************************************************************
    function f_DeleteSelect(IsSelect:boolean):void{
        let ss_Columns:TS_ColumnName[]= [...SS_Columns];
        let let_UpdateColumns:TS_ColumnName[]=[]
        let let_UpdateIndex:number[]=[]
        for(let i:number=0;i<ss_Columns.length;i++){
            if(ss_Columns[i].IsSelect!==IsSelect){
                let_UpdateColumns.push(ss_Columns[i])
                let_UpdateIndex.push(ss_Columns[i].Key)
            }
        }
        setSS_Columns(let_UpdateColumns);
        setSS_IndexColumns(let_UpdateIndex);
        
        // Reset the State of this function
        setSS_IsDefault(true)
        setSS_IsDeleteSelect(true)
    }
//****************************************************************************
// FUNCTION_05: Delete Columns Warning
//****************************************************************************
    function f_OpenDeleteSelect(IsSelect:boolean):void{
        // Open Delete Warning Page
        setSS_IsDefault(false)
        setSS_IsDeleteSelect(IsSelect)
    }
//****************************************************************************
// FUNCTION_06: Delete Columns Warning
//****************************************************************************
    function f_Cancel():void{
        // Open Default Page
        setSS_IsDefault(true)
    }

//****************************************************************************
// JAX_00:
//****************************************************************************
    let JSX_Buttons:JSX.Element;
    let ss_Columns:TS_ColumnName[]=[...SS_Columns]
    let let_CountColumn:number=0
    for(let i:number=0;i<ss_Columns.length;i++){
        if(ss_Columns[i].IsSelect===true){let_CountColumn+=1}
    }
    // Default Display
    if(SS_IsDefault===true){
        JSX_Buttons=<>
        {
        // https://stackoverflow.com/questions/1065435/can-a-css-class-inherit-one-or-more-other-classes
        }
        <h1 className='C02id'>{let_CountColumn} out of {ss_Columns.length} Columns</h1>
        <div className='C02id_DivSelect'>
        <button className='C02id_Select' onClick={f_UnSelectAll}>Unselect All Columns</button>
        <button className='C02id_Select' onClick={f_SelectAll}>Select All Columns</button>
        <button className='C02id_Select' onClick={f_SelectAllFilter}>Select All Filtered Columns</button>
        <button className='C02id_Select' onClick={()=>{f_OpenDeleteSelect(true)}}>Delete Select Columns</button>
        <button className='C02id_Select' onClick={()=>{f_OpenDeleteSelect(false)}}>Delete Unselect Columns</button>
        </div>
        </>}
    // Delete Warning Display
    else{
        let let_CountDelete:number=0
        if(SS_IsDeleteSelect===true){
            let_CountDelete=let_CountColumn
        }else{
            let_CountDelete=ss_Columns.length-let_CountColumn
        }
        JSX_Buttons=<div className='C02id'>
        <td><h1 className='C02id'>Are you sure you want to delete {let_CountDelete} out of {ss_Columns.length} Columns from {"Table00"}</h1></td>
        <div className='C02id'>
        <td><button className='C02id' onClick={()=>{f_DeleteSelect(SS_IsDeleteSelect)}}>OK</button></td>
        <td><button className='C02id' onClick={f_Cancel}>Cancel</button></td>
        </div>
        </div>
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
    return(<>
{JSX_Buttons}
</>
)}

export default R_SelectAll