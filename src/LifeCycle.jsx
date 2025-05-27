import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [text, setText] = useState('');


    // componentDidMount
    useEffect(() => {
        console.log("componente montado");
    },[]);
    // componentDidUpdate
    useEffect(() => {
        console.log("componente actualizado");
    },[text]);
    // componentWillUnmount
    useEffect(() => {
        return () => console.log("componente desmontado");
    },[]);
    // montar, actualizar
    useEffect(()=>{
        console.log("componente siempre");
    });

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
        </div>
    )
}

export default LifeCycle