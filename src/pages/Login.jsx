import React from 'react'
import '../assets/form.css'
import logo from '../assets/Logo F! Copy copiar.png'

const Login = () => {
    return (
        <>
          <div>
      <main className="form-signin">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>



          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value="remember-me"
              /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </main>
    </div>  
        </>
    )
}

export default Login
