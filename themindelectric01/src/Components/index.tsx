// React

// Components
import C01_Table from "./C01_Table";
import C02_Column from "./C02_Column";

// Type

// CSS
import './index.css';

const Components=()=>{
    return(

<div id='App'>

<div id='Body'>
<C02_Column/>
<C01_Table/>
</div>

<div id='Body'>
<C01_Table/>
<C01_Table/>
</div>


</div>
    )
}

export default Components