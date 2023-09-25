import React, { useState } from 'react';

function Filter () {
    const selectList = ["0", "1", "2", "3", "4", "5"];
    const [selected, setSelected] = useState("0");
    const pointFilterEvent = e => {
        //console.log(e.target.value);
        setSelected(e.target.value);
    };
    return (
        <div>
            <select name="pointFilter" id="pointFilter" onChange={pointFilterEvent}>
                {selectList.map((pnt) => (<option value={pnt}>{pnt}</option>))}
            </select>
        </div>
    );
}

export default Filter;

