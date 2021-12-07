import diagonoses from "../data/diagnoses";
import { Diagnose } from "../types";

const getDiagnoses = ():Array<Diagnose> => {
    return diagonoses
}

export default {
    getDiagnoses
}