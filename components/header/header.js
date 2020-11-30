import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
            <button className={css.homeButton}>
                <h1>GitHub OAuth Demo</h1>
                <Image
                    width={200}
                    height={160}
                    src="/Octocat.png"
                />
            </button>
        </Link>
    )
}
