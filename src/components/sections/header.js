/* Barra de Navegacion */
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCartCheckout } from "@mui/icons-material";


const ButtonAppBar = () => {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#283618" , color: "#fefae0"}}>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Jhon&Jhonson
            </Typography>
            <Button color="inherit">Inicio</Button>
            <Button color="inherit">Iniciar Sesión</Button>
            <IconButton color="inherit">
                <ShoppingCartCheckout /> 
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default ButtonAppBar