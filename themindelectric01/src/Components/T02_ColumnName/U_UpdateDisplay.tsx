import TS_ColumnName from "./An_Index"

export function U_UpdateDisplay(
        ThisColumn:TS_ColumnName,
        Columns:TS_ColumnName[],
        State:0|1|2,
    ):TS_ColumnName[]{
    for(let i:number=0;i<Columns.length;i++){
        if(Columns[i].Key===ThisColumn.Key){
            ThisColumn.Display=State
        }
    }
    return Columns
}
