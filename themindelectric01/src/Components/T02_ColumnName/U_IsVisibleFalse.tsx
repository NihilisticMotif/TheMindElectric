import TS_ColumnName from "./An_Index"

export function U_IsVisibleFalse(Columns:TS_ColumnName[]):TS_ColumnName[]{
    // Reset IsVisible to false,
    // so that the only column that will appear
    // are the column with name that match with SS_Filter
    for(let i:number=0;i<Columns.length;i++){
            Columns[i].IsVisible=false
    }
    return Columns
}