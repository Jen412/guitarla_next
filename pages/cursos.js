import Layout from "../components/Layout"
import CursoG from "../components/CursoG"
import styles from "../styles/CursosGen.module.css"
const Cursos = ({cursos}) => {
    
    return (
        <Layout>
            <h1 className="heading">Cursos</h1>
            <main className={`contenedor ${styles.listado}`}>
                
                {cursos.map(curso => (
                    <CursoG curso = {curso}/>
                ))}
            </main>    
        </Layout>
    )
}

export async function getServerSideProps() {
    const url =`${process.env.API_URL}/cursos-gens`
    const respuesta = await fetch(url)
    const cursos =  await respuesta.json()
    
    return  {
        props: {
            cursos
        }
    }
}


export default Cursos
