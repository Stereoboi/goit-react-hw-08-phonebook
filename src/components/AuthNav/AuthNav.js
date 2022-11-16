import { Link } from "./Authnav.styled"

export const AuthNav = () => {

  return (
    <div>
      <Link to="register">
        Register
      </Link>
      <Link to="login">
        Login
      </Link>
    </div>
  )
}