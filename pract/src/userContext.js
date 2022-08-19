import React, { useState} from 'react';


const Parent = () => {
    const [userName, setUserName] = useState("domz")
    return (
        {userName}
        <Child setUserName={setUserName} />
    )
}

    