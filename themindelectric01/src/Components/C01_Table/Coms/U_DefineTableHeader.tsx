// React
//import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_ColumnName from '../../T02_ColumnName/An_Index';

// CSS

const U_DefineTableHeader = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // HOOK: setState()
    SS_Columns,
    setSS_IndexColumns,   // from ../index.js, Sort Column
}:{
    // TYPE
    // HOOK: setState() 
    SS_Columns:TS_ColumnName[],
    setSS_IndexColumns:(S:number[])=>void
}
) => {
//****************************************************************************
// FUNCTION_00: Sort SS_Column
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
        // Get the Alphabet Name Order of SS_Columns
        let ss_Columns:TS_ColumnName[] = [...SS_Columns]
        ss_Columns.sort(f_Sort("Name"));
        if(IsD===true){ss_Columns.reverse();}
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
        
        // Update SS_IndexColumns
        setSS_IndexColumns(ss_Columns.map((Column)=>Column.Key))
    }

return(
<div className='C01id_DivHeader'>
<td><button className='C01id_Header' /*onClick={()=>f_DSort(true)}*/>Import Data</button></td>
<td><button className='C01id_Header' /*onClick={()=>f_DSort(true)}*/>Export Data</button></td>
<td><button className='C01id_Header' /*onClick={()=>f_DSort(true)}*/>Export Filtered Data</button></td>
<td><button className='C01id_Header' /*onClick={()=>f_DSort(true)}*/>Rename Table</button></td>
<td><button className='C01id_Header' /*onClick={()=>f_DSort(true)}*/>Inspecting Table</button></td>
<td><button className='C01id_Header' onClick={()=>f_DSort(true)}>Descending Sort Columns</button></td>
<td><button className='C01id_Header' onClick={()=>f_DSort(false)}>Ascending Sort Columns</button></td>
</div>
    )
}

export default U_DefineTableHeader