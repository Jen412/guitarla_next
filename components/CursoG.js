
const CursoG = ({curso}) => {
    const {titulo, resumen, imagen, url} =curso
    return (
        <div>
            <h1 className="heading">{titulo}</h1>
        </div>
    )
}

export default CursoG
