import TS_ColumnName from "./An_Index"

export function D_DeleteColumnName(
    // Renamed Column
    ThisColumn:TS_ColumnName,
    // All Columns
    Columns:TS_ColumnName[]):TS_ColumnName[]{
    // Delete the column with selected key
    for(let i:number=0;i<Columns.length;i++){
        if(Columns[i].Key===ThisColumn.Key){
            Columns.splice(i, 1);
        }
    }
    return Columns
}
