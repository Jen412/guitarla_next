import Layout from "../components/Layout"
import styles from "../styles/Carrito.module.css"

const Carrito = ({carrito}) => {
    
    console.log(carrito)
    return (
        <Layout pagina={"Carrito de Compras"}>
            <h1 className="heading">Carrito</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div>
                    
                </div>
                <div>

                </div>
            </main>
        </Layout>
    )
}

export default Carrito
