import React,{useState}from 'react';
import { TextField,InputLabel,Input,InputAdornment,IconButton,FormControl} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div style={{width:"50%", border:"1px solid red"}}>
        <FormControl variant="standard" fullWidth margin="normal">
          <TextField 
            id="usuario" 
            label="Usuario:" 
            variant="standard" 
            fullWidth 
          />
        </FormControl>
        <FormControl variant="standard" fullWidth margin="normal">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
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
      </div>
      
    );
};

export default Login;
