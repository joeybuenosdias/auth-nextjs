import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const options = {
	// Configure one or more authentication providers
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		}),
		// ...add more providers here
	],
	secret: process.env.TOKEN_SECRET,
	session: {
		jwt: true,
	},
	callbacks: {
		signIn: async (user, account, profile) => {
			const res = await axios.get('https://api.github.com/user/emails', {
				headers: {
					'Authorization': `token ${account.accessToken}`
				}
			})

			const { email = null } = res.data.find(emailAddress => emailAddress.primary)

			user.email = email
		},
		jwt: async (token, user, account, profile, isNewUser) => {
			return Promise.resolve(token)
		}
	}
}

export default (req, res) => NextAuth(req, res, options)