import { Wrapper, Text } from "./UserMenu.styled"
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut())
  return (
    <Wrapper>
      <Text>Welcome</Text>
      <button onClick={handleLogOut} type="button">Logout</button>
    </Wrapper>
  )
}