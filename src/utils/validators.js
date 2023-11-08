import { ERROR_MESSAGE } from "../constants/messages.js";

const TypeValidator = {
  isValidNumber(value) {
    if (!(typeof value === "number" && !Number.isNaN(value))) {
      throw new Error(ERROR_MESSAGE.notValidNumber);
    }
  },

  isArray(value) {
    if (!Array.isArray(value)) {
      throw new Error(ERROR_MESSAGE.notArray);
    }
  },

  isString(value) {
    if (typeof value !== "string") {
      throw new Error(ERROR_MESSAGE.notString);
    }
  },
};

const validateNumberInRange = (number, minInclusive, maxInclusive) => {
  if (!(minInclusive <= number && number <= maxInclusive)) {
    throw new Error(ERROR_MESSAGE.notInNumberRange(minInclusive, maxInclusive));
  }
};

export { TypeValidator, validateNumberInRange };
