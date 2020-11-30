import { useSession } from 'next-auth/client'
import Layout from '../layout/layout'

export default function Home() {
    const [ session, loading ] = useSession()

    if (typeof window !== 'undefined' && loading) {
        return null;
    }

    if (!session) {
        return (
            <Layout>
                <h1>Welcome</h1>
                <p>Please Sign In</p>
            </Layout>
        )
    }

    return (
        <Layout>
            <h1>Welcome</h1>
            <p>Currently Signed in as: {session.user.name}</p>
        </Layout>
    )

}
