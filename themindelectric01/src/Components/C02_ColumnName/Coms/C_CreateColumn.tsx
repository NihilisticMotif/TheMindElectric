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
) => 
{
//****************************************************************************
// FUNCTION_00:
//****************************************************************************
    function f_CreateColumn():void{
        // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
        let let_NewName:string=(document.getElementById('C02id_CreateNewColumn') as HTMLInputElement).value.toString();
        let ss_Columns:TS_ColumnName[]=[... SS_Columns]
        let let_UpdateColumns:TS_ColumnName[]=C_CreateColumnName(ss_Columns,let_NewName)
        setSS_Columns(let_UpdateColumns)
        setSS_Reset(Math.random())
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