import { ERROR_MESSAGE } from "../constants/constants.js";

export const inputPerChaseValidation = (perchase) => {
    if (!Number.isInteger(perchase / 1000)) {
        throw new Error(ERROR_MESSAGE.perchaseError);
    }
};