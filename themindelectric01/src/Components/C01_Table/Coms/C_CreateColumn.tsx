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
    SS_Columns,       // from ../index.js, Update Columns
    setSS_Columns,    // from ../index.js, Update Columns
    setSS_Reset      // from ../index.js, Reset after update Column
}:
{   // TYPE
    // HOOK: setState()
    SS_Columns       :TS_ColumnName[],
    setSS_Columns    :(S:TS_ColumnName[])=>void,
    setSS_Reset      :(S:number)=>void
    // https://stackoverflow.com/questions/60130319/react-typescript-how-to-setstate
}
) => {
//****************************************************************************
// FUNCTION_00:
//****************************************************************************
    function f_CreateColumn():void{
        // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
        let let_NewName:string=(document.getElementById('C01id_CreateNewColumn') as HTMLInputElement).value.toString();
        let ss_Columns:TS_ColumnName[]=[... SS_Columns]
        let let_UpdateColumns:TS_ColumnName[]=C_CreateColumnName(ss_Columns,let_NewName,true,false)
        setSS_Columns(let_UpdateColumns)
        setSS_Reset(Math.random())
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