import Header from '../components/header/header'

export default function Layout({
    children
}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}