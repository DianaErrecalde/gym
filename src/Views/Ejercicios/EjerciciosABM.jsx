import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//servicios
import { listarEjercicios } from '../../servicios/ServiceManager';
import { cambiarEstadoEjercicio } from '../../servicios/ServiceManager';

const EjerciciosABM = () => {

    const [listaEjercios, setListaEjercios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const buscarEjercicios = async () => {
        setIsLoading(true);
        try {
            const response = await listarEjercicios();
            console.log(response);
            setListaEjercios(response);
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const fechtData = async () => {
            await buscarEjercicios();
        }
        fechtData();
    }, []);

    const habilitar = async (nombre) => {
        await cambiarEstadoEjercicio(nombre, false);
        await buscarEjercicios();
    }

    const desHabilitar = async (nombre) => {
        await cambiarEstadoEjercicio(nombre, true);
        await buscarEjercicios();
    }

    return (
        <Grid container>
            <Grid item xs={12} sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                <h1>Ejercicios</h1>
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
