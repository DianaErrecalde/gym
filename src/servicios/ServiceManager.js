import { deleteData, getData, putData, postData } from './axiosSerevice';

/**
 *  No recibe parametros
 *
 * @returns - Devuelve todos los ejercicios
 */
export const listarEjercicios = async () => {
    return await getData('/ejercicios');
};

/**
 * 
 * @param {String} nombre nombre del ejercicio a actualizar
 * @param {Boolean} enDesuso esta o no en en desuso
 */
export const cambiarEstadoEjercicio = async (nombre, enDesuso) => {
    return await putData(`/ejercicios?nombre=${nombre}&enDesuso=${enDesuso}`);
}

/**
 * 
 * @param {String} nombre 
 * @returns crea un nuevo ejercicio en la base de datos
 */
export const agregarEjercicio = async (nombreNuevo) => {
    return await postData('/ejercicios', { nombre : nombreNuevo });
}
