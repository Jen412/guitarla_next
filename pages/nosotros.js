import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
    return (
        <Layout 
            pagina="Nosotros"
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={400} src="/img/nosotros.jpg" alt="Imagen Nosotros" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac mi at nulla placerat egestas ac ut lorem. Aliquam augue sem, blandit in sollicitudin sit amet, gravida non mi. Curabitur accumsan purus augue, ac facilisis purus congue sed. Sed vitae turpis in lacus elementum mollis. Donec commodo viverra tellus, at ornare nulla lobortis sit amet. Suspendisse eget interdum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                        <p>Nullam consequat faucibus arcu, eget luctus elit condimentum nec. In augue risus, vehicula in magna id, ultricies iaculis felis. In vel diam quis erat tempor congue. Nulla cursus diam vel neque convallis, ac viverra ligula scelerisque. Donec eu ullamcorper nibh. Duis a nisl ut ligula condimentum ultricies. Quisque sed lobortis enim, ut tincidunt quam. Curabitur ornare eu enim quis aliquam. Nullam vitae lorem lacus. Sed sem arcu, porta tincidunt cursus ut, malesuada sit amet ligula. Cras in porttitor justo.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
