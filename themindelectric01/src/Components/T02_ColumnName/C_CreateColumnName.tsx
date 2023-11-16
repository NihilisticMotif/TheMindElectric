import TS_ColumnName from "./An_Index"

export function C_CreateColumnName(
        // SS_Columns
        Columns:TS_ColumnName[],
        // New Column Name
        NewName:string,
        IsNewSelect:boolean,
        IsFirst?:boolean
        ):TS_ColumnName[]{
    // Check duplicate Column Name
    if(NewName.toString().length>0 
            && NewName.toString().length<30 
            && Columns.map(Column=>Column.Name).includes(NewName)===false){
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript

            // Generate New Key
            let let_NewKey:number = Math.random()
            while(Columns.map(Column=>Column.Key).includes(let_NewKey)===true){
                let_NewKey = Math.random()
            }
            
            // Add New Column in List of All Columns
            // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
            const let_NewColumn:TS_ColumnName={
                Key: let_NewKey,    
                Name: NewName, 
                IsSelect:IsNewSelect,
                IsVisible: true
                }
            if(typeof IsFirst === 'undefined' || IsFirst === true)
            {return [let_NewColumn,...Columns]}
            else if (IsFirst === false)
            {return [...Columns,let_NewColumn]}
        }
        return Columns
}
