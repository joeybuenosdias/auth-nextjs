import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'
import css from './header.module.css';

export default function Header() {
    return (
        <header className={css.header}>
            <Home />
            <div className={css.subHeader}>
                <DashboardButton />
                <AuthButton />
            </div>
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

function Home(){
    return (
        <Link href="/">
            <button>
                <h1>Home</h1>
                <div>&#127849;</div>
            </button>
        </Link>
    )
}
