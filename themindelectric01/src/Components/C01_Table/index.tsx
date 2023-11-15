// React
import { useState , useRef } from 'react';
// Components
import C_DefineColumnButton from './Coms/C_DefineColumnButton'
import U_DefineTableHeader from './Coms/U_DefineTableHeader'
import C_CreateNewColumn from './Coms/C_CreateColumn';
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
setSS_Columns
}:{
// TYPE
// PERPERTY
SS_Columns:TS_ColumnName[]
setSS_Columns:(S:TS_ColumnName[])=>void
// HOOK
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_Reset,setSS_Reset]=useState<number>(1)

    // Drag and Drop Columns
    const Ref_DragColumn = useRef<number>(0)
    const Ref_DragOverColumn = useRef<number>(0)

    // Create a copy of SS_Columns for Drag and Drop
    const [SS_DragColumns,setSS_DragColumns] = useState<TS_ColumnName[]>([...SS_Columns])

//****************************************************************************
// FUNCTION_01: Drag and Drop Column
//****************************************************************************
    // https://youtu.be/_nZCvxJOPwU?si=ixJXOlrb40z19L2p
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
    const ss_Columns:TS_ColumnName[]=SS_Columns
    const let_VisibleColumn:TS_ColumnName[] = (ss_Columns.filter(Column=>
        Column.IsSelect===true
        // https://react.dev/learn/rendering-lists
    ));
    const JSX_TH_Columns:JSX.Element[] = let_VisibleColumn.map((Column,index) => 
        {
        // https://stackoverflow.com/questions/44969877/if-condition-inside-of-map-react
        if (Column.Display===undefined || Column.Display===0)
        {return <th
            draggable
            onDragStart={()=>{Ref_DragColumn.current=index}}
            onDragEnter={()=>{Ref_DragOverColumn.current=index}}
            onDragEnd={()=>f_Drag(let_VisibleColumn)}
            onDragOver={(e)=>e.preventDefault()}
        >{Column.Name}</th>}
        else if (Column.Display===1){
            return <th><input type='text' className='C01id' id={'C01id_Rename'+Column.Key.toString()}></input></th>
        }
        else{
            return  <th >
                    <p style={{ whiteSpace: 'nowrap' }}>Do you want to delete {Column.Name}</p> 
                    </th>
        }
        }
        );
    const JSX_BUTTON_Columns:JSX.Element[] = let_VisibleColumn.map((Column)=>
        <td>
        <C_DefineColumnButton
            ThisColumn={Column}
            SS_Columns={SS_Columns}
            setSS_Columns={setSS_Columns}
            setSS_Reset={setSS_Reset}
        />
        </td>
        );

    return (
<div id='C01id_Div'>
<U_DefineTableHeader
    setSS_Reset   = {setSS_Reset  }
    SS_Columns    = {SS_Columns   }
    setSS_Columns = {setSS_Columns}
/>
<div id='C01id_DivTable'>
<table id='C01id_Table' key={SS_Reset}>
<tr>
    <th>Row Index</th>
    {JSX_TH_Columns}
    <th>Create new column as</th>
</tr>
<tr>
    <td><button>...</button></td>
    {JSX_BUTTON_Columns}
    <C_CreateNewColumn
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