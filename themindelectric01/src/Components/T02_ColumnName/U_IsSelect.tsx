import TS_ColumnName from "./An_Index"

export function U_IsSelect(
    // Select the column by update TS_ColumnName.IsSelect=true
        Columns:TS_ColumnName[],
        IsSelect:boolean,
        FilterName?:string,
        ThisColumns?:TS_ColumnName,
        ):TS_ColumnName[]{
    if(typeof FilterName==='string' && typeof ThisColumns === 'undefined'){
    for(let i:number=0;i<Columns.length;i++){
        if(Columns[i].Name.includes(FilterName)===true){
            Columns[i].IsSelect=IsSelect
            Columns[i].Display=0
        }
    }}
    else if(typeof FilterName==='undefined' && typeof ThisColumns !== 'undefined'){
    for(let i:number=0;i<Columns.length;i++){
        if(Columns[i].Key===ThisColumns.Key){
            Columns[i].IsSelect=IsSelect
            Columns[i].Display=0
            break
        }
    }
    }
    else{
    for(let i:number=0;i<Columns.length;i++){
        Columns[i].IsSelect=IsSelect
        Columns[i].Display=0
    }
    }
    return Columns
}