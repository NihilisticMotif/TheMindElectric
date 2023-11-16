// React
import { useState , useRef } from 'react';
// Components
import C_DefineColumnButton from './Coms/C_DefineColumnButton'
import U_DefineTableHeader from './Coms/U_DefineTableHeader'
import C_CreateColumn from './Coms/C_CreateColumn';
// Type
import TS_ColumnName from '../T02_ColumnName/An_Index';

// CSS
import './index.css';

const C01_Table = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
setSS_Reset,
SS_Columns,
setSS_Columns,
}:{
// TYPE
// PERPERTY
// HOOK
setSS_Reset:(S:number)=>void,
SS_Columns:TS_ColumnName[],
setSS_Columns:(S:TS_ColumnName[])=>void
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    // Drag and Drop Columns
    const Ref_DragColumn = useRef<number>(0)
    const Ref_DragOverColumn = useRef<number>(0)

    // Copy SS_Column usinf useState, because I want to rememder the index of each object inside SS_Columns of C01_Table.
    const [SS_PrivateColumns,setSS_PrivateColumns]=useState<TS_ColumnName[]>(SS_Columns)
    // Reset everything in C01_Table
    const [SS_PrivateReset,setSS_PrivateReset]=useState<number>(0)

//****************************************************************************
// FUNCTION_01: Drag and Drop Column
//****************************************************************************
    // https://youtu.be/_nZCvxJOPwU?si=ixJXOlrb40z19L2p
    // Fix this line
    function f_Drag(ss_Celumns:TS_ColumnName[]):void{
        const let_DragColumnCurrent:TS_ColumnName=ss_Celumns[Ref_DragColumn.current]
        ss_Celumns[Ref_DragColumn.current] = ss_Celumns[Ref_DragOverColumn.current]
        ss_Celumns[Ref_DragOverColumn.current] = let_DragColumnCurrent
        setSS_Columns(ss_Celumns)
        setSS_Reset(Math.random())
    }

//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    const let_PrivateColumns:TS_ColumnName[] = ([...SS_PrivateColumns].filter(Column=>
        Column.IsSelect===true
        // https://react.dev/learn/rendering-lists
    ));

    const JSX_TH_Columns:JSX.Element[] = let_PrivateColumns.map((Column,index) => 
        {
        // https://stackoverflow.com/questions/44969877/if-condition-inside-of-map-react
        // Default Mode
        if (Column.Display===undefined || Column.Display===0)
        {return <th
            draggable
            onDragStart={()=>{Ref_DragColumn.current=index}}
            onDragEnter={()=>{Ref_DragOverColumn.current=index}}
            onDragEnd={()=>f_Drag(let_PrivateColumns)}
            onDragOver={(e)=>e.preventDefault()}
        >{Column.Name}</th>}
        // Rename
        else if (Column.Display===1){
            return <th><input type='text' className='C01id' id={'C01id_Rename'+Column.Key.toString()}></input></th>
        }
        // Delete Warning
        else if (Column.Display===2){
            return  <th >
                    <p style={{ whiteSpace: 'nowrap' }}>Do you want to delete {Column.Name}</p> 
                    </th>
        }
        // Unselect Warning
        else{
            return  <th >
                    <p style={{ whiteSpace: 'nowrap' }}>Do you want to unselect {Column.Name}</p> 
                    </th>
        }
        }
        );
    
    // Using SS_Columns useState hook and setSS_Reset
    const JSX_BUTTON_Columns:JSX.Element[] = let_PrivateColumns.map((Column)=>
        <td>
        <C_DefineColumnButton
            ThisColumn={Column}
            SS_Columns={SS_Columns}
            setSS_Columns={setSS_Columns}
            setSS_Reset={setSS_Reset}
        />
        </td>
        );
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<div id='C01id_Div' key={SS_PrivateReset}>

<U_DefineTableHeader
// We only use setSS_PrivateReset and SS_PrivateColumns for sorting columns.
    setSS_PrivateReset   = {setSS_PrivateReset  }
    SS_PrivateColumns    = {SS_PrivateColumns   }
    setSS_PrivateColumns = {setSS_PrivateColumns}
/>
<div id='C01id_DivTable'>
<table id='C01id_Table'  >
<tr>
    <th>Row Index</th>
    {JSX_TH_Columns}
    <th>Create new column as</th>
</tr>
<tr>
    <td><button>...</button></td>
    {JSX_BUTTON_Columns}
    <C_CreateColumn
        SS_Columns={SS_Columns}
        setSS_Columns={setSS_Columns}
        setSS_Reset={setSS_Reset}
    />
</tr>
</table>
</div>

</div>
    )
}

export default C01_Table