// React

// Components

// Type
import TS_ColumnName from '../../T02_ColumnName/An_Index';
import {C_CreateColumnName} from '../../T02_ColumnName/C_CreateColumnName';

// CSS

//****************************************************************************

// Create New Column
const C_CreateColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_IndexColumns,    // Only used in f_Delete
    setSS_IndexColumns,
    SS_Columns,       // from ../index.js, Update Columns
    setSS_Columns,    // from ../index.js, Update Columns
}:
{   // TYPE
    // HOOK: setState()
    SS_IndexColumns:number[],
    setSS_IndexColumns:(S:number[])=>void,
    SS_Columns       :TS_ColumnName[],
    setSS_Columns    :(S:TS_ColumnName[])=>void,
    // https://stackoverflow.com/questions/60130319/react-typescript-how-to-setstate
}
) => 
{
//****************************************************************************
// FUNCTION_00:
//****************************************************************************
    function f_CreateColumn():void{
        // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
        
        // Calculate the new SS_Column
        let let_NewName:string=(document.getElementById('C02id_CreateNewColumn') as HTMLInputElement).value.toString();
        let ss_Columns:TS_ColumnName[]=[... SS_Columns]
        let let_UpdateColumns:TS_ColumnName[]=C_CreateColumnName(ss_Columns,let_NewName,false)
        
        // Calculate the order of SS_Column inside of C01_Table
        let ss_IndexColumns:number[]=[...SS_IndexColumns]
        let let_UpdateIndexColumns:number[]=[let_UpdateColumns[0].Key,...ss_IndexColumns]
        
        setSS_IndexColumns(let_UpdateIndexColumns)
        setSS_Columns(let_UpdateColumns)
    }
//****************************************************************************
//OUTPUT
//****************************************************************************
    return (
<div className='C02id'>
<td><h1 className='C02id'>Add Column:</h1></td>
<td><input className='C02id' type ="text" id='C02id_CreateNewColumn'></input></td>
<td><button className='C02id' onClick={f_CreateColumn}>OK</button></td>
</div>
)
}

//****************************************************************************
export default C_CreateColumn