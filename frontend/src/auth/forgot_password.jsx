import React from 'react'

const forgot_password = () => {
  return (
    <div style={{minHeight:"50vh"}} className="fgtstyle">
      <form >
      <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Email"
              required
            />
          </div>
          
      <button type="submit" className="auth-btn">
            Send Reset Link
          </button>
      </form>
    </div>
  )
}

export default forgot_password
