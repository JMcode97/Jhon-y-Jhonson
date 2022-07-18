import { CssBaseline } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Checkout from "./pages/checkout"

const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App