import { useState } from 'react'
import Router from "next/router"
import { login } from '../utils/auth'
import { auth } from '../services/api'
import WithoutAuth from "../components/helpers/withoutAuth";
import { AppContext } from "../context/appContext"
import { useContext } from 'react'
import MainLayout from '../layouts/mainLayout'


const Page = ({ }) => {

  const { setUser } = useContext(AppContext)

  const [form, setForm] = useState({
    identifier: '',
    password: '',
    loading: false,
    error: null
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    setForm({ ...form, loading: true })
    e.preventDefault()
    const data = await auth.login(form.identifier, form.password)
    if (data?.user) {
      setUser(data.user)

      if (Router.query && Router.query.redirect) {
        Router.push(Router.query.redirect)
      } else {
        Router.push('/')
      }

    }
  }

  return (
    <MainLayout>
      <h1>Login Form</h1><br />
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="identifier" id="identifier" value={form.identifier} onChange={handleChange} disabled={form.loading} />
          <input type="password" name="password" id="password" value={form.password} onChange={handleChange} autoComplete="true" disabled={form.loading} />
          <button type="submit" disabled={form.loading}>Login</button>
        </form>
      </div>
    </MainLayout>
  )
}

export default WithoutAuth(Page)