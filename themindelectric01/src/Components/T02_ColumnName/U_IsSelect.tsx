import TS_ColumnName from "./An_Index"

export function U_IsSelect(
    // Select the column by update TS_ColumnName.IsSelect=true
        Columns:TS_ColumnName[],
        IsSelect:boolean,
        FilterName?:string
        ):TS_ColumnName[]{
    if(typeof FilterName==='undefined'){
    for(let i:number=0;i<Columns.length;i++){
        Columns[i].IsSelect=IsSelect
    }}
    else{
    for(let i:number=0;i<Columns.length;i++){
        if(Columns[i].Name.includes(FilterName)===true){
            Columns[i].IsSelect=IsSelect
        }
    }
    }
    return Columns
}