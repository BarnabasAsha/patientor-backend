import {v1 as uuid} from 'uuid'
import patients from "../data/patients";
import { NewPatient, Patient } from "../types";

const getPatients = ():Array<Patient> => {
    return patients
}

const addPatient = (data:NewPatient):Patient => {
    const newPatient = {
        ...data,
        id: uuid()
    }
    patients.push(newPatient)
    return newPatient
}

export default {
    getPatients,
    addPatient
}