import React from 'react'
import '../assets/form.css'
import logo from '../assets/Logo F! Copy copiar.png'

const SignIn = () => {
    return (
        <>
           <main className="form-signin">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

          <div className="form-floating">
            <input 
            type="text" 
            className="form-control" 
            id="first_name" 
            name="first_name"
            placeholder="Your First Name" 
            />
            <label htmlFor="email">First Name</label>
          </div>

          <div className="form-floating">
            <input 
            type="text" 
            className="form-control" 
            id="last_name" 
            name="last_name"
            placeholder="Your Last Name" 
            />
            <label htmlFor="email">Last Name</label>
          </div>

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
          
          <div className='form-floating my-1'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            required=''
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender' className='form-label'>Gender</label>
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

          <div className="form-floating">
            <input 
            type="password" 
            className="form-control" 
            id="password_confirm" 
            name="password_confirm"
            placeholder="Password" 
            />
            <label htmlFor="password">Confirm Password</label>
          </div>

          <button className="w-100 my-3 btn btn-lg btn-primary" type="submit">Sign Up</button>
          <p className="mt-5 mb-3 text-muted">© 2020–2021</p>
        </form>
      </main>
        </>
    )
}

export default SignIn
