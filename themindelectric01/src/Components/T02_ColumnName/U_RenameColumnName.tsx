import TS_ColumnName from "./An_Index"

export function U_RenameColumnName(        
        // Renamed Column
        ThisColumn:TS_ColumnName,
        // All Columns
        Columns:TS_ColumnName[],
        // New Column Name
        NewName:string):TS_ColumnName[]{
        // Check duplicate Column Name
        if(Columns.map(Column=>Column.Name).includes(NewName)===false){
            // Replace the previous name (the name with selected key) with new name
            for(let i:number=0;i<Columns.length;i++){
                if(Columns[i].Key===ThisColumn.Key){
                    Columns.splice(i, 1,{
                    Key: ThisColumn.Key,
                    Name: NewName, 
                    IsSelect: ThisColumn.IsSelect,
                    IsVisible: true
                });
                }
            }
            return Columns
        }
    return Columns
}