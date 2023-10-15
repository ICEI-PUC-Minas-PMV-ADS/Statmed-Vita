import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'my-jwt';

export const API_URL = 'http://localhost:3000'
const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [ authState, setAuthState ] = useState({
    token: null,
    authenticated: null
  })

  useEffect(() => {
    const loadToken = async () => {
      // const token = await SecureStore.getItemAsync(TOKEN_KEY)
      const token = sessionStorage.getItem(TOKEN_KEY)
      console.log('stored: ', token)
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        setAuthState({
          token: token,
          authenticated: true
        })
      }
    }
    loadToken()
  }, [])

  const register = async (email, password) => {
    try {
      return await axios.post(`${API_URL}/auth/register`, { email, password })
    } catch (err) {
      return {
        error: true,
        msg: err.response.data.msg
      }
    }
  }

  const login = async (email, password) => {
    try {
      const result = await axios.post(`${API_URL}/auth/login`, { email, password })
      console.log('AuthContext', result)

      setAuthState({
        token: result.data.access_token,
        authenticated: true
      })

      console.log('LOGIN_AUTH_STATE: ', authState)

      axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.access_token}`

      await sessionStorage.setItem(TOKEN_KEY, result.data.access_token)

      return result;

    } catch (err) {
      console.log('err: ', err)
      return {
        error: true,
        msg: err.response.data.msg
      }
    }
  }

  const logout = async (email, password) => {
    // Delete token from storage
    await sessionStorage.removeItem(TOKEN_KEY)

    // Update HTTP Headers
    axios.defaults.headers.common['Authorization'] = ''

    // Reset Auth state
    setAuthState({
      token: null,
      authenticated: false
    })
  }

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState
  }

  return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}