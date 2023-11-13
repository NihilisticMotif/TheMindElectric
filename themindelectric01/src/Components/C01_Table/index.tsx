// React

// Components

// Type
import TS_Person from './Type/TS_Person';

// CSS
import './index.css';

const C01_Table = () => {
    const let_Persons:TS_Person[]=[
        {Name:'Mumu'  , Gender:false, Age: 25},
        {Name:'CheChe', Gender: true, Age: 22},
        {Name:'Tata'  , Gender: true, Age: 19}
    ]

    const JSX_TH_Columns:JSX.Element[] = let_Persons.map(Column => <th>{Column.Name+','+Column.Gender.toString()+','+Column.Age.toString()}</th>);
    const JSX_BUTTON_Columns:JSX.Element[] = let_Persons.map(Column=>
        <td>
            <div id='C01id_Button'>
            <button>Edit</button>
            </div>
        </td>
        );
    return (
<>
<table id='C01id_Table'>
<tr>
    {JSX_TH_Columns}
    <th>Edit</th>
</tr>
<tr>
    {JSX_BUTTON_Columns}
    <td>-</td>
</tr>

</table>
</>
    )
}

export default C01_Table