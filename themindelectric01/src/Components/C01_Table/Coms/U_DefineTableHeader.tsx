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
    setSS_PrivateReset,    // from ../index.js, Reset After update activate setSS_Filter
    SS_PrivateColumns,      // from ../index.js, Sort Column
    setSS_PrivateColumns,   // from ../index.js, Sort Column
}:{
    // TYPE
    // HOOK: setState()
    setSS_PrivateReset:(S:number)=>void,   
    SS_PrivateColumns:TS_ColumnName[],
    setSS_PrivateColumns:(S:TS_ColumnName[])=>void
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
        let ss_PrivateColumns:TS_ColumnName[] = [...SS_PrivateColumns]
        ss_PrivateColumns.sort(f_Sort("Name"));
        if(IsD===true){ss_PrivateColumns.reverse();}
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
        setSS_PrivateColumns(ss_PrivateColumns)
        setSS_PrivateReset(Math.random())
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