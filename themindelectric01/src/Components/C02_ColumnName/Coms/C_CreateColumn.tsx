// React

// Components

// Type
import TS_ColumnName from '../../Type/TS_ColumnName';


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
        // If the name is not longer than 50 and unique, then Create new column
        if(let_NewName.toString().length>0 
            && let_NewName.toString().length<50 
            && SS_Columns.map(Column=>Column.Name).includes(let_NewName)===false){
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript
            setSS_Reset(Math.random())

            // Generate New Key
            let let_NewKey:number = Math.random()
            while(SS_Columns.map(Column=>Column.Key).includes(let_NewKey)===true){
                let_NewKey = Math.random()
            }
            
            // Add New Column in List of All Column
            // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
            let ss_Columns:TS_ColumnName[] = [...SS_Columns]
            let let_NewColumn:TS_ColumnName={
                // Property of the New Column 
                Key: let_NewKey,    
                Name: let_NewName, 
                IsSelect:false,
                IsVisible: true
                }
            setSS_Columns([
                let_NewColumn,
                ...ss_Columns    // Other Columns
            ])
            setSS_Reset(Math.random())
        }
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