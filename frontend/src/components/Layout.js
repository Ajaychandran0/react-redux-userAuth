import {Helmet} from 'react-helmet'
import Header from './Header'

const Layout = ({title,children}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header/>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
