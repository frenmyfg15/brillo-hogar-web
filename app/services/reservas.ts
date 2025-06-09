
import apiClient from "../lib/axios";
import { Cita } from "../types";

export const agregar = async (cita: Cita) => {
    try {
        const res = await apiClient.post('/api/citas', {
            cita
        });
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const obtenerCitas = async (fecha: Cita['fecha']) => {
    try {
        const res = await apiClient.get(`/api/por-dia?fecha=${fecha}`);
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const obtenerDiasLlenos = async (fecha: Cita['fecha']) => {
    try {
        const res = await apiClient.get(`/api/dias-ocupados?fecha=${fecha}`);
        return res.data
    } catch (error) {
        console.log(error)
    }
}

