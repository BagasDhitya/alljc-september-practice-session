'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function Redirect() {
  const router = useRouter()
  const userToken = Cookies.get('user-token')

  useEffect(() => {
    if (!userToken) {
      router.push('/auth/sign-in')
    } else {
      router.push('/home')
    }
  }, [])


  return (
    <div></div>
  )
}
