import Layout from "../components/Layout"
import CursoG from "../components/CursoG"
const cursos = ({cursos}) => {
    
    return (
        <Layout>
            <main className="contenedor">
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


export default cursos
