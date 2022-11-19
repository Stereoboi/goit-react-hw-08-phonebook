import { Link, WrapperAuth, Navbar } from "./Authnav.styled"

export const AuthNav = () => {

  return (
    <Navbar>
      <Link to='/'>
        Home
      </Link>
      <WrapperAuth>
      <Link to="register">
        Register
      </Link>
      <Link to="login">
        Login
      </Link>
      </WrapperAuth>
    </Navbar>
  )
}