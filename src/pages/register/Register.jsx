import "./Register.scss"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Kang-Social</h3>
            <span className="loginDesc">
                Connect with friends and the worlds around you on Kang-Social
            </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input  placeholder="Username" className="loginInput" />
            <input  placeholder="Email" className="loginInput" />
            <input  placeholder="Password" className="loginInput" />
            <input  placeholder="PasswordAgain" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
