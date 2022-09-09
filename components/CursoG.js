import styles from "../styles/CursoG.module.css"

import Link from "next/link"
import Image from "next/image"
const CursoG = ({curso}) => {
    const {titulo, resumen, imagen, url} =curso
    return (
        <div>
            <Image priority="true" layout="responsive" src={imagen.url} alt={`imagen blog ${titulo}`} width={800} height={600}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.resumen}>{resumen}</p>
                <Link   href={`/cursos/${url}`}>
                    <a className={styles.enlace}>
                        Más Información
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default CursoG
