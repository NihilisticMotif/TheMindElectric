// React
import { useState, useEffect } from 'react';

// Components
import R_FilterColumn from './Coms/R_FilterColumn';
import C_CreateColumn from './Coms/C_CreateColumn';
import R_SelectAll from './Coms/R_SelectAll';
import C_DefineColumn from './Coms/C_DefineColumn'
// Type
import TS_ColumnName from '../T02_ColumnName/An_Index';

// CSS
import './index.css';

const C02_ColumnName = (
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
setSS_IndexColumns:(S:number[])=>void
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    // SS_Filter filter Column by Search Name
    const [SS_Filter,setSS_Filter]=useState<string>('');
    
    // Copy SS_Column usinf useState, because I want to rememder the index of each object inside SS_Columns of C01_Table.
    const [SS_PrivateColumns,setSS_PrivateColumns]=useState<TS_ColumnName[]>(SS_Columns)

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
        //alert(JSON.stringify(SS_PrivateColumn))
        }
        ,[SS_Columns,SS_IndexColumns])

//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    let ss_Columns:TS_ColumnName[]=[...SS_PrivateColumns]

    // Every columns that satisfy 1 of 3 conditions will IsVisible = true and appear in C02_Column
    //
    // 1. Consist of SS_Filter in their name
    //
    // 2. Created (C_CreateColumn: [f_CreateColumn]) as the New Column 
    // before being update (R_FilterColumn.js: [f_Filter, f_SortD])
    //
    // 3. Renamed (C_DefineColumn: [f_Rename]) Column 
    // before being update (R_FilterColumn.js: [f_Filter, f_SortD])
    //
    // Filter Every Column the satisfy the condition
    for(let i:number=0;i<ss_Columns.length;i++){
        if(ss_Columns[i].Name.includes(SS_Filter)===true || ss_Columns[i].IsVisible===true){
            ss_Columns[i].IsVisible=true
        }
        else{ss_Columns[i].IsVisible=false}
    }
    let let_FilterColumns:TS_ColumnName[] = (ss_Columns.filter(Column=>
        Column.IsVisible===true
        // https://react.dev/learn/rendering-lists
    ));

    let JSX_Columns:JSX.Element[] = let_FilterColumns.map(
        (Column) => <div key={Column.Key}>
            <C_DefineColumn
                // Property
                ThisColumn={Column}
                // Set State Hook
                SS_IndexColumns={SS_IndexColumns}
                setSS_IndexColumns={setSS_IndexColumns}
                SS_Columns={SS_Columns}
                setSS_Columns={setSS_Columns}
            />
            </div>)
    // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
    // https://react.dev/learn/rendering-lists#where-to-get-your-key
    // https://stackoverflow.com/questions/72217570/insert-counter-in-a-reactjs-map

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<div id='C02id_Div' >
<h3>C02_ColumnName</h3>
{
// Create New Column in Column List
}
<C_CreateColumn 
    SS_Columns={SS_Columns} 
    setSS_Columns={setSS_Columns}
    SS_IndexColumns={SS_IndexColumns}
    setSS_IndexColumns={setSS_IndexColumns}
/>
<hr/>
{
// Filter and Sort Column List
}
<R_FilterColumn 
    setSS_Filter={setSS_Filter} 
    SS_Columns={SS_Columns}
    setSS_Columns={setSS_Columns}
    setSS_IndexColumns={setSS_IndexColumns}
/>
<hr/>
{
// Select All Column
// Delete some columns
}
<R_SelectAll
    SS_Filter={SS_Filter}
    SS_Columns={SS_Columns}
    setSS_Columns={setSS_Columns}
    setSS_IndexColumns={setSS_IndexColumns}
/>
<hr/>
{
// JSX_Column = List of all visible column
// SS_Reset only reset {JSX_Column}
}
<div id='C02id_ScrollColumnName'>
<div >
{JSX_Columns}
</div>
</div>

<hr/>
</div>

)
}
//****************************************************************************
export default C02_ColumnName