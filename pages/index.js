import { useSession, signIn, signOut } from 'next-auth/client'

export default function Home() {
    const [ session, loading ] = useSession()

    if (typeof window !== 'undefined' && loading) {
        return null;
    }

    if (!session) {
        return (
            <div>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        )
    }

    return (
        <div>
            <h1>{session.user.name}</h1>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )

}
