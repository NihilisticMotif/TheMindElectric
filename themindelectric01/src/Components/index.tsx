// React
import { useState , useEffect} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_ColumnName from "./C02_ColumnName";

// Type
import TS_ColumnName from "./T02_ColumnName/An_Index";
// CSS
import './index.css';


const Components=()=>{
    const [SS_Columns,setSS_Columns]=useState<TS_ColumnName[]>([
        {Key: 0, Name: 'Xedni Wor'            , IsSelect: false, IsVisible: true},
        {Key: 1, Name: 'Weezer'               , IsSelect: false, IsVisible: true},
        {Key: 2, Name: 'Tally Hall'           , IsSelect: false, IsVisible: true},
        {Key: 3, Name: 'Que, The Human Editor', IsSelect: false, IsVisible: true},
        {Key: 4, Name: 'Human Centipede'      , IsSelect: false, IsVisible: true},
        ]);

    return(

<div id='App'>

<div id='Body'>
<C02_ColumnName 
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
/>
<C01_Table 
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
/>
</div>



</div>
    )
}

export default Components