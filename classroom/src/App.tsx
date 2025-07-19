import "./global.css"
import { Button } from "./components/button"
import styles from "./app.module.css"

export function App(){
    return (
        //<>  
        //  <h1>Hello World</h1>
        //</>
        <div className={styles.container}>
            {/* <Button name="Criar" onClick={() => alert("Criar")}></Button> */}
            <Button name="Adicionar" />
            <span>0</span>
            <Button name="Remover"/>
        </div>
    )
}