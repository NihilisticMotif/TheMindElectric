// React

// Components

// Type
import TS_ColumnName from '../../Type/TS_ColumnName';

// CSS

//****************************************************************************

const R_FilterColumn = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // HOOK: setState()
    setSS_Reset,    // from ../index.js, Reset After update activate setSS_Filter
    setSS_Filter,   // from ../index.js, Filter Column that match with SS_Filter
    SS_Columns,      // from ../index.js, Sort Column
    setSS_Columns,   // from ../index.js, Sort Column
}:{
    // TYPE
    // HOOK: setState()
    setSS_Reset:(S:number)=>void,   
    setSS_Filter:(S:string)=>void,  
    SS_Columns:TS_ColumnName[],
    setSS_Columns:(S:TS_ColumnName[])=>void
}) => {
//****************************************************************************
// FUNCTION_00: Update SS_Filter, so that index.js update the new filter word.
//****************************************************************************
    function f_Filter(ss_Columns:TS_ColumnName[]):void{
        let let_Input:string = (document.getElementById('C02id_FilterColumnName') as HTMLInputElement).value
        // Reset IsVisible to false,
        // so that the only column that will appear
        // are the column with name that match with SS_Filter
        for(let i:number=0;i<ss_Columns.length;i++){
            ss_Columns[i].IsVisible=false
        }
        setSS_Columns(ss_Columns)
        setSS_Filter(let_Input)
        setSS_Reset(Math.random())
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
        f_Filter(ss_Columns)
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
<td><button className='C02id' onClick={()=>f_Filter([...SS_Columns])}>OK</button></td>
<td><button className='C02id' onClick={()=>f_DSort(true)}>Descending Sort</button></td>
<td><button className='C02id' onClick={()=>f_DSort(false)}>Ascending Sort</button></td>
</div>
</>

)
}
//****************************************************************************
export default R_FilterColumn