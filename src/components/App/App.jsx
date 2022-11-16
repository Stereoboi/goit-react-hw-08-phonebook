import { Route, Routes } from "react-router-dom"
import { Layout } from "components/Layout/Layout"
import { Home} from '../../pages/Home/Home'
import { Contacts} from '../../pages/Contacts/Contacts'
import { Login} from '../../pages/Login/Login'
import { Register} from '../../pages/Register/Register'
import { useDispatch } from "react-redux"
import { useAuth } from "hooks"
import { useEffect } from "react"
import { refreshUser } from "redux/auth/operations"
import { RestrictedRoute } from "components/RestrictedRoute"
import { PrivateRoute } from "components/PrivateRoute"

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}  />
      <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login/>} />
          }
        />
      <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register/>} />
          }
        />
      <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts/>} />
          }
        />  
      </Route>
    </Routes>
  )
}