// React
import { useState , useEffect} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_ColumnName from "./C02_ColumnName";

// Type
import TS_ColumnName from "./T02_ColumnName/An_Index";
// CSS
import './index.css';


const Components=()=>{
    // Reset Column List after Update Column List (Create, Rename, Delete, Filter and Sort)
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    const [SS_Reset,setSS_Reset]=useState<number>(0)
    const [SS_Columns,setSS_Columns]=useState<TS_ColumnName[]>([
        {Key: 0, Name: 'Xedni Wor'            , IsSelect: false, IsVisible: true},
        {Key: 1, Name: 'Weezer'               , IsSelect: false, IsVisible: true},
        {Key: 2, Name: 'Tally Hall'           , IsSelect: false, IsVisible: true},
        {Key: 3, Name: 'Que, The Human Editor', IsSelect: false, IsVisible: true},
        {Key: 4, Name: 'Human Centipede'      , IsSelect: false, IsVisible: true},
        ]);

//****************************************************************************
// JSX_01: Testing
//****************************************************************************
    const JSX_TestColumn:JSX.Element[] = SS_Columns.map((Column)=>
        <td>
        <div>
        <td>{Column.Name}</td>
        <td>{Column.Key}</td>
        <td>{Column.IsSelect.toString()}</td>
        <td>{Column.IsVisible}</td>
        </div>
        </td>
        );
    return(

<div id='App'>

<div id='Body' key={SS_Reset}>
<C02_ColumnName 
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
setSS_Reset={setSS_Reset}
/>
<C01_Table 
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
setSS_Reset={setSS_Reset}
key={SS_Reset}
/>
</div>
<div>
<h1>Testing (Main)</h1>
<table id='C01id_Table' key={SS_Reset}>
{JSX_TestColumn}
</table>
</div>


</div>
    )
}

export default Components