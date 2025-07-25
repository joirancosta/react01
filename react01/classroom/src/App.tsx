import "./global.css"
import { useState, useEffect } from "react"
import { Button } from "./components/button"
// import { useMessage } from "./hooks/useMessage"
import styles from "./app.module.css"



export function App(){
    const [count, setCount] = useState(0)

    // const { show } = useMessage({age: 18, name: "Fulano"})

    function handleAdd(){
        setCount(count + 1)  
    }
    function handleRemove(){
        if (count > 0) {
            setCount(count - 1)            
        }
    }

    useEffect(() => {
        if (count > 0) {
            console.log("O valor mudou para " + count)            
        }
    }, [count])

    return (
        //<>  
        //  <h1>Hello World</h1>
        //</>
        <div className={styles.container}>
            {/* <Button name="Criar" onClick={() => alert("Criar")}></Button> */}
            {/* <Button name="Adicionar" onClick={() => show("Mensagem personalizada do meu Hook!")} /> */}
            <Button name="Adicionar" onClick={handleAdd}/>
            <span>{count}</span>
            <Button name="Remover" onClick={handleRemove}/>
        </div>
    )
}