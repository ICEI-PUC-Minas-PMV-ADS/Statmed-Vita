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

  const register = async (cpf, password) => {
    try {
      return await axios.post(`http://localhost:3030/auth/registrar`, { cpf, senha: password })
    } catch (err) {
      return {
        error: true,
        msg: err.response.data.msg
      }
    }
  }

  const login = async (email, password) => {
    try {
      const result = await axios.post(`http://localhost:3030/auth/login`, { cpf: email, senha: password })

      setAuthState({
        token: result.data.access_token,
        authenticated: true
      })

      axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.access_token}`

      await sessionStorage.setItem(TOKEN_KEY, result.data.access_token)
      await sessionStorage.setItem('userid', result.data.user.id)

      return result;

    } catch (err) {
      return {
        error: true,
        msg: err.response.data.msg
      }
    }
  }

  const agendar = async (consulta) => {
    const id = sessionStorage.getItem('userid')

    try {
      return await axios.post(`http://localhost:3000/consultaprox?pacienteId=${id}/`, consulta)
    } catch (err) {
      return {
        error: true,
        msg: err.response.data.msg
      }
    } finally {
      navigation.navigate('Consultas')
    }
  }

  const medicamentos = async (medicamentos) => {
    const id = sessionStorage.getItem('userid')

    try {
      return await axios.post(`http://localhost:3000/medicamentos?pacienteId=${id}/`, medicamentos)
    } catch (err) {
      return {
        error: true,
        msg: err.response.data.msg
      }
    } finally {
      navigation.navigate('Minha Saude')
    }
  }

  const logout = async (email, password) => {
    // Delete token from storage
    await sessionStorage.removeItem(TOKEN_KEY)
    await sessionStorage.removeItem('userid')

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
    onAgendar: agendar,
    onMedicamentos: medicamentos,
    authState
  }

  return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}