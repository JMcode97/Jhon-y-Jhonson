/* Barra de Navegacion */
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { Link } from "react-router-dom"

const Header = () => {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#283618" , color: "#fefae0"}}>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Jhon&Jhonson
            </Typography> 
            <Button component={Link} to="/" color="inherit">
                Inicio
            </Button>
            <Button component={Link} to="/login" color="inherit">
                Iniciar Sesión
            </Button>
            <IconButton component={Link} to="/checkout" color="inherit">
                <ShoppingCartCheckout /> 
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default Header