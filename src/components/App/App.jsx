import { Route, Routes } from "react-router-dom"
import { Layout } from "components/Layout/Layout"
import { useDispatch } from "react-redux"
import { useAuth } from "hooks"
import { useEffect, lazy } from "react"
import { refreshUser } from "redux/auth/operations"
import { RestrictedRoute } from "components/RestrictedRoute"
import { PrivateRoute } from "components/PrivateRoute"
import LinearIndeterminate from "Loader/Loade"

const Home = lazy(() => import('../../pages/Home/Home'))
const HomeAuth = lazy(() => import('pages/Home/HomeAuth'))
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'))
const Login = lazy(() => import('../../pages/Login/Login'))
const Register = lazy(() => import('../../pages/Register/Register'))


export const App = () => {
  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])

  return isRefreshing ? (
    <LinearIndeterminate/>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={isLoggedIn ? <HomeAuth/> : <Home/>}  />
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