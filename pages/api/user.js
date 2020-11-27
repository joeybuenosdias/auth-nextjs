// import { getSession } from 'next-auth/client'
import jwt from 'next-auth/jwt'

const secret = process.env.TOKEN_SECRET

// SESSIONS
// export default async function (req, res) {
//     const session = await getSession({ req })
//     console.log('session', session)

//     if (session) {
//         res.send({ content: 'This is protected content. You can access this because your signed in.'})
//     } else {
//         res.send({ error: 'You must be signed in to view protected content on this page.' })
//     }
// }

export default async function(req, res) {
    const token = await jwt.getToken({ req, secret })
    res.send(JSON.stringify(token, null, 2))
}