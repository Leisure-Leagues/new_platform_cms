// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  logout: () => Promise.resolve(),
  requests: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // Create the NextJS router used for redirecting
  const router = useRouter()

  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  //Once the page is loaded, retrieve the token from localstorage and create AXIOS instance to be used across the site. The baseURL for backend requests is changed depending on the site the user is on.
  let token = null

  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem('storedToken')
  }

  const httpRequest = axios.create({
    baseURL: 'https://beta.5aside.co.uk/',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  //This useEffect runs across all pages and is used to verify that the user is logged in. If they are, proceed with the request otherwise they are directed back to the login page.
  useEffect(() => {
    const initAuth = async () => {
      setLoading(true)
      const storedToken = window.localStorage.getItem('storedToken')
      if (storedToken) {
        setUser(window.localStorage.getItem('userData'))
        setLoading(false)
      } else {
        router.push('/login')
        setLoading(false)
      }
    }
    initAuth()
  }, [router.route])

  //Log the user out of by removing all of the session information and direct them to the login page
  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem('storedToken')
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    logout: handleLogout,
    requests: httpRequest
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
