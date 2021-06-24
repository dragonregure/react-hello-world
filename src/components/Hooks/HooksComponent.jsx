import React, { useState, useEffect } from 'react';

const HooksComponent = () => {
    const [count, addCount] = useState(0);

    //Lifecycle gabungan untuk hooks
    useEffect(() => {
        document.title = `Jumlah klik: ${count}`; //Ini untuk didMount dan didUpdate

        //Ini untuk willUnmount
        return (() => {
            document.title = 'Hello World!';
        });
    });

    return (
        <div>
            <p>Current Value: {count}</p>
            <button onClick={() => addCount(count + 1)}>Add Value</button>
        </div>
    );
}

export default HooksComponent;