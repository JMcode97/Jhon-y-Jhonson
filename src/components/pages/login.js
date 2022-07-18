import Header from "../sections/header"
import "../../styles/styles.css"
import { Button, TextField, Typography } from "@mui/material"
import Footer from "../sections/footer"

const Login = () => {
    return (
        <>
            <Header />
            <div className="login">
                <Typography variant="h4" mb={5} color="#858585">Inicia sesión</Typography>
                <TextField id="user" label="Nombre de usuario" variant="outlined" margin="normal" />
                <TextField id="password" label="Contraseña" variant="outlined" margin="normal" />
                <Button variant="contained" sx={{ m: 5, bgcolor: "#283618" , width: "30%", marginX: "auto"}}>Entrar</Button>
            </div>
            <Footer />
        </>
    )
}

export default Login