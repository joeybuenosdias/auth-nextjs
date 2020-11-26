import { useEffect } from 'react';
import axios from 'axios'

export default function Dashboard() {
    useEffect(() => {
        axios.get('/api/user')
            .then(res => console.log('res', res))
            .catch(err => console.log('err', err))
    }, [])

    return (
        <div>
            I am the dashboard content
        </div>
    )
}