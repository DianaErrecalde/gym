import React, {useEffect, useState} from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { listarEjercicios } from '../../servicios/ServiceManager';

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
        buscarEjercicios();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!isLoading && listaEjercios && listaEjercios.map((ejercicio,index) => (
                        <TableRow key={index}>
                            <TableCell >{ejercicio.id_ejercicio}</TableCell>                            
                            <TableCell >{ejercicio.nombre}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EjerciciosABM;
