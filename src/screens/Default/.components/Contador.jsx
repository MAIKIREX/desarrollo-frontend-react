import { useEffect, useState } from "react";

const Contador = () =>{
    const [contador, setContador] = useState(10);

    const handleContador = () => {
        setContador(contador +1);
    }

    const handleContador2 = () => {
        setContador(contador -1)
    }

    useEffect(() => {
        if(contador === 15){ alert("contador es 15")}
    }, [contador])

    useEffect(() => {return () => { console.log('El componente se desmonto')}})

    return (
        <>
            <h1>Componente Contador</h1>
            <h3>{contador}</h3>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={handleContador2}>Disminuir</button>
            </div>
        </>
    )
}

export default Contador;