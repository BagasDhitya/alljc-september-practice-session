import NextAuth, { NextAuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'
import { BASE_URL, registerUser, User } from '@/lib/api'
import axios from 'axios'

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email }) {

            // akan dijalankan ketika user pilih login lewat google
            try {
                const userEmail = user.email
                const userName = user.name || userEmail?.split("@")[0]
                const userUsername = userEmail?.split("@")[0]
                const now = new Date().toISOString()

                // cek jika user sudah ada di Backendless
                const listRes = await axios.get(BASE_URL + 'data/Users', {
                    params: {
                        where: `email = '${userEmail}'`
                    }
                })

                if (Array.isArray(listRes.data) && listRes.data.length > 0) {
                    // jika user sudah ada -> hanya update lastLogin

                    const existing = listRes.data[0]
                    await axios.put(BASE_URL + 'data/Users/' + existing.objectId, {
                        lastLogin: now
                    })
                } else {
                    // jika user belum ada -> bikin record baru
                    const newUser: User = {
                        email: userEmail!,
                        username: userUsername!,
                        password: "user12345678" // not secure, hanya untuk persyaratan di backendless aja
                    }
                    console.log('new User : ', newUser)

                    registerUser(newUser)
                }
                return true
            } catch (error) {
                console.error('Error in signIn callback : ', error)
                return false
            }
        },
        async session({ session, token, user }) {
            // data session bisa diambil lewat client component

            if (!session.user) {
                session.user = {};
            }
            (session.user as any).id = token.sub;
            return session
        },
        async jwt({ token, user, account, profile }) {
            // untuk ambil token

            return token
        }
    },
    pages: {
        signIn: "/auth/sign-in",
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET!
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }