import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router';

const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

function AuthProvider({ children, value }) {

    const newValue = {
        ...value
    }
    return (
        <AuthContext.Provider value={newValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default function ProtectedRoute({ children }) {
    const [session, loading] = useSession()
    const [user, setUser] = useState({})

    const router = useRouter()
    useEffect(() => {
        axios.get('/api/user')
            .then(({ data }) => setUser(data))
            .catch(err => console.log('err', err))
    }, [])
    if (typeof window !== 'undefined' && loading) {
        return null;
    }

    if (typeof window !== 'undefined' && !session) {
        router.push('/')
    }

    return (
        <AuthProvider value={user}>
            {children}
        </AuthProvider>
    )
}