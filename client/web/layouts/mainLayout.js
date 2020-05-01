import Navbar from '../components/navbar'

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout