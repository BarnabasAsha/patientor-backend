/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Gender, NewPatient } from "./types";

type Fields = { name: unknown, gender: unknown, ssn: unknown, dateOfBirth: unknown, occupation: unknown };

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseText = (text: unknown): string => {
    if (!text || !isString(text)) {
      throw new Error('Incorrect or missing value');
    }
  
    return text;
  };

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };
  
const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
  };

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
  };
  
  const parseGender = (gender: unknown): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing Gender: ' + Gender);
    }
    return gender;
  };


export const toNewPatient = ({ name, gender, ssn, dateOfBirth, occupation }: Fields):NewPatient => {
    const newPatient: NewPatient = {
        name: parseText(name),
        gender: parseGender(gender),
        ssn: parseText(ssn),
        dateOfBirth: parseDate(dateOfBirth),
        occupation: parseText(occupation)
    }
    return newPatient
}