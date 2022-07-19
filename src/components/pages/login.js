import Header from "../sections/header"
import "../../styles/styles.css"
import { Box, Button, TextField, Typography } from "@mui/material"
import Footer from "../sections/footer"
import { Container } from "@mui/system"

const Login = () => {
    return (
        <>
            <Header />
            <Box className="loginContainer" sx={{bgcolor: "#ebebeb", minHeight: "100vh", textAlign: "center", pt: 12}}>
                <Container sx={{display: "flex", flexDirection: "column", width: "30%"}}>
                    <Typography variant="h4" mb={5} color="#858585">Inicia sesión</Typography>
                    <TextField id="user" label="Nombre de usuario" variant="outlined" margin="normal" />
                    <TextField id="password" label="Contraseña" variant="outlined" margin="normal" />
                    <Button variant="contained" size="medium" sx={{ m: 5, bgcolor: "#283618" , marginX: "auto"}}>Entrar</Button>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Login