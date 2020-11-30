// import AuthProvider from '../components/auth-provider';
import ProtectedRoute from '../components/protected-route/protected-route';
import Layout from '../layout/layout';

export default function Dashboard() {

    return (
        <ProtectedRoute>
            <Layout>
                <h1>Dashboard</h1>
                <p>This is a user dashboard route that can only be accessed when authenticated with a GitHub</p>
                <p>It utilizes JSON Web Tokens for authorization and user sessions.</p>
            </Layout>
        </ProtectedRoute>
    )
}