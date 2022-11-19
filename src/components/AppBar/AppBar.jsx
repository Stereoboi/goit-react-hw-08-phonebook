import { AuthNav } from "components/AuthNav/AuthNav"

import { useAuth } from "hooks"
import UserMenu from "components/UserMenu/UserMenu"

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
        <>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </>
    
  )
}