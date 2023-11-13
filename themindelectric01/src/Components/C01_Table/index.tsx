// React
import { useState } from 'react';
// Components

// Type
import TS_ColumnName from '../Type/TS_ColumnName';

// CSS
import './index.css';

const C01_Table = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
SS_Columns
}:{
// TYPE
// PERPERTY
SS_Columns:TS_ColumnName[]
// HOOK
}
) => {
    type TS_Display=
            0|  // Default JSX Column | f_Cancel     => setSS_Display(0) => Open Default JSX Column
            1|  // Rename JSX Column  | f_OpenRename => setSS_Display(1) => Open Rename JSX Column 
            2   // Delete JSX Column  | f_OpenDelete => setSS_Display(2) => Open Delete JSX Column 
    const [SS_Display,setSS_Display]=useState<TS_Display>(0)
    const ss_Columns:TS_ColumnName[]=SS_Columns
    const let_VisibleColumn:TS_ColumnName[] = (ss_Columns.filter(Column=>
        Column.IsSelect===true
        // https://react.dev/learn/rendering-lists
    ));
    const JSX_TH_Columns:JSX.Element[] = let_VisibleColumn.map(Column => <th>{Column.Name}</th>);
    const JSX_BUTTON_Columns:JSX.Element[] = let_VisibleColumn.map(Column=>
        <td>
            <div id='C01id_Button'>
            <td><button>X</button></td>
            <td><button>Rename</button></td>
            <td><button>Delete</button></td>
            <td><button>...</button></td>
            </div>
        </td>
        );
    return (
<>
<table id='C01id_Table'>
<tr>
    {JSX_TH_Columns}
</tr>
<tr>
    {JSX_BUTTON_Columns}
</tr>
</table>
</>
    )
}

export default C01_Table