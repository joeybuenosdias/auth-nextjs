import { useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/client'

export default function Home() {
    const [ session, loading ] = useSession()
    const [content, setContent] = useState('')
    console.log('session', session)
    console.log('loading', loading)
    function handleFetchGitHub() {
        axios.get('/api/auth/signin/github')
            .then(({ data }) => {
                console.log('res', data)
                setContent(data)
            })
            .catch(err => console.log('err', err))
    }
    return (
        <div>
            <button onClick={handleFetchGitHub}>Sign in with GitHub</button>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}
