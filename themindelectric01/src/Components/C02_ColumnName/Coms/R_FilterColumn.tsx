// React

// Components

// Type
import TS_ColumnName from '../../T02_ColumnName/An_Index';
import {U_IsVisibleFalse} from '../../T02_ColumnName/U_IsVisibleFalse'
// CSS

//****************************************************************************

const R_FilterColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // HOOK: setState()
    setSS_Filter,       // Filter Column that match with SS_Filter
    SS_Columns,         // Sort and Filter Column
    setSS_Columns,      // Reset Column, before filter the Column that match with SS_Filter
    setSS_IndexColumns  // Sort Column
}:{
    // TYPE
    // HOOK: setState()  
    setSS_Filter:(S:string)=>void,  
    SS_Columns:TS_ColumnName[],
    setSS_Columns:(S:TS_ColumnName[])=>void,
    setSS_IndexColumns:(S:number[])=>void
}) => {
//****************************************************************************
// FUNCTION_00: Update SS_Filter, so that index.js update the new filter word.
//****************************************************************************
    function f_Filter():void{
        let ss_Columns:TS_ColumnName[]=[...SS_Columns]
        let let_Input:string = (document.getElementById('C02id_FilterColumnName') as HTMLInputElement).value
        // Reset IsVisible to false,
        // so that the only column that will appear
        // are the column with name that match with SS_Filter
        let let_UpdateColumns=U_IsVisibleFalse(ss_Columns)
        setSS_Columns(let_UpdateColumns)
        setSS_Filter(let_Input)
    }
//****************************************************************************
// FUNCTION_01: Sort SS_Column
//****************************************************************************
    function f_Sort(property:any):any{
        // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        let let_SortOrder:number = 1;
        if(property[0] === "-") {
            let_SortOrder = -1;
            property = property.substr(1);
        }
        return function(a:any,b:any){
            let let_Result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return let_Result * let_SortOrder;
        }
    }

    function f_DSort(IsD:boolean):void{
        let ss_Columns:TS_ColumnName[] = [...SS_Columns]
        ss_Columns.sort(f_Sort("Name"));
        if(IsD===true){ss_Columns.reverse();}
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
        
        setSS_IndexColumns(ss_Columns.map((Column)=>Column.Key))
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<>
<div className='C02id'>
<td><h1 className='C02id'>Search:</h1></td>
<td><input className='C02id' type ="text" id='C02id_FilterColumnName'></input></td>
</div>
<div className='C02id'>
<td><button className='C02id' onClick={()=>f_Filter()}>OK</button></td>
<td><button className='C02id' onClick={()=>f_DSort(true)}>Descending Sort</button></td>
<td><button className='C02id' onClick={()=>f_DSort(false)}>Ascending Sort</button></td>
</div>
</>

)
}
//****************************************************************************
export default R_FilterColumn