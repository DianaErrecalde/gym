import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// MENU RECIBE CONSTANTE Y FUNCION QUE CAMBIA EL VALOR
const Menu = ({showLogin,setShowLogin}) => {
  return (
    <Box style={{ width: "100%" }}>
      {/* <Box sx={{ flexGrow: 1 }}>*/}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GYM MASTER
          </Typography>
          {/* CUANDO PRESIONAMOS EL BOTON CAMBIAMOS EL MOSTRAR CON LAS PROPS RECIBIDAS*/}
          <Button color="inherit" onClick={() => setShowLogin(!showLogin)}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Menu;
