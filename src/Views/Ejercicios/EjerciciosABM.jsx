import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Grid, Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//servicios
import { listarEjercicios } from '../../servicios/ServiceManager';
import { cambiarEstadoEjercicio , agregarEjercicio } from '../../servicios/ServiceManager';

const EjerciciosABM = () => {

    const [listaEjercios, setListaEjercios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [ejercicioNombre, setEjercicioNombre] = useState('');

    const buscarEjercicios = async () => {
        setIsLoading(true);
        try {
            const response = await listarEjercicios();
            setListaEjercios(response);
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        buscarEjercicios();
    }, []);

    const habilitar = async (nombre) => {
        await cambiarEstadoEjercicio(nombre, false);
        await buscarEjercicios();
    }

    const desHabilitar = async (nombre) => {
        await cambiarEstadoEjercicio(nombre, true);
        await buscarEjercicios();
    }

    const cambiarNombreEjercicio = (e) => {
        console.log(e.target.value); // loguea el valor del EVENTO
        setEjercicioNombre(e.target.value);
        console.log(ejercicioNombre); // loguea el valor del ESTADO y va A DESTIEMPO
    }

    const guardarEjercicioBBDD = async () => {
        setIsLoading(true); //esta cargando y espera que termine la funcion
        try {
            await agregarEjercicio(ejercicioNombre);
            setEjercicioNombre(''); // Limpiar el campo de texto después de guardar
            await buscarEjercicios(); // Actualizar la lista de ejercicios después de agregar uno nuevo
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setIsLoading(false); //termino de cargar
        }
    }

    return (
        <Grid container>
            <Grid item xs={12} sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                <h1>Ejercicios</h1>
            </Grid>
            <Grid item xs={12} sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                <TextField label="Nombre Ejercicio:" variant="standard" color="success" value={ejercicioNombre} onChange={(e) => cambiarNombreEjercicio(e)}/> 
                <Button variant="contained" color="success" sx={{ ml: 2 }} onClick={() => guardarEjercicioBBDD()}> Agregar </Button>
            </Grid>
            <Grid item xs={12} sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>


                <TableContainer component={Paper} sx={{ width: '80%' }} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!isLoading && listaEjercios && listaEjercios.map((ejercicio, index) => (
                                <TableRow key={index}>
                                    <TableCell >{ejercicio.id_ejercicio}</TableCell>
                                    <TableCell >{ejercicio.nombre}</TableCell>
                                    <TableCell >
                                        {ejercicio.en_desuso ?
                                            <Button variant="contained" color="primary" onClick={() => habilitar(ejercicio.nombre)}>Habilitar</Button >
                                            :
                                            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => desHabilitar(ejercicio.nombre)}>Deshabilitar</Button>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default EjerciciosABM;
