import { Box, IconButton, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Footer() {

    const Enlaces = { color: "#fefae0", textDecoration: "none", cursor: "pointer" }

    return (
        <Box bgcolor={"#283618"} color="#fefae0" p={2} >
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className="footer menu">
                    <Box>
                        <Typography component={Link} to="/" sx={Enlaces}>Quienes somos</Typography>
                    </Box>
                    <Box>
                        <Link path="/" sx={Enlaces}>Contáctenos</Link>
                    </Box>
                    <Box>
                        <Link path="/" sx={Enlaces}>J&J VIP</Link>
                    </Box>
                    <Box>
                        <Link path="/" sx={Enlaces}>Guía de tallas</Link>
                    </Box>
                    <Box>
                        <Link path="/" sx={Enlaces}>Formas de pago</Link>
                    </Box>
                    <Box>
                        <Link path="/" sx={Enlaces}>Devolucion</Link>
                    </Box>
                </Box>
                <Box className="footer socials">
                    <IconButton component={Link} to="/" sx={Enlaces}>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton component={Link} to="/" sx={Enlaces}>
                        <InstagramIcon></InstagramIcon>
                    </IconButton>
                    <IconButton component={Link} to="/" sx={Enlaces}>
                        <PinterestIcon></PinterestIcon>
                    </IconButton>
                </Box>
            </Container>
            <Box sx={{ width: "100%", textAlign: "center" }} >
                <Typography>Jhon&Jhonson &reg; 2022 </Typography>
            </Box>
        </Box>
    )
}