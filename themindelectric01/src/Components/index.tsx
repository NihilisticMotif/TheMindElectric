// React
import { useState , useEffect} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_ColumnName from "./C02_ColumnName";
import P00_Header from './P00_Header'
import P01_Panel from './P01_Panel'
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

//****************************************************************************
// USEEFFECT_00: Update SS_IndexColumns01 and SS_IndexColumns02
//****************************************************************************
    useEffect(() => {
    // Variable
    let ss_IndexColumns:number[]=[...SS_Columns].map(Column=>Column.Key)
//****************************************************************************
    // Add object key inside SS_IndexColumns01 
    for(let i:number=0;i<ss_IndexColumns.length;i++){
        if(SS_IndexColumns01.includes(ss_IndexColumns[i])===false){
            let ss_IndexColumns01 =[...SS_IndexColumns01] 
            setSS_IndexColumns01([...ss_IndexColumns01,ss_IndexColumns[i]]);
        }
    }
//****************************************************************************
    // Add object key inside SS_IndexColumns02
    for(let i:number=0;i<ss_IndexColumns.length;i++){
        if(SS_IndexColumns02.includes(ss_IndexColumns[i])===false){
            let ss_IndexColumns02 =[...SS_IndexColumns02] 
            setSS_IndexColumns02([ss_IndexColumns[i],...ss_IndexColumns02]);
        }
    }
//****************************************************************************
    // Delete undefined SS_IndexColumns01 object
    let let_DeleteTarget01:number[]=[]
    let IsDelete01:boolean=false
    for(let i:number=0;i<SS_IndexColumns01.length;i++){
        const let_Name:TS_ColumnName|undefined=SS_Columns.find(({Key})=>Key === SS_IndexColumns01[i])
        if(typeof let_Name==='undefined'){
            // https://www.tutorialspoint.com/typescript/typescript_array_push.htm
            let_DeleteTarget01.push(SS_IndexColumns01[i])
            IsDelete01=true
        }
    }
    if(IsDelete01===true){
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        let ss_IndexColumns01:number[]=[...SS_IndexColumns01]
        let let_UpdateColumns01:number[]=ss_IndexColumns01.filter(Key=>!let_DeleteTarget01.includes(Key))
        setSS_IndexColumns01(let_UpdateColumns01)
        let_DeleteTarget01=[]
        IsDelete01=false
    }
//****************************************************************************
    // Delete undefined SS_IndexColumns02 object
    let let_DeleteTarget02:number[]=[]
    let IsDelete02:boolean=false
    for(let i:number=0;i<SS_IndexColumns02.length;i++){
        const let_Name:TS_ColumnName|undefined=SS_Columns.find(({Key})=>Key === SS_IndexColumns02[i])
        if(typeof let_Name==='undefined'){
            // https://www.tutorialspoint.com/typescript/typescript_array_push.htm
            let_DeleteTarget02.push(SS_IndexColumns02[i])
            IsDelete02=true
        }
    }
    if(IsDelete02===true){
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        let ss_IndexColumns02:number[]=[...SS_IndexColumns02]
        let let_UpdateColumns02:number[]=ss_IndexColumns02.filter(Key=>!let_DeleteTarget02.includes(Key))
        setSS_IndexColumns02(let_UpdateColumns02)
        let_DeleteTarget02=[]
        IsDelete02=false
    }
//****************************************************************************
    }, [SS_Columns,SS_IndexColumns01,SS_IndexColumns02]);
//****************************************************************************

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

// <P00_Header/>

//<div id='Body' >

// ColumnName Panel
// <C02_ColumnName 
// SS_Columns={SS_Columns}
// setSS_Columns={setSS_Columns}
// SS_IndexColumns={SS_IndexColumns02}
// setSS_IndexColumns={setSS_IndexColumns02}
// />

// Table Panel
// <C01_Table 
// SS_Columns={SS_Columns}
// setSS_Columns={setSS_Columns}
// SS_IndexColumns={SS_IndexColumns01}
// setSS_IndexColumns={setSS_IndexColumns01}
// />

// </div>
//****************************************************************************

// <>
// <P00_Header/>
// <P01_Panel/>
// </>
//****************************************************************************

    return(
<>
<P00_Header/>
<P01_Panel/>
</>
    )
}

export default Components