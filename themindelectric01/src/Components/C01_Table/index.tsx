// React
import { useState , useEffect, useRef } from 'react';
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
SS_Columns,
setSS_Columns,
SS_IndexColumns,
setSS_IndexColumns
}:{
// TYPE
// PERPERTY
// HOOK
SS_Columns:TS_ColumnName[],
setSS_Columns:(S:TS_ColumnName[])=>void,
SS_IndexColumns:number[],
setSS_IndexColumns:(S:number[])=>void,
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
    const [SS_PrivateReset,setSS_PrivateReset]=useState<boolean>(true)
    // SS_PrivateColumns only updated onces in useEffect.
    // It determine the order of SS_Columns
    
    useEffect(()=>{
        // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
        let ss_IndexColumn:number[]=[...SS_IndexColumns]
        let ss_PrivateColumn:TS_ColumnName[]=[...SS_Columns]
        // By ChatGPT
        ss_PrivateColumn.sort((a, b) => {
            return ss_IndexColumn.indexOf(a.Key) - ss_IndexColumn.indexOf(b.Key);
        });
        setSS_PrivateColumns(()=>ss_PrivateColumn)
        setSS_PrivateReset(false)
        }
        ,[SS_Columns,SS_IndexColumns,SS_PrivateReset])

//****************************************************************************
// FUNCTION_01: Drag and Drop Column
//****************************************************************************
    // https://youtu.be/_nZCvxJOPwU?si=ixJXOlrb40z19L2p
    function f_Drag():void{
        let ss_IndexColumns:number[]=SS_IndexColumns
        const let_DragColumnCurrent:number=ss_IndexColumns[Ref_DragColumn.current]
        ss_IndexColumns[Ref_DragColumn.current] = ss_IndexColumns[Ref_DragOverColumn.current]
        ss_IndexColumns[Ref_DragOverColumn.current] = let_DragColumnCurrent
        setSS_IndexColumns(ss_IndexColumns)
        setSS_PrivateReset(true)
    }

//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    const let_Columns:TS_ColumnName[] = ([...SS_PrivateColumns].filter(Column=>
        Column.IsSelect===true
        // https://react.dev/learn/rendering-lists
    ));

    const JSX_TH_Columns:JSX.Element[] = let_Columns.map((Column,index) => 
        {
        // https://stackoverflow.com/questions/44969877/if-condition-inside-of-map-react
        // Default Mode
        if (Column.Display===undefined || Column.Display===0)
        {return <th
            draggable
            onDragStart={()=>{Ref_DragColumn.current=index}}
            onDragEnter={()=>{Ref_DragOverColumn.current=index}}
            onDragEnd={()=>f_Drag()}
            onDragOver={(e)=>e.preventDefault()}
        >{Column.Name}</th>}
        // Rename
        else if (Column.Display===1){
            return <th><input type='text' className='C01id' id={'C01id_Rename'+Column.Key.toString()}></input></th>
        }
        // Delete Warning
        else if (Column.Display===2){
            return  <th >
                    <p className='C01id_P'>Do you want to delete</p> 
                    <p className='C01id_P'>{Column.Name}</p> 
                    </th>
        }
        // Unselect Warning
        else{
            return  <th >
                    <p className='C01id_P'>Do you want to unselect</p> 
                    <p className='C01id_P'>{Column.Name}</p> 
                    </th>
        }
        }
        );
    
    const JSX_BUTTON_Columns:JSX.Element[] = let_Columns.map((Column)=>
        <td>
        <C_DefineColumnButton
            ThisColumn={Column}
            SS_IndexColumns={SS_IndexColumns}
            setSS_IndexColumns={setSS_IndexColumns}
            SS_Columns={SS_Columns}
            setSS_Columns={setSS_Columns}
        />
        </td>
        );
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<div id='C01id_Div'>
<h3>C01_Table</h3>
<U_DefineTableHeader
// f_DSort is used for sort SS_Column in Alphabet order
// We want to access SS_Columns.Name,
// so that we can calculate valid SS_IndexColumns
    SS_Columns    = {SS_Columns}
    setSS_IndexColumns = {setSS_IndexColumns}
/>
<div id='C01id_DivTable'>
<table id='C01id_Table'>
<tr>
    <th>Row Index</th>
    {JSX_TH_Columns}
    <th>Create new column as</th>
</tr>
<tr>
    <td><button>...</button></td>
    {JSX_BUTTON_Columns}
    <C_CreateColumn
// When create new columns
// SS_Column has to be updated
// and we have to calculate the order of new column.
        SS_Columns={SS_Columns}
        setSS_Columns={setSS_Columns}
        SS_IndexColumns={SS_IndexColumns}
        setSS_IndexColumns={setSS_IndexColumns}
    />
</tr>
</table>
</div>

</div>
    )
}

export default C01_Table