// React
//import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Person from './Type/TS_Person';

// CSS
import './index.css';

const C99_BluePrint = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
}:{
// TYPE
// PERPERTY
// HOOK
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************

//****************************************************************************
// FUNCTION_00: By default JSX and function are in the same group.
//****************************************************************************

//****************************************************************************
// JAX_00:
//****************************************************************************
    const letPerson_S:TS_Person[]=[
        {Name:'Mumu'  , Gender:false, Age: 25},
        {Name:'CheChe', Gender: true, Age: 22},
        {Name:'Tata'  , Gender: true, Age: 19}
    ]

    const JSX_TH_Column_S:JSX.Element[] = letPerson_S.map(Column => <th>{Column.Name+','+Column.Gender.toString()+','+Column.Age.toString()}</th>);
    const JSX_BUTTON_Column_S:JSX.Element[] = letPerson_S.map(Column=>
        <td>
            <div id='C99id_Button'>
            <button>Edit</button>
            </div>
        </td>
        );

return(
<>
<>
<table id='C99id_Table'>
<tr>
    {JSX_TH_Column_S}
    <th>Edit</th>
</tr>
<tr>
    {JSX_BUTTON_Column_S}
    <td>-</td>
</tr>

</table>
</>
</>
    )
}

export default C99_BluePrint