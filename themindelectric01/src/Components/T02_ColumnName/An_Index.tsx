// Type Script Column
type TS_ColumnName={
// Properties of Each Column
    Key:number,         // DEFAULT: Math.random()
                        // Unique Key

    Name:string,        // DEFAULT: have no default
                        // Unique Column Name 
                        // (Less than 50 letters)

    IsSelect:boolean,   // DEFAULT: false
                        // Is the Column display in C01_Table
                        // const [SS_IsSelect,setSS_IsSelect]=useState<boolean>(false)

    IsVisible:boolean   // DEFAULT: true
                        // Is the Column display in C02_Column
                        // If the column satisfy 1 of 3 conditions
                        // 1. Consist of SS_Filter in their name
                        // 2. New Column 
                        // 3. Renamed Column 
                        // Then it is visible in C02_Column and IsVisible = true
                        
}

export default TS_ColumnName