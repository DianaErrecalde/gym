import { deleteData, getData, putData, postData } from './axiosSerevice';

/**
 *  No recibe parametros
 *
 * @returns - Devuelve todos los ejercicios
 */
export const listarEjercicios = async () => {
    return await getData('/ejercicios');
};