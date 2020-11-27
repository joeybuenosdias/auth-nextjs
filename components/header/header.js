import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Header() {
    return (
        <header>
            <Link href="/">
                <button>Home</button>
            </Link>
            <DashboardButton />
            <AuthButton />
        </header>
    )
}

function DashboardButton() {
    const [ session, loading ] = useSession()

    if(session) {
        return (
            <Link href="/dashboard">
                <button>Dashboard</button>
            </Link>
        )
    }

    return null;
}

function AuthButton() {
    const [ session, loading ] = useSession()

    if(session) {
        return <button onClick={() => signOut()}>Sign Out</button>
    }

    return <button onClick={() => signIn()}>Sign In</button>
}
