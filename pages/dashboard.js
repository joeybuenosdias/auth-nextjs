// import AuthProvider from '../components/auth-provider';
import ProtectedRoute from '../components/protected-route/protected-route';
import Layout from '../layout/layout';

export default function Dashboard() {

    return (
        <ProtectedRoute>
            <Layout>
                I am the dashboard content
            </Layout>
        </ProtectedRoute>
    )
}