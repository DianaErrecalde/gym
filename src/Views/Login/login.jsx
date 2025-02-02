import React, { useState } from 'react';
import { TextField, InputLabel, Input, InputAdornment, IconButton, FormControl, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  //informacion del formulario
  const [formulario, setFormulario] = useState({
    user:"",
    password:""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const cambiarFormulario = (e) => {
    e.preventDefault();
    console.log(formulario);
    setFormulario((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    });
  }
  
  // nos hace el login
  const ingresar = async () => {
    const rawResponse = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formulario)
    });
    const contenido = await rawResponse.json();
    console.log(contenido);
  };
 
  return (
    <div style={{ width: "50%", border: "1px solid red" }}>

      <FormControl variant="standard" fullWidth margin="normal">
        <TextField
          name="user"
          label="Usuario:"
          variant="standard"
          onChange={(event) => cambiarFormulario(event)}
          fullWidth
        />
      </FormControl>
      <FormControl variant="standard" fullWidth margin="normal">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={(event) => cambiarFormulario(event)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "esconder contraseña" : "mostrar contraseña"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl>
        <Button onClick={() => ingresar()}>INGRESAR</Button>
      </FormControl>
    </div>

  );
};

export default Login;
