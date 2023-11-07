import { ERROR_MESSAGE } from "../constants/constants.js";

export const lottoLengthValidation = (numbers) => {
    if (numbers.length !== 6) {
        throw new Error(ERROR_MESSAGE.lottoLengthError);
    }
};