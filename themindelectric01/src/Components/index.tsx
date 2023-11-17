// React
import { useState , useEffect} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_ColumnName from "./C02_ColumnName";

// Type
import TS_ColumnName from "./T02_ColumnName/An_Index";
// CSS
import './index.css';

// https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
const Components=()=>{
    // Reset Column List after Update Column List (Create, Rename, Delete, Filter and Sort)
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    // const [SS_Reset,setSS_Reset]=useState<number>(0)
    
    const [SS_Columns,setSS_Columns]=useState<TS_ColumnName[]>([
        {Key: 0, Name: 'Xedni Wor'            , IsSelect: false, IsVisible: true},
        {Key: 1, Name: 'Weezer'               , IsSelect: false, IsVisible: true},
        {Key: 2, Name: 'Tally Hall'           , IsSelect: false, IsVisible: true},
        {Key: 3, Name: 'Que, The Human Editor', IsSelect: false, IsVisible: true},
        {Key: 4, Name: 'Human Centipede'      , IsSelect: false, IsVisible: true},
        ]);

    // Index Columns of C01_Table
    const [SS_IndexColumns01,setSS_IndexColumns01]=useState<number[]>(SS_Columns.map(Column=>Column.Key))
    // Index Columns of C02_ColumnName
    const [SS_IndexColumns02,setSS_IndexColumns02]=useState<number[]>(SS_Columns.map(Column=>Column.Key))
    
    useEffect(() => {
    // This code is not finished, because it does not garantee that
    // setSS_IndexColumns01 will be updated when the element of SS_IndexColumns02 is deleted
    // and vice versa.

    // Update SS_IndexColumns01 everytime SS_IndexColumns02 is added
    for(let i:number=0;i<SS_IndexColumns02.length;i++){
        if(SS_IndexColumns01.includes(SS_IndexColumns02[i])===false){
            let ss_IndexColumns01 =[...SS_IndexColumns01] 
            setSS_IndexColumns01([...ss_IndexColumns01,SS_IndexColumns02[i]]);
        }
    }

    // Update SS_IndexColumns02 everytime SS_IndexColumns01 is added
    for(let i:number=0;i<SS_IndexColumns01.length;i++){
        if(SS_IndexColumns02.includes(SS_IndexColumns01[i])===false){
            let ss_IndexColumns02 =[...SS_IndexColumns02] 
            setSS_IndexColumns02([SS_IndexColumns01[i],...ss_IndexColumns02]);
        }
    }
    }, [SS_IndexColumns01,SS_IndexColumns02]);

//****************************************************************************
// JSX_01: Testing, Debugging
//****************************************************************************
    const JSX_TestColumn:JSX.Element[] = SS_Columns.map((Column)=>
        <tr>
        <td>{Column.Name}</td>
        <td>|{Column.Key}</td>
        <td>|{Column.IsSelect.toString()}</td>
        <td>|{Column.IsVisible.toString()}</td>
        </tr>
        );
    function JSXName(ThisKey:number):string{
        const let_Name=SS_Columns.find(({Key})=>Key === ThisKey)
        if (let_Name===undefined){
            return 'undefined'
        }
        else{
            return let_Name.Name
        }
    }
    const JSX_TestColumn01:JSX.Element[] = SS_IndexColumns01.map((Key)=>
        <div>
        <td>* {Key}</td>
        <td>| {JSXName(Key)}</td>
        </div>
        );
    const JSX_TestColumn02:JSX.Element[] = SS_IndexColumns02.map((Key)=>
        <div>
        <td>* {Key}</td>
        <td>| {JSXName(Key)}</td>
        </div>
        );
    
    const JSX_DivTestColumn:JSX.Element=<
div id='Body' >
<hr/>
    <div>
    <h1>Testing (Main)</h1>
    <h2>Length:{SS_Columns.length}</h2>
    {JSX_TestColumn}
    </div>
<hr/>
    <div>
    <h1>JSX_TestColumn01</h1>
    <h2>Length:{SS_IndexColumns01.length}</h2>
    {JSX_TestColumn01}
    </div>
<hr/>
    <div>
    <h1>JSX_TestColumn02</h1>
    <h2>Length:{SS_IndexColumns02.length}</h2>
    {JSX_TestColumn02}
    </div>
<hr/>
</div>

//****************************************************************************
// OUTPUT
//****************************************************************************

    return(

<div id='App'>

<div id='Body' >
<C02_ColumnName 
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
SS_IndexColumns={SS_IndexColumns02}
setSS_IndexColumns={setSS_IndexColumns02}
/>
<C01_Table 
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
SS_IndexColumns={SS_IndexColumns01}
setSS_IndexColumns={setSS_IndexColumns01}
/>
</div>

{JSX_DivTestColumn}

</div>
    )
}

export default Components