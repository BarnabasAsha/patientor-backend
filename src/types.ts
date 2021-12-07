
export enum Gender {
    Male = 'male',
    Female = 'female',
}

export interface Patient {
    id: string
    name: string
    gender: Gender
    dateOfBirth: string
    occupation: string
    ssn: string
}

export type NewPatient = Omit<Patient, 'id'>

export interface Diagnose {
    code: string
    name: string
    latin?: string
}