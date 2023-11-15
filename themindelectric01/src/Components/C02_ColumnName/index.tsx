// React
import { useState } from 'react';

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
}:{
// TYPE
// PERPERTY
// HOOK
SS_Columns:TS_ColumnName[],
setSS_Columns:(S:TS_ColumnName[])=>void
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    // Reset Column List after Update Column List (Create, Rename, Delete, Filter and Sort)
    const [SS_Reset, setSS_Reset] = useState<number>(1);
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs

    // SS_Filter filter Column by Search Name
    const [SS_Filter,setSS_Filter]=useState<string>('');

//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    let ss_Columns:TS_ColumnName[]=[...SS_Columns]

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
    let let_FilterColumns:TS_ColumnName[] = (SS_Columns.filter(Column=>
        Column.IsVisible===true
        // https://react.dev/learn/rendering-lists
    ));
    let JSX_Columns:JSX.Element[] = let_FilterColumns.map(
        (Column) => 
            <div key={Column.Key}>
            <C_DefineColumn
                // Property
                ThisColumn={Column}
                // Set State Hook
                setSS_Reset={setSS_Reset}
                SS_Columns={SS_Columns}
                setSS_Columns={setSS_Columns}
            />
            </div>
            );
    // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
    // https://react.dev/learn/rendering-lists#where-to-get-your-key
    // https://stackoverflow.com/questions/72217570/insert-counter-in-a-reactjs-map

//****************************************************************************
// JSX_01: Indicate the structure of let_FilterColumn and SS_Column
//****************************************************************************
    const JSX_Indicator:JSX.Element = <>
<h1>Indicator</h1>
<h3>SS_Column Length: {SS_Columns.length}</h3>
<h3>SS_Filter: {SS_Filter}</h3>
<h3>let_FilterColumn Type: {
    JSON.stringify(let_FilterColumns)
    // https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
}</h3>
<h3>let_FilterColumn Length: {
    let_FilterColumns.length}</h3>
<h3>let_FilterColumn: {
    let_FilterColumns.constructor.toString()
    // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
}</h3>
<hr/>
</>
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<>
<div id='C02id_Div'>
{
// Create New Column in Column List
}
<C_CreateColumn 
    SS_Columns={SS_Columns} 
    setSS_Columns={setSS_Columns}
    setSS_Reset={setSS_Reset}
/>
<hr/>
{
// Filter and Sort Column List
}
<R_FilterColumn 
    setSS_Filter={setSS_Filter} 
    setSS_Reset={setSS_Reset}
    SS_Columns={SS_Columns}
    setSS_Columns={setSS_Columns}
/>
<hr/>
{
// Select All Column
}
<R_SelectAll
    SS_Filter={SS_Filter}
    SS_Columns={SS_Columns}
    setSS_Columns={setSS_Columns}
    setSS_Reset={setSS_Reset}
/>
<hr/>
{
// JSX_Column = List of all visible column
// SS_Reset only reset {JSX_Column}
}
<div key={SS_Reset} id='C02id_ScrollColumnName'>
{JSX_Columns}
</div>

<hr/>
</div>
</>
)
}
//****************************************************************************
export default C02_ColumnName