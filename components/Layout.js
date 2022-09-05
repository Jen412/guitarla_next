import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Guitar LA</title>
                <meta name='description' content='Sitio Web de venta de guitarras'/>
            </Head>

            <Header/>
            {children}

            <Footer/>
        </div>
    )
}

export default Layout
