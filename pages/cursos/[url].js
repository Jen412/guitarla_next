import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/CursoG.module.css"

const Curse = ({curso}) => {
    const {titulo, contenido, imagen} = curso[0]
    return (
        <Layout pagina={titulo}>
            <main className="contenedor"> 
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen Entrada ${titulo}`}/>
                    <div className={styles.contenido}>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
                <Link href={"/"}>
                    <a className={styles.enlace}>Inscribete</a>
                </Link>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}) {
    const urlCurso = `${process.env.API_URL}/cursos-gens?url=${url}` 
    const respuesta= await fetch(urlCurso);
    const curso = await respuesta.json();

    return {
        props: {
            curso
        }
    };
}

export default Curse
