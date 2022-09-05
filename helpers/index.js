export const formatearFecha = fecha =>{
    const fechaN = new Date(fecha);

    const opc = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }
    return fechaN.toLocaleDateString('es-ES', opc)
}