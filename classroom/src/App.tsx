import "./global.css"
import { Button } from "./components/button"
import { useMessage } from "./hooks/useMessage"
import styles from "./app.module.css"



export function App(){
    const { show } = useMessage({age: 18, name: "Fulano"})

    return (
        //<>  
        //  <h1>Hello World</h1>
        //</>
        <div className={styles.container}>
            {/* <Button name="Criar" onClick={() => alert("Criar")}></Button> */}
            <Button name="Adicionar" onClick={() => show("Mensagem personalizada do meu Hook!")} />
            <span>0</span>
            <Button name="Remover"/>
        </div>
    )
}