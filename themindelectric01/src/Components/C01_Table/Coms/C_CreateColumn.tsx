// React
//import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_ColumnName from '../../T02_ColumnName/An_Index';
import {C_CreateColumnName} from '../../T02_ColumnName/C_CreateColumnName';


const C_CreateColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_IndexColumns,    // Update the index of Column inside C01_Table
    setSS_IndexColumns, // -
    SS_Columns,         // Update Columns
    setSS_Columns,      // -
}:
{   // TYPE
    // HOOK: setState()
    SS_IndexColumns   :number[],
    setSS_IndexColumns:(S:number[])=>void,
    SS_Columns        :TS_ColumnName[],
    setSS_Columns     :(S:TS_ColumnName[])=>void,
    // https://stackoverflow.com/questions/60130319/react-typescript-how-to-setstate
}
) => {
//****************************************************************************
// FUNCTION_00:
//****************************************************************************
    function f_CreateColumn():void{
        // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
        
        // Calculate the new SS_Column
        let let_NewName:string=(document.getElementById('C01id_CreateNewColumn') as HTMLInputElement).value.toString();
        let ss_Columns:TS_ColumnName[]=[... SS_Columns]
        let let_UpdateColumns:TS_ColumnName[]=C_CreateColumnName(ss_Columns,let_NewName,true)
        
        // Calculate the order of SS_Column inside of C01_Table
        let ss_IndexColumns:number[]=[...SS_IndexColumns]
        let let_UpdateIndexColumns:number[]=[...ss_IndexColumns,let_UpdateColumns[0].Key]
        
        // Update both the SS_IndexColumns and SS_Columns
        setSS_IndexColumns(let_UpdateIndexColumns)
        setSS_Columns(let_UpdateColumns)
    }

return(
<td>
<div className={'C01id'}>
<input type='text' id='C01id_CreateNewColumn'></input>
<button className={'C01id'} onClick={f_CreateColumn}>Ok</button>
</div>
</td>
    )
}

export default C_CreateColumn