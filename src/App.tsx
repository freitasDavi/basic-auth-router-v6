import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Blocked } from "./pages/Blocked"
import { PrivateRoutes } from "./utils/PrivateRoute"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/private" element={<Blocked />} />
      </Route>
    </Routes>
  )
}

export default App
