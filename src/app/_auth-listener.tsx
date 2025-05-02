'use client'

import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../app/lib/firebase'
import { useAuthStore } from '../app/store/authStore'

export default function AuthListener() {
  const setUser = useAuthStore((state) => state.setUser)
  const logout = useAuthStore((state) => state.logout)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName ?? '',
          email: user.email ?? '',
          photo: user.photoURL ?? '',
        })
      } else {
        logout()
      }
    })

    return () => unsubscribe()
  }, [])

  return null
}
