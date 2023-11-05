import { ERROR_MESSAGE } from "../constants/constants.js";

export const inputPerChaseValidation = (price) => {
    if (!Number.isInteger(price / 1000)) {
        throw new Error(ERROR_MESSAGE.perchaseError);
    }
};

export const perchaseRangeValidation = (price) => {
    if (price <= 0){
        throw new Error(ERROR_MESSAGE.perchaseRangeError);
    }
};